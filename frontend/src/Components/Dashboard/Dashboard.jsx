import Welcome from "./Welcome";
import StatsGrid from "./StatsGrid";
import QuickActions from "./QuickActions";
import Schedule from "./Schedule";
import Recommendations from "./Recommendations";
import ProgressChart from "./ProgressChart";
import SkillsOverview from "./SkillsOverview";
import ProfileHeader from "../Common/ProfileHeader";

export default function Dashboard() {
  return (
    <div className="min-h-screen px-2">

      {/* Top section */}
      <div className="grid grid-cols-1 lg:grid-cols-[2.25fr_1fr] gap-5">
        
        {/* Left */}
        <Welcome />

        {/* Right */}
        <ProfileHeader />

      </div>

      {/* Main section */}
      <div className="grid grid-cols-1 lg:grid-cols-[2.25fr_1fr] gap-5 mt-5">

        {/* Left section */}
        <div className="space-y-5">
          <QuickActions />
          <StatsGrid />
          <Recommendations />
        </div>

        {/* Right section */}
        <div>
          <Schedule />
        </div>

      </div>

      {/* Bottom section */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-5 mt-5">
        <ProgressChart />
        <SkillsOverview />
      </div>

    </div>
  );
}