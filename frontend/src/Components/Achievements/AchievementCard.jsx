import { CheckCircle2, Lock } from "lucide-react";

/* Circular progress ring (SVG) */
function ProgressRing({ current, total }) {
  const r = 18;
  const circ = 2 * Math.PI * r;
  const pct = total > 0 ? current / total : 0;
  const dash = pct * circ;

  return (
    <div className="relative flex items-center justify-center">
      <svg width="48" height="48" className="-rotate-90">
        <circle
          cx="24"
          cy="24"
          r={r}
          fill="none"
          stroke="#ECE4EF"
          strokeWidth="4"
        />
        <circle
          cx="24"
          cy="24"
          r={r}
          fill="none"
          stroke="#8B5CF6"
          strokeWidth="4"
          strokeDasharray={`${dash} ${circ}`}
          strokeLinecap="round"
          className="transition-all duration-700"
        />
      </svg>
      <span className="absolute font-[Manrope] text-[10px] font-bold text-[#2F314D]">
        {current}/{total}
      </span>
    </div>
  );
}

export default function AchievementCard({ achievement }) {
  const Icon = achievement.icon;

  const isUnlocked = achievement.status === "unlocked";
  const isInProgress = achievement.status === "in-progress";
  const isLocked = achievement.status === "locked";

  return (
    <div
      className={`group relative flex items-center gap-4 rounded-2xl border px-4 py-4 shadow-sm transition-all duration-200 hover:shadow-md ${
        achievement.highlight
          ? "border-[#C4B5FD] bg-gradient-to-r from-[#FAF5FF] to-white"
          : isLocked
          ? "border-[#ECE4EF] bg-white/60 opacity-70"
          : "border-[#ECE4EF] bg-white"
      }`}
    >
      {/* Icon */}
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${
          isLocked ? "from-[#E5E7EB] to-[#D1D5DB]" : achievement.iconGradient
        }`}
      >
        <Icon
          size={22}
          className={isLocked ? "text-[#9CA3AF]" : "text-white"}
          strokeWidth={2}
        />
      </div>

      {/* Main content */}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-[Inter] text-sm font-semibold text-[#2F314D]">
            {achievement.title}
          </h3>
          <span
            className={`rounded-full px-2 py-0.5 font-[Inter] text-[10px] font-medium ${achievement.categoryColor}`}
          >
            {achievement.category}
          </span>
          {achievement.highlight && (
            <span className="rounded-full bg-[#FEF3C7] px-2 py-0.5 font-[Inter] text-[10px] font-semibold text-[#D97706]">
              ★ Highlighted
            </span>
          )}
        </div>
        <p className="mt-0.5 font-[Inter] text-xs text-[#6B6478]">
          {achievement.description}
        </p>
        {isUnlocked && achievement.date && (
          <p className="mt-1 font-[Inter] text-[10px] text-[#9CA3AF]">
            {achievement.date}
          </p>
        )}
      </div>

      {/* Right section — status + XP */}
      <div className="flex shrink-0 flex-col items-end gap-1.5">
        {/* Status indicator */}
        {isUnlocked && (
          <div className="flex items-center gap-1">
            <CheckCircle2 size={15} className="text-[#16A34A]" strokeWidth={2} />
            <span className="font-[Inter] text-xs font-medium text-[#16A34A]">
              Unlocked
            </span>
          </div>
        )}
        {isInProgress && (
          <div className="flex items-center gap-2">
            <ProgressRing
              current={achievement.progress.current}
              total={achievement.progress.total}
            />
            <span className="font-[Inter] text-xs font-medium text-[#6B6478]">
              In Progress
            </span>
          </div>
        )}
        {isLocked && (
          <div className="flex items-center gap-1">
            <Lock size={13} className="text-[#9CA3AF]" strokeWidth={2} />
            <span className="font-[Inter] text-xs text-[#9CA3AF]">Locked</span>
          </div>
        )}

        {/* XP badge */}
        <span
          className={`rounded-full px-2.5 py-0.5 font-[Inter] text-[11px] font-semibold ${
            isLocked
              ? "bg-[#F3F4F6] text-[#9CA3AF]"
              : "bg-[#F3E8FF] text-[#7C3AED]"
          }`}
        >
          +{achievement.xp} XP
        </span>
      </div>
    </div>
  );
}
