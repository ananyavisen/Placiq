import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Welcome from "./Welcome";

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
        </div>
      </div>
    </div>
  );
}