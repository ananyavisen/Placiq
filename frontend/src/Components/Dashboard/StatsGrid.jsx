import {
  FileText,
  UserRound,
  Code2,
} from "lucide-react";
import PlacementReadiness from "./PlacementReadiness";

import StatCard from "./StatCard";

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-5">

      {/* Placement Readiness */}
      <PlacementReadiness />

      <StatCard
      title="Resume Score"
        icon={<FileText size={26} />}
        value="87"
        suffix="/100"
        description="Strong resume! Improve a few sections."
        buttonText="Improve Resume"
      />

      <StatCard
        icon={<UserRound size={26} />}
        title="Mock Interview"
        value="78"
        suffix="%"
        description="Good performance! Keep practicing."
        buttonText="Take Mock Test"
        buttonColor="bg-pink-100 text-pink-600"
      />

      <StatCard
        icon={<Code2 size={26} />}
        title="Problems Solved"
        value="142"
        description="Out of 300 this week"
      />

    </div>
  );
};

export default StatsGrid;