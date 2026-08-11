import { useState } from "react";

export default function PracticeTabs() {
  const [active, setActive] = useState("All Topics");

  const tabs = ["All Topics", "My Progress", "Bookmarks"];

  return (
    <div className="flex items-center gap-10 border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`pb-3 text-sm font-medium transition-all ${
            active === tab
              ? "text-[#8B5CF6] border-b-2 border-[#8B5CF6]"
              : "text-gray-600 hover:text-[#8B5CF6]"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}