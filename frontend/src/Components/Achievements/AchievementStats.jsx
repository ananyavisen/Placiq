import { achievementStats } from "../../data/achievements";

export default function AchievementStats() {
  return (
    <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {achievementStats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.id}
            className="flex items-start gap-3 rounded-2xl border border-[#ECE4EF] bg-white px-4 py-4 shadow-sm transition-all duration-200 hover:shadow-md"
          >
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${stat.iconBg}`}
            >
              <Icon size={20} className={stat.iconColor} strokeWidth={2} />
            </div>
            <div className="min-w-0">
              <p className="font-[Manrope] text-xl font-bold leading-tight text-[#2F314D]">
                {stat.value}
              </p>
              <p className="mt-0.5 font-[Inter] text-[11px] font-medium leading-tight text-[#6B6478]">
                {stat.label}
              </p>
              <p className="mt-1 font-[Inter] text-[10px] text-[#9CA3AF]">
                {stat.sub}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
