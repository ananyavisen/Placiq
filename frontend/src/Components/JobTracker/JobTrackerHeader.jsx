import { BriefcaseBusiness, Plus } from "lucide-react";

export default function JobTrackerHeader() {
  return (
    <div className="flex p-2 items-start justify-between">
      {/* Left */}
      <div className="flex items-start gap-3">
        <BriefcaseBusiness
          size={28}
          strokeWidth={2}
          className="mt-0.5 text-[#8B5CF6]"
        />

        <div>
          <h1 className="font-[Manrope] text-[24px] font-bold leading-tight text-[#111A3A]">
            Job Tracker
          </h1>

          <p className="mt-1 font-[Inter] text-sm text-[#6B6478]">
            Track your applications, never miss a deadline.
          </p>
        </div>
      </div>

      {/* Right */}
      <button
        type="button"
        className="
          flex items-center gap-2
          rounded-xl
          bg-[#8B5CF6]
          px-4 py-2.5
          font-[Manrope]
          text-sm font-semibold
          text-white
          shadow-sm
          transition
          hover:bg-[#7C3AED]
        "
      >
        <Plus size={17} strokeWidth={2.2} />
        Add Application
      </button>
    </div>
  );
}