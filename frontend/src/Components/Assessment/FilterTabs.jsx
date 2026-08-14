export default function FilterTabs({ tabs, activeTab, onTabChange }) {
  return (
    <div className="flex gap-6 border-b border-[#ECE4EF]">
      {tabs.map((tab) => {
        const isActive = tab === activeTab;

        return (
          <button
            key={tab}
            type="button"
            onClick={() => onTabChange(tab)}
            className={`pb-3 font-[Inter] text-sm font-medium transition-colors ${
              isActive
                ? "border-b-2 border-[#8B5CF6] text-[#8B5CF6]"
                : "text-[#6B6478] hover:text-[#49344C]"
            }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
