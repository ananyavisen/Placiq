import { ChevronRight } from "lucide-react";

export default function AssessmentCard({ assessment }) {
  const Icon = assessment.icon;

  return (
    <div className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-[#ECE4EF] bg-white px-5 py-4 shadow-sm transition-all duration-200 hover:border-[#C4B5FD] hover:shadow-md">
      {/* Icon container — swap for <img> later if needed */}
      <div
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-linear-to-br ${assessment.iconGradient}`}
      >
        <Icon size={26} className="text-white" strokeWidth={2} />
      </div>

      {/* Title & description */}
      <div className="min-w-0 flex-1">
        <h3 className="truncate font-[Inter] text-[15px] font-semibold text-[#2F314D]">
          {assessment.title}
        </h3>
        <p className="mt-0.5 truncate font-[Inter] text-xs text-[#6B6478]">
          {assessment.description}
        </p>
        <span
          className={`mt-2 inline-block rounded-full px-2.5 py-0.5 font-[Inter] text-[11px] font-medium ${assessment.subjectBg} ${assessment.subjectText}`}
        >
          {assessment.subject}
        </span>
      </div>

      {/* Questions & difficulty */}
      <div className="hidden shrink-0 flex-col items-start gap-1.5 sm:flex">
        <span className="font-[Inter] text-xs font-medium text-[#2F314D]">
          {assessment.questions} Questions
        </span>
        <span
          className={`rounded-full px-2.5 py-0.5 font-[Inter] text-[11px] font-medium ${assessment.difficultyBg} ${assessment.difficultyText}`}
        >
          {assessment.difficulty}
        </span>
      </div>

      {/* Duration & type */}
      <div className="hidden shrink-0 flex-col items-start gap-1.5 md:flex">
        <span className="font-[Inter] text-xs font-medium text-[#2F314D]">
          {assessment.duration}
        </span>
        <span
          className={`rounded-full px-2.5 py-0.5 font-[Inter] text-[11px] font-medium ${assessment.typeBg} ${assessment.typeText}`}
        >
          {assessment.type}
        </span>
      </div>

      {/* Thumbnail placeholder — replace with <img src={assessment.thumbnail} /> later */}
      <div
        className={`hidden h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-linear-to-br opacity-60 lg:flex ${assessment.iconGradient}`}
      >
        <Icon size={22} className="text-white/80" strokeWidth={1.5} />
      </div>

      {/* Arrow */}
      <button
        type="button"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#ECE4EF] bg-[#FAFAFA] transition-all duration-200 group-hover:border-[#C4B5FD] group-hover:bg-[#F3E8FF]"
      >
        <ChevronRight size={18} className="text-[#8B5CF6]" />
      </button>
    </div>
  );
}
