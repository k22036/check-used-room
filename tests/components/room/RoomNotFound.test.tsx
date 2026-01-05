import { render, screen } from "@testing-library/react";
import RoomNotFound from "@/components/room/RoomNotFound";
import "@testing-library/jest-dom";

describe("RoomNotFound", () => {
  it("renders not found message", () => {
    render(<RoomNotFound />);
    expect(screen.getByText("該当する教室がありません")).toBeInTheDocument();
  });
});
