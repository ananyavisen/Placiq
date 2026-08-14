export default function CategoryCard({ category, isActive, onSelect }) {
  const Icon = category.icon;

  return (
    <button
      type="button"
      onClick={() => onSelect(category.id)}
      className={`flex min-w-[140px] shrink-0 flex-col items-center rounded-2xl border bg-white px-4 py-4 shadow-sm transition-all duration-200 hover:shadow-md sm:min-w-[155px] ${
        isActive
          ? "border-[#8B5CF6] shadow-md"
          : "border-[#ECE4EF] hover:border-[#C4B5FD]"
      }`}
    >
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br ${category.iconGradient}`}
      >
        <Icon size={22} className="text-white" strokeWidth={2} />
      </div>
      <p className="mt-3 text-center font-[Inter] text-xs font-semibold leading-tight text-[#2F314D]">
        {category.title}
      </p>
      <p className="mt-1 font-[Inter] text-[11px] text-[#6B6478]">
        {category.count} Resources
      </p>
    </button>
  );
}
