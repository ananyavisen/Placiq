import { Trophy } from "lucide-react";

/* Circular progress ring used in the milestone card */
function MilestoneRing({ percent }) {
  const r = 40;
  const circ = 2 * Math.PI * r;
  const dash = (percent / 100) * circ;

  return (
    <div className="relative flex items-center justify-center">
      <svg width="100" height="100" className="-rotate-90">
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke="#ECE4EF"
          strokeWidth="8"
        />
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke="url(#milestone-grad)"
          strokeWidth="8"
          strokeDasharray={`${dash} ${circ}`}
          strokeLinecap="round"
          className="transition-all duration-700"
        />
        <defs>
          <linearGradient id="milestone-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C4B5FD" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="font-[Manrope] text-xl font-bold text-[#2F314D]">
          {percent}%
        </span>
        <span className="font-[Inter] text-[10px] text-[#9CA3AF]">Complete</span>
      </div>
    </div>
  );
}

export default function MilestoneProgress() {
  const nextMilestoneProgress = 7; // out of 12
  const nextMilestonePct = Math.round((nextMilestoneProgress / 12) * 100);

  return (
    <div className="rounded-2xl border border-[#ECE4EF] bg-white p-4 shadow-sm">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-[Inter] text-sm font-semibold text-[#2F314D]">
          Milestone Progress
        </h3>
        <button
          type="button"
          className="font-[Inter] text-xs font-medium text-[#8B5CF6] transition hover:text-[#7C3AED]"
        >
          View All
        </button>
      </div>

      {/* Ring + description */}
      <div className="flex items-center gap-4">
        <MilestoneRing percent={78} />
        <div>
          <p className="font-[Manrope] text-sm font-semibold text-[#2F314D]">
            Great job!
          </p>
          <p className="mt-0.5 font-[Inter] text-xs leading-relaxed text-[#6B6478]">
            You're making excellent progress towards your goals.
          </p>
        </div>
      </div>

      {/* Next milestone */}
      <div className="mt-4">
        <p className="mb-2 font-[Inter] text-xs font-semibold text-[#2F314D]">
          Next Milestone
        </p>
        <div className="rounded-xl border border-[#ECE4EF] bg-[#FAF5FF] p-3">
          <div className="mb-2 flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#FCD34D] to-[#B45309]">
              <Trophy size={14} className="text-white" strokeWidth={2} />
            </div>
            <p className="font-[Inter] text-xs font-semibold text-[#2F314D]">
              Placement Ready
            </p>
          </div>
          <p className="mb-2 font-[Inter] text-[11px] leading-relaxed text-[#6B6478]">
            Complete 5 more achievements to unlock this milestone.
          </p>
          {/* Progress bar */}
          <div className="flex items-center gap-2">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#ECE4EF]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#C4B5FD] to-[#7C3AED] transition-all duration-700"
                style={{ width: `${nextMilestonePct}%` }}
              />
            </div>
            <span className="shrink-0 font-[Inter] text-[10px] text-[#6B6478]">
              {nextMilestoneProgress}/12
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
