import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Welcome from "./Welcome";
import StatsGrid from "./StatsGrid";
import QuickActions from "./QuickActions";
import Schedule from "./Schedule";

import bg from "../../assets/bg.png";

export default function Dashboard() {
  return (
    <div
      className="min-h-screen bg-cover bg-center p-6"
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
          </div>

           {/* Right section */}
          {/* <div className="lg:col-span-1"> */}
          <div>
           <Schedule />
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}