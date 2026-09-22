import { DAYS } from "@/lib/constants/date";

interface Props {
  day: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DaySelector = ({ day, onChange }: Props) => (
  <div className="flex flex-wrap justify-center gap-3 mb-8">
    {DAYS.map((d) => (
      <div className="flex items-center gap-1" key={d}>
        <input
          aria-label={d}
          checked={d === day}
          className="accent-orange-400 size-5"
          id={`day-${d}`}
          name="day"
          onChange={onChange}
          type="radio"
          value={d}
        />
        <label className="text-orange-600 font-medium" htmlFor={`day-${d}`}>
          {d}
        </label>
      </div>
    ))}
  </div>
);

export default DaySelector;
