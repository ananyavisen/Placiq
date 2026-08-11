import {
    Monitor,
    MoveHorizontal,
    Search,
    Hash,
    SquareStack,
    Briefcase,
    ChevronRight,
  } from "lucide-react";
  import { useRef } from "react";
  
  const topics = [
    {
      icon: Monitor,
      name: "Sliding Window",
      progress: "62%",
      active: true,
    },
    {
      icon: MoveHorizontal,
      name: "Two Pointers",
      progress: "75%",
    },
    {
      icon: Search,
      name: "Binary Search",
      progress: "50%",
    },
    {
      icon: Hash,
      name: "Hashing",
      progress: "40%",
    },
    {
      icon: SquareStack,
      name: "Arrays",
      progress: "80%",
    },
    {
      icon: Briefcase,
      name: "Stack",
      progress: "55%",
    },
  ];
  
  export default function TopicCarousel() {
    const scrollRef = useRef(null);
  
    const scrollNext = () => {
      scrollRef.current?.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    };
  
    return (
      <div className="relative mt-6">
        {/* Scrollable cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar pr-16"
        >
          {topics.map((topic) => {
            const Icon = topic.icon;
  
            return (
              <div
                key={topic.name}
                className={`shrink-0 min-w-38 rounded-2xl border px-5 py-3 transition cursor-pointer
                ${
                  topic.active
                    ? "border-[#D9C7FF] bg-[#FAF6FF]"
                    : "border-gray-200 bg-white hover:border-[#D9C7FF]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    size={18}
                    className={topic.active ? "text-[#8B5CF6]" : "text-gray-500"}
                  />
  
                  <div>
                    <p className="text-sm font-semibold">{topic.name}</p>
                    <p className="text-xs text-gray-500">{topic.progress}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
  
        {/* Fixed Next Arrow */}
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center hover:bg-gray-50 transition"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    );
  }