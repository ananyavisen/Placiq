import { Circle } from "rc-progress";

export default function ProgressCard() {
  const progress = (60/120)*100;

  return (
    <div className="bg-white/70 rounded-3xl border border-gray-200 p-3 shadow-sm">
      <h3 className="text-lg font-semibold text-[#2D2555]">
        Your Progress
      </h3>

      {/* Circular Progress */}
      <div className="flex justify-center mt-6">
        <div className="relative w-28 h-28">

          <Circle
            percent={progress}
            strokeWidth={7}
            strokeColor="#8B5CF6"
            trailWidth={7}
            trailColor="#F2ECFF"
            strokeLinecap="round"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-[#2D2555]">
              {progress}%
            </h2>

            <p className="text-gray-500 text-sm">
              Completed
            </p>
          </div>

        </div>
      </div>

      <p className="text-center text-gray-600 font-medium mt-4">
        60 / 120 Questions
      </p> 
    </div>
  );
}