import ProfileSection from "./ProfileSection";
import CareerPreferences from "./CareerPreferences";
import Notifications from "./Notifications";
import Security from "./Security";

const Settings = () => {
  return (
    <div className="min-h-screen px-6 py-8">

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
  );
};

export default Settings;