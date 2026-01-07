import { fireEvent, render, screen } from "@testing-library/react";
import SearchBar from "@/components/SearchBar";
import "@testing-library/jest-dom";

describe("SearchBar", () => {
  it("renders the input with the correct placeholder", () => {
    render(<SearchBar value="" onChange={() => {}} placeholder="検索ワード" />);
    expect(screen.getByPlaceholderText("検索ワード")).toBeInTheDocument();
  });

  it("renders the input with the correct value", () => {
    render(<SearchBar value="abc" onChange={() => {}} />);
    expect(screen.getByDisplayValue("abc")).toBeInTheDocument();
  });

  it("calls onChange when input value changes", () => {
    const handleChange = jest.fn();
    render(<SearchBar value="" onChange={handleChange} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });
    expect(handleChange).toHaveBeenCalled();
  });

  it("renders the search icon", () => {
    render(<SearchBar value="" onChange={() => {}} />);
    expect(screen.getByTestId("SearchIcon")).toBeInTheDocument();
  });
});
