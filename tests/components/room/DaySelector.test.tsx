import { render, screen } from "@testing-library/react";
import DaySelector from "@/components/room/DaySelector";
import "@testing-library/jest-dom";
import { jest } from "@jest/globals";
import { DAYS } from "@/lib/constants/date";

describe("DaySelector", () => {
  it("renders all day options", () => {
    render(<DaySelector day={DAYS[0]} onChange={() => {}} />);
    DAYS.forEach((d) => {
      expect(screen.getByLabelText(d)).toBeInTheDocument();
    });
  });

  it("checks the correct day input", () => {
    render(<DaySelector day={DAYS[2]} onChange={() => {}} />);
    const input = screen.getByLabelText(DAYS[2]);
    expect(input).toBeChecked();
  });

  it("calls onChange when a different day is selected", () => {
    let selectedDay = DAYS[0];
    const handleChange = jest.fn((e: React.ChangeEvent<HTMLInputElement>) => {
      selectedDay = e.target.value;
    });
    render(<DaySelector day={selectedDay} onChange={handleChange} />);

    const input = screen.getByLabelText(DAYS[1]);
    input.click();
    expect(handleChange).toHaveBeenCalled();
    expect(selectedDay).toBe(DAYS[1]);
  });
});
