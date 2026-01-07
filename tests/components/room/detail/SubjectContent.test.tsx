import { render, screen } from "@testing-library/react";
import SubjectContent from "@/components/room/detail/SubjectContent";
import "@testing-library/jest-dom";

describe("SubjectContent", () => {
  it("renders subject content correctly", () => {
    const data = {
      room: "A101",
      season: "前期",
      open_time: "月1",
      subject: "数学",
    };
    render(<SubjectContent data={data} />);
    expect(screen.getByText("教室: A101 / 前期 / 月1")).toBeInTheDocument();
  });
});
