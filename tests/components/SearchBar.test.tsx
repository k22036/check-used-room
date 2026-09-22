import { fireEvent, render, screen } from "@testing-library/react";
import SearchBar from "@/components/SearchBar";
import "@testing-library/jest-dom";

describe("SearchBar", () => {
  it("renders the input with the correct placeholder", () => {
    render(
      <SearchBar
        onChange={() => undefined}
        placeholder="検索ワード"
        value=""
      />,
    );
    expect(screen.getByPlaceholderText("検索ワード")).toBeInTheDocument();
  });

  it("renders the input with the correct value", () => {
    render(<SearchBar onChange={() => undefined} value="abc" />);
    expect(screen.getByDisplayValue("abc")).toBeInTheDocument();
  });

  it("calls onChange when input value changes", () => {
    const recordInputChange = jest.fn();
    render(<SearchBar onChange={recordInputChange} value="" />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });
    expect(recordInputChange).toHaveBeenCalled();
  });

  it("renders the search icon", () => {
    render(<SearchBar onChange={() => undefined} value="" />);
    expect(screen.getByTestId("SearchIcon")).toBeInTheDocument();
  });
});
