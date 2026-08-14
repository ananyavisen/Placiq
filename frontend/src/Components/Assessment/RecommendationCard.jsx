import { ChevronRight } from "lucide-react";
import { recommendations } from "../../data/assessments";

export default function RecommendationCard() {
  return (
    <div className="mt-4 rounded-2xl border border-[#ECE4EF] bg-white p-5 shadow-sm">
      <h3 className="mb-4 font-[Inter] text-sm font-semibold text-[#2F314D]">
        Recommended
      </h3>

      <div className="flex flex-col gap-3">
        {recommendations.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="group flex cursor-pointer items-center gap-3 rounded-xl border border-[#ECE4EF] p-3 transition-all duration-200 hover:border-[#C4B5FD] hover:bg-[#FAFAFA]"
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br ${item.iconGradient}`}
              >
                <Icon size={18} className="text-white" strokeWidth={2} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate font-[Inter] text-sm font-semibold text-[#2F314D]">
                  {item.title}
                </p>
                <p className="font-[Inter] text-[11px] text-[#6B6478]">
                  {item.questions} Questions · {item.duration} · {item.type}
                </p>
              </div>

              <ChevronRight
                size={16}
                className="shrink-0 text-[#8B5CF6] opacity-0 transition-opacity group-hover:opacity-100"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
