import { render, screen } from "@testing-library/react";
import SubjectNotFound from "@/components/room/detail/SubjectNotFound";
import "@testing-library/jest-dom";

describe("SubjectNotFound", () => {
  it("renders not found message", () => {
    render(<SubjectNotFound />);
    expect(screen.getByText("該当する授業はありません")).toBeInTheDocument();
  });
});
