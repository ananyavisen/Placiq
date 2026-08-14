import { categoryProgress } from "../../data/achievements";

export default function AchievementCategories() {
  return (
    <div className="mt-4 rounded-2xl border border-[#ECE4EF] bg-white p-4 shadow-sm">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-[Inter] text-sm font-semibold text-[#2F314D]">
          Achievement Categories
        </h3>
        <button
          type="button"
          className="font-[Inter] text-xs font-medium text-[#8B5CF6] transition hover:text-[#7C3AED]"
        >
          View All
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {categoryProgress.map((cat) => {
          const Icon = cat.icon;
          const pct = Math.round((cat.current / cat.total) * 100);
          return (
            <div key={cat.id} className="flex items-center gap-3">
              {/* Icon */}
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${cat.iconBg}`}
              >
                <Icon size={15} className={cat.iconColor} strokeWidth={2} />
              </div>

              {/* Name + bar */}
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center justify-between">
                  <p className="font-[Inter] text-xs font-medium text-[#2F314D]">
                    {cat.label}
                  </p>
                  <p className="font-[Inter] text-[10px] text-[#9CA3AF]">
                    {cat.current}/{cat.total}
                  </p>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#ECE4EF]">
                  <div
                    className={`h-full rounded-full ${cat.barColor} transition-all duration-700`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
