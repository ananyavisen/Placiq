import Sidebar from "../Dashboard/Sidebar";
import Topbar from "../Dashboard/Topbar";
import bg from "../../assets/bg.png";
import ProfileSection from "./ProfileSection";
import CareerPreferences from "./CareerPreferences";
import Notifications from "./Notifications";
import Security from "./Security";

const Settings = () => {
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

          <main className="mt-8">
            <h1 className="text-[36px] font-bold text-[#1F245C]">
              Settings
            </h1>

            <p className="mt-2 text-[18px] text-[#6B7280]">
              Manage your account and preferences.
            </p>

           <div className="mt-8">
             <ProfileSection />
            </div>

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
             <CareerPreferences />
             <Notifications />
           </div>
           <div className="mt-6">
             <Security />
           </div>
          </main>

        </div>
      </div>
    </div>
  );
};

export default Settings;