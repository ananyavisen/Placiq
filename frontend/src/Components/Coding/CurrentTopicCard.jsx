import { Monitor } from "lucide-react";

export default function CurrentTopicCard() {
  return (
    <div className="mt-4 rounded-3xl border border-gray-200/80 bg-white/80 p-4">
      <div className="flex justify-between items-center">

        <div className="flex gap-4 items-center">

          <div className="w-12 h-12 rounded-2xl bg-[#F7F2FF] flex items-center justify-center">
            <Monitor className="text-[#8B5CF6]" size={25} />
          </div>

          <div>
            <h2 className="text-lg font-bold">
              Sliding Window
            </h2>

            <p className="text-gray-500 mt-1 text-sm">
              Techniques for problems involving subarrays or substrings.
            </p>
          </div>

        </div>

        <div className="w-54">

          <div className="flex justify-between text-sm mb-2">
            <span>62% Completed</span>
          </div>

          <div className="h-2 bg-gray-100 rounded-full">
            <div className="w-[62%] h-full rounded-full bg-[#8B5CF6]" />
          </div>

        </div>

      </div>
    </div>
  );
}