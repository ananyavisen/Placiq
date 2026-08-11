import { Zap } from "lucide-react";
import { improvements } from "./improvementData";
import ImprovementItem from "./ImprovementItem";

export default function ImprovementCard() {
  return (
    <div className="rounded-3xl border mt-2 border-[#ECE8F8] bg-white/20 p-6 shadow-xl">
      {/* Header */}
      <div className="mb-5 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-red-500" />

            <h2 className="text-lg font-semibold text-slate-800">
              What Needs Improvement
            </h2>
          </div>

          <p className="mt-1 text-sm text-slate-500">
            Focus on these areas to improve your ATS score and resume quality.
          </p>
        </div>

        <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-500">
          4 Issues Found
        </span>
      </div>

      {/* Items */}
      {improvements.map((item) => (
        <ImprovementItem
          key={item.title}
          {...item}
        />
      ))}

      {/* Footer */}
      <div className="pt-5 text-center">
        <button className="text-sm font-semibold text-violet-600 hover:underline">
          View All Suggestions →
        </button>
      </div>
    </div>
  );
}