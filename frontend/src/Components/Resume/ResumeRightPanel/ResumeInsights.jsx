import { Info } from "lucide-react";
import InsightCarousel from "./InsightCarousel";

export default function ResumeInsights() {
  return (
    <div className="rounded-3xl border border-[#ECE8F8] bg-white/20 p-3 shadow-sm">
      <div className="mb-3 flex items-center gap-2">
        <h2 className="text-lg font-semibold">
          Resume Insights
        </h2>

        <Info
          size={16}
          className="text-slate-400"
        />
      </div>

      <InsightCarousel />
    </div>
  );
}