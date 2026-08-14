import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { filterTabs } from "../../data/achievements";

export default function AchievementFilters({ activeFilter, onFilterChange }) {
  const [sort, setSort] = useState("Recently Earned");

  return (
    <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-1.5">
        {filterTabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => onFilterChange(tab)}
            className={`rounded-xl px-3.5 py-1.5 font-[Inter] text-xs font-medium transition-all duration-200 ${
              activeFilter === tab
                ? "bg-[#8B5CF6] text-white shadow-sm"
                : "border border-[#ECE4EF] bg-white text-[#6B6478] hover:border-[#C4B5FD] hover:text-[#7C3AED]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Sort dropdown */}
      <div className="relative shrink-0">
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="h-9 appearance-none rounded-xl border border-[#ECE4EF] bg-white py-1.5 pl-3 pr-8 font-[Inter] text-xs text-[#2F314D] shadow-sm outline-none transition focus:border-[#C4B5FD]"
        >
          <option>Recently Earned</option>
          <option>Oldest First</option>
          <option>XP: High to Low</option>
          <option>Status</option>
        </select>
        <ChevronDown
          size={13}
          className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
        />
      </div>
    </div>
  );
}
