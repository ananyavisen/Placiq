import { ChevronDown } from "lucide-react";
import LC from "../../assets/leetcode.png"

export default function FilterBar() {
    return (
      <div className="flex items-center justify-between">
  
        <div className="flex gap-4">
  
        <div className="relative">
            <select className="appearance-none rounded-xl border border-gray-200 bg-white py-2 pl-4 pr-10 text-sm outline-none cursor-pointer">
                <option>LeetCode</option>
                <option>HackerRank</option>
                <option>CodeChef</option>
            </select>

            <ChevronDown
                size={16}
                className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"
            />
            </div>
            <div className="relative">
            <select className="appearance-none rounded-xl border border-gray-200 bg-white py-2 pl-4 pr-10 text-sm outline-none cursor-pointer">
                <option>All</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
            </select>

            <ChevronDown
                size={16}
                className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"
            />
            </div>
        </div>
  
      </div>
    );
  }