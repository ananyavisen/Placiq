import { ChevronRight } from "lucide-react";

export default function ActionCard({
  icon,
  title,
  description,
}) {
  return (
    <div
      className="
        bg-white/70
        backdrop-blur-md
        border border-white/60
        rounded-3xl
        p-4
        shadow-md
        hover:shadow-xl
        hover:border-violet-200
        hover:bg-white
        hover:-translate-y-1
        transition-all
        duration-300
        cursor-pointer
      "
    >
      <div className="flex items-start justify-between">
        <div className="w-10 h-10 rounded-2xl bg-violet-100 flex items-center justify-center text-violet-600">
          {icon}
        </div>

        <ChevronRight
          size={18}
          className="text-slate-400
          transition
         group-hover:translate-x-1"
        />
      </div>

      <h3 className="mt-5 text-[1.15rem] font-semibold font-semibold text-[#22245A]">
        {title}
      </h3>

      <p className="mt-1 text-sm text-slate-600 leading-5">
        {description}
      </p>
    </div>
  );
}