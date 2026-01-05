import { render, screen } from "@testing-library/react";
import PageTitle from "@/components/PageTitle";
import "@testing-library/jest-dom";

describe("PageTitle", () => {
  it("renders the title correctly", () => {
    render(<PageTitle title="テストタイトル" />);
    expect(
      screen.getByRole("heading", { name: "テストタイトル" }),
    ).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<PageTitle title="タイトル" className="custom-class" />);
    const heading = screen.getByRole("heading", { name: "タイトル" });
    expect(heading).toHaveClass("custom-class");
  });
});
