import { expect, type Page, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  // console.errorをキャッチしてテスト失敗にする
  page.on("console", (msg) => {
    if (msg.type() === "error") {
      throw new Error(`console.error: ${msg.text()}`);
    }
  });

  await page.goto("/");
  await page.waitForLoadState("load");
});

test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    const screenshot = await page.screenshot({ fullPage: true });
    await testInfo.attach("screenshot", {
      body: screenshot,
      contentType: "image/png",
    });
  }
});

test.describe("Transition Tests", () => {
  const inputSearchString = async (page: Page, searchString: string) => {
    const input = page.getByPlaceholder("教室名で検索");
    await input.fill(searchString);
  };

  const clickRoom = async (page: Page, roomSubstring: string) => {
    const roomLink = page.getByRole("link").filter({ hasText: roomSubstring });
    await roomLink.click();
  };

  const checkRoomDetail = async (page: Page) => {
    const title = page.getByRole("heading", { level: 1 });
    await expect(title).toHaveText(/詳細/);
  };

  const goBack = async (page: Page) => {
    return page.getByRole("link", { name: /ホームに戻る/ }).click();
  };

  const checkHome = async (page: Page) => {
    const title = page.getByRole("heading", { level: 1 });
    await expect(title).toHaveText("教室一覧");
  };

  test("should navigate to room detail and back", async ({ page }) => {
    const searchString = "14";
    await inputSearchString(page, searchString);
    const roomSubstring = "302";
    await clickRoom(page, roomSubstring);
    await checkRoomDetail(page);
    await goBack(page);
    await checkHome(page);
  });
});
