import { render, screen } from "@testing-library/react";
import RoomDetailList from "@/components/room/RoomDetailList";
import "@testing-library/jest-dom";

describe("RoomDetailList", () => {
  it("renders room details correctly", () => {
    const data = [
      {
        subject: "数学",
        room: "A101",
        season: "前期",
        open_time: "月1",
      },
      {
        subject: "英語",
        room: "B202",
        season: "後期",
        open_time: "火2",
      },
    ];
    render(<RoomDetailList data={data} />);
    expect(screen.getByText("数学")).toBeInTheDocument();
    expect(screen.getByText("教室: A101 / 前期 / 月1")).toBeInTheDocument();
    expect(screen.getByText("英語")).toBeInTheDocument();
    expect(screen.getByText("教室: B202 / 後期 / 火2")).toBeInTheDocument();
  });

  it("renders no data message when data is empty", () => {
    render(<RoomDetailList data={[]} />);
    expect(screen.getByText("該当する授業はありません")).toBeInTheDocument();
  });
});
