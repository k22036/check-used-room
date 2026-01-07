import { render, screen } from "@testing-library/react";
import SubjectTitle from "@/components/room/detail/SubjectTitle";
import "@testing-library/jest-dom";

describe("SubjectTitle", () => {
  it("renders subject title correctly", () => {
    render(<SubjectTitle subject="数学" />);
    expect(screen.getByText("数学")).toBeInTheDocument();
  });
});
