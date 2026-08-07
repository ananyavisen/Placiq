import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  resourceTypeFilters,
  difficultyFilters,
  durationOptions,
} from "../../data/resources";

function FilterChips({ options, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={`rounded-lg px-2.5 py-1 font-[Inter] text-[11px] font-medium transition-all duration-200 ${
            active === option
              ? "bg-[#8B5CF6] text-white"
              : "border border-[#ECE4EF] bg-white text-[#6B6478] hover:border-[#C4B5FD]"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default function FilterSection() {
  const [resourceType, setResourceType] = useState("All");
  const [difficulty, setDifficulty] = useState("All");
  const [duration, setDuration] = useState("Any Duration");

  return (
    <div className="rounded-2xl border border-[#ECE4EF] bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-[Inter] text-sm font-semibold text-[#2F314D]">
          Filter Resources
        </h3>
        <button
          type="button"
          onClick={() => {
            setResourceType("All");
            setDifficulty("All");
            setDuration("Any Duration");
          }}
          className="font-[Inter] text-xs font-medium text-[#8B5CF6] transition hover:text-[#7C3AED]"
        >
          Clear All
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <p className="mb-2 font-[Inter] text-xs font-medium text-[#6B6478]">
            Resource Type
          </p>
          <FilterChips
            options={resourceTypeFilters}
            active={resourceType}
            onChange={setResourceType}
          />
        </div>

        <div>
          <p className="mb-2 font-[Inter] text-xs font-medium text-[#6B6478]">
            Difficulty Level
          </p>
          <FilterChips
            options={difficultyFilters}
            active={difficulty}
            onChange={setDifficulty}
          />
        </div>

        <div>
          <p className="mb-2 font-[Inter] text-xs font-medium text-[#6B6478]">
            Duration
          </p>
          <div className="relative">
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full appearance-none rounded-xl border border-[#ECE4EF] bg-white py-2 pl-3 pr-8 font-[Inter] text-xs text-[#2F314D] outline-none transition focus:border-[#C4B5FD]"
            >
              {durationOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown
              size={14}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
