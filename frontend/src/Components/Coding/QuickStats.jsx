import {
    LayoutGrid,
    CircleCheck,
    Timer,
    Bookmark,
  } from "lucide-react";
  
  const stats = [
    {
      icon: LayoutGrid,
      value: 120,
      label: "Total Questions",
      color: "text-[#8B5CF6]",
      bg: "bg-[#F6F0FF]",
    },
    {
      icon: CircleCheck,
      value: 74,
      label: "Completed",
      color: "text-green-500",
      bg: "bg-green-50",
    },
    {
      icon: Timer,
      value: 28,
      label: "In Progress",
      color: "text-orange-500",
      bg: "bg-orange-50",
    },
    {
      icon: Bookmark,
      value: 18,
      label: "Bookmarked",
      color: "text-[#8B5CF6]",
      bg: "bg-[#F6F0FF]",
    },
  ];
  
  export default function QuickStats() {
    return (
      <div className="bg-white/70 mt-2 rounded-3xl border border-gray-200 p-5">
  
        <h2 className="font-semibold text-[#2D2555] mb-5">
          Quick Stats
        </h2>
  
        <div className="grid grid-cols-2 gap-6">
          {stats.map((item) => {
            const Icon = item.icon;
  
            return (
              <div
                key={item.label}
                className="flex gap-3"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center`}
                >
                  <Icon
                    size={18}
                    className={item.color}
                  />
                </div>
  
                <div>
                  <h3 className="font-bold text-lg">
                    {item.value}
                  </h3>
  
                  <p className="text-xs text-gray-500">
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
  
      </div>
    );
  }