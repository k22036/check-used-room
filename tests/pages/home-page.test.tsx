import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "@/app/page";

jest.mock("@/lib/get_rooms", () => ({
  rooms: ["A101", "B202", "C303"],
}));

describe("Home page", () => {
  it("renders the page title", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /教室一覧/i }),
    ).toBeInTheDocument();
  });

  it("shows all rooms by default", () => {
    render(<Home />);
    expect(screen.getByText("A101")).toBeInTheDocument();
    expect(screen.getByText("B202")).toBeInTheDocument();
    expect(screen.getByText("C303")).toBeInTheDocument();
  });

  it("filters rooms by search text", () => {
    render(<Home />);
    const input = screen.getByPlaceholderText("教室名で検索...");
    fireEvent.change(input, { target: { value: "B" } });
    expect(screen.getByText("B202")).toBeInTheDocument();
    expect(screen.queryByText("A101")).toBeNull();
    expect(screen.queryByText("C303")).toBeNull();
  });

  it("shows not found message if no rooms match", () => {
    render(<Home />);
    const input = screen.getByPlaceholderText("教室名で検索...");
    fireEvent.change(input, { target: { value: "Z" } });
    expect(screen.getByText(/該当する教室がありません/)).toBeInTheDocument();
  });
});
