import {
    Monitor,
    MoveHorizontal,
    Search,
    Hash,
    SquareStack,
  } from "lucide-react";
  
  const topics = [
    { name: "Sliding Window", progress: 62, icon: Monitor },
    { name: "Two Pointers", progress: 75, icon: MoveHorizontal },
    { name: "Binary Search", progress: 50, icon: Search },
    { name: "Hashing", progress: 40, icon: Hash },
    { name: "Arrays", progress: 80, icon: SquareStack },
  ];
  
  export default function TopicProgress() {
    return (
      <div className="bg-white/60 mt-2 rounded-3xl border border-gray-200 p-5">
  
        <div className="flex justify-between items-center mb-5">
          <h2 className="font-semibold text-[#2D2555]">
            Topic Progress
          </h2>
  
          <button className="text-sm text-[#8B5CF6] hover:underline">
            View All
          </button>
        </div>
  
        <div className="space-y-5">
          {topics.map((topic) => {
            const Icon = topic.icon;
  
            return (
              <div key={topic.name}>
                <div className="flex items-center justify-between mb-2">
  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F6F0FF] flex items-center justify-center">
                      <Icon
                        size={16}
                        className="text-[#8B5CF6]"
                      />
                    </div>
  
                    <span className="text-sm font-medium">
                      {topic.name}
                    </span>
                  </div>
  
                  <span className="text-sm text-gray-500">
                    {topic.progress}%
                  </span>
                </div>
  
                <div className="h-1.5 rounded-full bg-[#F3F1FA]">
                  <div
                    className="h-full rounded-full bg-[#8B5CF6]"
                    style={{ width: `${topic.progress}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
  
      </div>
    );
  }