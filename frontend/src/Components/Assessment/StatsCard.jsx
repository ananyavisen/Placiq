import { CheckCircle2, Clock, PieChart, Star } from "lucide-react";
import { assessmentStats } from "../../data/assessments";

const iconMap = {
  check: CheckCircle2,
  clock: Clock,
  chart: PieChart,
  star: Star,
};

export default function StatsCard() {
  return (
    <div className="rounded-2xl border border-[#ECE4EF] bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-[Inter] text-sm font-semibold text-[#2F314D]">
          Assessment Stats
        </h3>
        <button
          type="button"
          className="font-[Inter] text-xs font-medium text-[#8B5CF6] transition hover:text-[#7C3AED]"
        >
          View All
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {assessmentStats.map((stat) => {
          const Icon = iconMap[stat.icon];

          return (
            <div key={stat.id} className="flex items-center gap-3">
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${stat.iconBg}`}
              >
                <Icon size={16} className={stat.iconColor} strokeWidth={2} />
              </div>
              <span className="flex-1 font-[Inter] text-sm text-[#6B6478]">
                {stat.label}
              </span>
              <span className="font-[Inter] text-sm font-semibold text-[#2F314D]">
                {stat.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
