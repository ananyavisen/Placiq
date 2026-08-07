import { Bookmark, Clock, FileText } from "lucide-react";

const metaIconMap = {
  clock: Clock,
  file: FileText,
};

export default function ResourceCard({ resource }) {
  const Icon = resource.icon;
  const MetaIcon = metaIconMap[resource.metaIcon] || FileText;

  return (
    <div className="group flex cursor-pointer items-start gap-4 rounded-2xl border border-[#ECE4EF] bg-white px-4 py-4 shadow-sm transition-all duration-200 hover:border-[#C4B5FD] hover:shadow-md">
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br ${resource.iconGradient}`}
      >
        <Icon size={22} className="text-white" strokeWidth={2} />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-[Inter] text-sm font-semibold text-[#2F314D]">
            {resource.title}
          </h3>
          <span
            className={`rounded-full px-2 py-0.5 font-[Inter] text-[10px] font-medium ${resource.typeBg} ${resource.typeText}`}
          >
            {resource.type}
          </span>
        </div>
        <p className="mt-1 line-clamp-2 font-[Inter] text-xs leading-relaxed text-[#6B6478]">
          {resource.description}
        </p>
      </div>

      <div className="hidden shrink-0 flex-col items-end gap-2 sm:flex">
        <div className="flex items-center gap-1.5">
          <span
            className={`h-2 w-2 rounded-full ${resource.difficultyDot}`}
          />
          <span className="font-[Inter] text-xs text-[#6B6478]">
            {resource.difficulty}
          </span>
        </div>
        <div className="flex items-center gap-1 text-[#9CA3AF]">
          <MetaIcon size={12} />
          <span className="font-[Inter] text-xs text-[#6B6478]">
            {resource.meta}
          </span>
        </div>
      </div>

      <button
        type="button"
        className="shrink-0 p-1 text-[#C4B5FD] transition hover:text-[#8B5CF6]"
      >
        <Bookmark size={18} strokeWidth={1.8} />
      </button>
    </div>
  );
}
