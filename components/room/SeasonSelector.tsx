import { SEASONS } from "@/lib/constants/date";

type Props = {
  season: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SeasonSelector = ({ season, onChange }: Props) => (
  <div className="flex flex-wrap justify-center gap-6 mb-6">
    {SEASONS.map(({ value, label, id }) => (
      <div className="flex items-center gap-2" key={id}>
        <input
          id={id}
          type="radio"
          value={value}
          checked={season === value}
          onChange={onChange}
          className="accent-orange-400 w-5 h-5"
        />
        <label htmlFor={id} className="text-orange-700 font-medium">
          {label}
        </label>
      </div>
    ))}
  </div>
);

export default SeasonSelector;
