import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Welcome from "./Welcome";
import StatsGrid from "./StatsGrid";
import QuickActions from "./QuickActions";
import Schedule from "./Schedule";
import Recommendations from "./Recommendations";
import ProgressChart from "./ProgressChart";
import SkillsOverview from "./SkillsOverview";

import bg from "../../assets/bg.png";

export default function Dashboard() {
  return (
    <div
      // className="min-h-screen bg-cover bg-center p-6"
      className="min-h-screen bg-[length:100%_100%] bg-no-repeat px-6 py-8"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex gap-6">
        {/* Sidebar */}
        <Sidebar />

        {/* Main */}
        <div className="flex-1">
          <Topbar />
          <Welcome />
            <div className="grid grid-cols-1 lg:grid-cols-[2.25fr_1fr] gap-5">

           {/* Left section */}
          <div className="space-y-5">
              <QuickActions />
              <StatsGrid />
              <Recommendations />
          </div>

           {/* Right section */}
          {/* <div className="lg:col-span-1"> */}
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
      </div>
    </div>
  );
}