import { DAYS } from "@/lib/constants/date";

type Props = {
  day: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const DaySelector = ({ day, onChange }: Props) => (
  <div className="flex flex-wrap justify-center gap-3 mb-8">
    {DAYS.map((d) => (
      <div key={d} className="flex items-center gap-1">
        <input
          id={`day-${d}`}
          type="radio"
          value={d}
          checked={d === day}
          onChange={onChange}
          className="accent-orange-400 w-5 h-5"
        />
        <label htmlFor={`day-${d}`} className="text-orange-600 font-medium">
          {d}
        </label>
      </div>
    ))}
  </div>
);

export default DaySelector;
