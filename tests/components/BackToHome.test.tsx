import { render, screen } from "@testing-library/react";
import BackToHome from "@/components/BackToHome";
import "@testing-library/jest-dom";

describe("BackToHome", () => {
  it("renders the link to home", () => {
    render(<BackToHome />);
    const link = screen.getByRole("link", { name: /ホームに戻る/ });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });

  it("renders the back icon", () => {
    render(<BackToHome />);
    expect(screen.getByTitle("戻るアイコン")).toBeInTheDocument();
  });
});
