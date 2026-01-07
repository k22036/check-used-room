import { render, screen } from "@testing-library/react";
import RoomList from "../../../components/home/RoomList";
import "@testing-library/jest-dom";

describe("RoomList", () => {
  it("renders a list of rooms", () => {
    const rooms = ["A101", "B202", "C303"];
    render(<RoomList rooms={rooms} />);
    rooms.forEach((room) => {
      expect(screen.getByText(room)).toBeInTheDocument();
    });
    expect(screen.getAllByRole("listitem")).toHaveLength(rooms.length);
  });

  it("renders empty list without error", () => {
    render(<RoomList rooms={[]} />);
    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
  });
});
