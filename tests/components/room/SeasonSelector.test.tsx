import { render, screen } from "@testing-library/react";
import SeasonSelector from "@/components/room/SeasonSelector";
import { SEASONS } from "@/lib/constants/date";
import "@testing-library/jest-dom";
import { jest } from "@jest/globals";

describe("SeasonSelector", () => {
  it("renders all season options", () => {
    render(<SeasonSelector season={SEASONS[0].value} onChange={() => {}} />);
    SEASONS.forEach(({ label }) => {
      expect(screen.getByLabelText(label)).toBeInTheDocument();
    });
  });

  it("checks the correct season input", () => {
    render(<SeasonSelector season={SEASONS[1].value} onChange={() => {}} />);
    const input = screen.getByLabelText(SEASONS[1].label);
    expect(input).toBeChecked();
  });

  it("calls onChange when a different season is selected", () => {
    let selectedSeason = SEASONS[0].value;
    const handleChange = jest.fn((e: React.ChangeEvent<HTMLInputElement>) => {
      selectedSeason = e.target.value;
    });
    render(<SeasonSelector season={selectedSeason} onChange={handleChange} />);

    const input = screen.getByLabelText(SEASONS[1].label);
    input.click();
    expect(handleChange).toHaveBeenCalled();
    expect(selectedSeason).toBe(SEASONS[1].value);
  });
});
