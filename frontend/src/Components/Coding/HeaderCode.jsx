import { Code2 } from "lucide-react";

export default function HeaderCode() {
  return (
    <div className="flex items-center gap-5">
      {/* Icon */}
      <div className="w-18 h-18 rounded-3xl bg-[#F6F0FF] border border-[#EADFFF] flex items-center justify-center shadow-sm">
        <Code2 size={34} className="text-[#8B5CF6]" strokeWidth={2.3} />
      </div>

      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold text-[#221B4D]">
          Coding Practice
        </h1>

        <p className="mt-2 font-medium text-[#8A87A3]">
          Level up your coding skills with curated DSA questions.
        </p><br />
      </div>
    </div>
  );
}