import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const PlacementReadiness = () => {
  const value = 72;

  return (
    <div className="bg-white rounded-3xl p-5 h-65 shadow-sm border border-gray-100 hover:shadow-lg transition-all">

      <h3 className="-translate-x-2 text-[14px] font-semibold text-[#1C225B] whitespace-nowrap">
        Placement Readiness
      </h3>

      <div className="w-24 h-24 mx-auto mt-3">
        <CircularProgressbar
          value={value}
          text={`${value}%`}
          strokeWidth={10}
          styles={buildStyles({
            textSize: "20px",
            textColor: "#1C225B",
            pathColor: "#8B5CF6",
            trailColor: "#F3F4F6",
          })}
        />
      </div>

      <p className="text-center text-sm text-slate-500 mt-3">
        Keep it up! You're doing great.
      </p>

      <div className="flex justify-center items-center gap-1 mt-2">
        <span className="text-green-500 font-semibold">
          ↑ 8%
        </span>

        <span className="text-slate-500 text-sm">
          this week
        </span>
      </div>
    </div>
  );
};

export default PlacementReadiness;