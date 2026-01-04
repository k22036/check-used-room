type Props = {
  season: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SeasonSelector = ({ season, onChange }: Props) => (
  <div className="flex flex-wrap justify-center gap-6 mb-6">
    <div className="flex items-center gap-2">
      <input
        id="early"
        type="radio"
        value="前期"
        checked={season === "前期"}
        onChange={onChange}
        className="accent-orange-400 w-5 h-5"
      />
      <label htmlFor="early" className="text-orange-700 font-medium">
        前期
      </label>
    </div>
    <div className="flex items-center gap-2">
      <input
        id="final"
        type="radio"
        value="後期"
        checked={season === "後期"}
        onChange={onChange}
        className="accent-orange-400 w-5 h-5"
      />
      <label htmlFor="final" className="text-orange-700 font-medium">
        後期
      </label>
    </div>
  </div>
);

export default SeasonSelector;
