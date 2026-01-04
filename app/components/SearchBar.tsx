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
        <svg
          className="w-5 h-5 text-orange-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <title>検索アイコン</title>
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </span>
      <input
        type="text"
        placeholder={placeholder}
        className="block w-full pl-10 pr-4 py-3 border-2 border-orange-200 rounded-xl bg-orange-50/70 text-lg focus:outline-none focus:ring-2 focus:ring-orange-300 shadow-[0_2px_8px_0_rgba(255,183,77,0.10)] transition placeholder-orange-300"
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
);

export default SearchBar;
