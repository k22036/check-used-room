import { fireEvent, render, screen } from "@testing-library/react";
import Page from "@/app/pages/room/[room]/page";
import "@testing-library/jest-dom";

const mockUseParams = jest.fn();

jest.mock("next/navigation", () => ({
  useParams: () => mockUseParams(),
}));

jest.mock("@/lib/data/complete_data.json", () => ({
  A101: [
    { subject: "数学", room: "A101", season: "前期", open_time: "月1" },
    { subject: "英語", room: "A101", season: "後期", open_time: "火2" },
  ],
}));

describe("[room]/page", () => {
  beforeEach(() => {
    mockUseParams.mockReturnValue({
      room: encodeURIComponent("A101"),
    });
  });

  it("renders title, back link, terms, days, and subjects", () => {
    render(<Page />);
    expect(
      screen.getByRole("heading", { name: /A101 の詳細/ }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /ホームに戻る/ }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText("前期")).toBeInTheDocument();
    expect(screen.getByLabelText("後期")).toBeInTheDocument();
    expect(screen.getByLabelText("月")).toBeInTheDocument();
    expect(screen.getByLabelText("日")).toBeInTheDocument();
    expect(screen.getByText("数学")).toBeInTheDocument();
  });

  it("filters subjects based on selected day and season", () => {
    render(<Page />);
    [
      ["土", "後期", "該当する授業はありません"],
      ["月", "前期", "数学"],
      ["月", "後期", "該当する授業はありません"],
      ["火", "前期", "該当する授業はありません"],
      ["火", "後期", "英語"],
    ].forEach(([day, season, subject]) => {
      fireEvent.click(screen.getByLabelText(day));
      fireEvent.click(screen.getByLabelText(season));
      expect(screen.getByText(subject)).toBeInTheDocument();
    });
  });

  it("renders RoomNotFound when room does not exist", () => {
    mockUseParams.mockReturnValueOnce({
      room: encodeURIComponent("Z999"),
    });
    render(<Page />);
    expect(screen.getByText("該当する教室がありません")).toBeInTheDocument();
  });
});
