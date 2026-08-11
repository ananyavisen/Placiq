import {
    Circle,
    CircleCheck,
    Bookmark,
  } from "lucide-react";
  
import LC from "../../assets/leetcode.png"

  function DifficultyBadge({ level }) {
    const styles = {
      Easy: " text-green-600",
      Medium: " text-orange-400",
      Hard: " text-red-600",
    };
  
    return (
      <span
        className={`px-2 py-1 rounded-md text-xs font-semibold ${styles[level]}`}
      >
        {level}
      </span>
    );
  }
  
  export default function QuestionRow({
    title,
    difficulty,
    solved,
  }) {
    return (
      <div className="grid grid-cols-[40px_1fr_120px_140px_40px] items-center py-4">
  
        {solved ? (
          <CircleCheck
            size={20}
            className="text-green-500 fill-green-500 stroke-white"
          />
        ) : (
          <Circle
            size={20}
            className="text-gray-300"
          />
        )}
  
        <p className="font-medium text-[#2D2555]">
          {title}
        </p>
  
        <DifficultyBadge level={difficulty} />
  
        <div className="text-gray-500 text-sm">
          <img src={LC} className="h-8 w-8"/>
        </div>
  
        <Bookmark
          size={18}
          className="text-gray-400 cursor-pointer"
        />
  
      </div>
    );
  }