import { Filter, ChevronDown } from "lucide-react";

const FILTER_ORDER = [
  "all",
  "wishlist",
  "applied",
  "oa",
  "interview",
  "offer",
  "rejected",
  "archived",
];

const FILTER_LABELS = {
  all: "All",
  wishlist: "Wishlist",
  applied: "Applied",
  oa: "OA",
  interview: "Interview",
  offer: "Offer",
  rejected: "Rejected",
  archived: "Archived",
};

export default function ApplicationFilters({
  counts,
  activeFilter,
  onFilterChange,
  onFilterClick,
  sortBy = "recent",
  onSortChange,
}) {
  return (
    <div className="flex mt-1 items-center justify-between gap-2">
      
      {/* Status Filters */}
      <div
        className="
          flex items-center 
          rounded-xl
          border border-[#E9E2F5]
         
          p-1
          shadow-[0_2px_10px_rgba(139,92,246,0.04)]
        "
      >
        {FILTER_ORDER.map((filter) => {
          const isActive = activeFilter === filter;
          const count = counts?.[filter] ?? 0;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => onFilterChange(filter)}
              className={`
                flex items-center gap-1.5
                whitespace-nowrap
                rounded-lg
                px-3 py-1.5
                font-[Inter]
                text-[11px]
                font-medium
                transition-all
                ${
                  isActive
                    ? "bg-[#8B5CF6] text-white shadow-sm"
                    : "text-[#34304A] hover:bg-[#F5F0FF]"
                }
              `}
            >
              <span>{FILTER_LABELS[filter]}</span>

              <span
                className={
                  isActive
                    ? "text-white/90"
                    : "text-[#777188]"
                }
              >
                ({count})
              </span>
            </button>
          );
        })}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        
        {/* Advanced Filters */}
        <button
          type="button"
          onClick={onFilterClick}
          className="
            flex items-center gap-2
            rounded-xl
            border border-[#E4DDF0]
            bg-white/80
            px-3.5 py-2
            font-[Inter]
            text-xs
            font-medium
            text-[#39344D]
            transition
            hover:bg-[#F8F5FF]
          "
        >
          <Filter
            size={14}
            strokeWidth={2}
            className="text-[#8B5CF6]"
          />

          Filters
        </button>

        {/* Sort */}
        <button
          type="button"
          onClick={() =>
            onSortChange?.(
              sortBy === "recent"
                ? "oldest"
                : "recent"
            )
          }
          className="
            flex items-center gap-2
            rounded-xl
            border border-[#E4DDF0]
            bg-white/80
            px-3.5 py-2
            font-[Inter]
            text-xs
            font-medium
            text-[#39344D]
            transition
            hover:bg-[#F8F5FF]
          "
        >
          Sort: {sortBy === "recent" ? "Recent" : "Oldest"}

          <ChevronDown
            size={14}
            className="text-[#777188]"
          />
        </button>
      </div>
    </div>
  );
}