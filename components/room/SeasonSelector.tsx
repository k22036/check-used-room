import { SEASONS } from "@/lib/constants/date";

interface Props {
  season: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SeasonSelector = ({ season, onChange }: Props) => (
  <div className="flex flex-wrap justify-center gap-6 mb-6">
    {SEASONS.map(({ value, label, id }) => (
      <div className="flex items-center gap-2" key={id}>
        <input
          checked={season === value}
          className="accent-orange-400 size-5"
          id={id}
          name="season"
          onChange={onChange}
          type="radio"
          value={value}
        />
        <label className="text-orange-700 font-medium" htmlFor={id}>
          {label}
        </label>
      </div>
    ))}
  </div>
);

export default SeasonSelector;
