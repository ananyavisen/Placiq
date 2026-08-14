export default function ContinueLearningCard({ item }) {
  const Icon = item.icon;

  return (
    <div className="cursor-pointer rounded-xl border border-[#ECE4EF] bg-white p-3 transition-all duration-200 hover:border-[#C4B5FD] hover:shadow-sm">
      <div className="flex items-start gap-2.5">
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br ${item.iconGradient}`}
        >
          <Icon size={16} className="text-white" strokeWidth={2} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-[Inter] text-xs font-semibold text-[#2F314D]">
            {item.title}
          </p>
          <p className="font-[Inter] text-[10px] text-[#6B6478]">
            {item.subtitle}
          </p>
        </div>
      </div>
      <div className="mt-2.5">
        <div className="h-1.5 overflow-hidden rounded-full bg-[#ECE4EF]">
          <div
            className="h-full rounded-full bg-[#8B5CF6] transition-all"
            style={{ width: `${item.progress}%` }}
          />
        </div>
        <p className="mt-1 text-right font-[Inter] text-[10px] font-medium text-[#8B5CF6]">
          {item.progress}%
        </p>
      </div>
    </div>
  );
}
