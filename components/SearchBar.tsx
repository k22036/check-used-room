import SearchIcon from "@mui/icons-material/Search";
import type React from "react";

type SearchBarProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
};

const SearchBar = ({
  value,
  onChange,
  placeholder = "検索...",
  className = "",
}: SearchBarProps) => (
  <div className={`flex items-center justify-center w-full ${className}`}>
    <div className="relative w-full max-w-lg">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <SearchIcon className="text-orange-400" />
      </span>
      <input
        type="text"
        placeholder={placeholder}
        className="
          block w-full pl-10 pr-4 py-3
          border-2 border-orange-200 rounded-xl
          bg-orange-50/70 text-lg
          placeholder-orange-300
          focus:outline-none focus:ring-2 focus:ring-orange-300
          shadow-md transition
        "
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
);

export default SearchBar;
