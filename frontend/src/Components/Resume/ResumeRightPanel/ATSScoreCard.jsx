import { Info } from "lucide-react";

export default function ATSScoreCard() {
  return (
    <div className="rounded-3xl border border-[#ECE8F8] bg-white/70 p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <h3 className="font-semibold text-slate-800">
          ATS Score
        </h3>

        <Info size={14} className="text-slate-400" />
      </div>

      {/* Score Circle */}
      <div className="mb-5 flex justify-center">
        <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-[6px] border-violet-500">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-800">
              78
              <span className="text-xl text-slate-400">/100</span>
            </h2>

            <p className="font-semibold text-violet-600">
              Good
            </p>
          </div>
        </div>
      </div>

      <p className="text-center text-sm text-slate-500">
        You're almost there! A few improvements can
        make your resume stand out even more.
      </p>

      <div className="mt-4">
        <div className="h-2 rounded-full bg-violet-100">
          <div className="h-2 w-[78%] rounded-full bg-violet-500"></div>
        </div>

        <div className="mt-2 flex justify-between text-xs text-slate-500">
          <span>Poor</span>
          <span>Average</span>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
}