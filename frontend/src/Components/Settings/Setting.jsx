import ProfileSection from "./ProfileSection";
import CareerPreferences from "./CareerPreferences";
import Notifications from "./Notifications";
import Security from "./Security";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Settings = () => {
  return (
    <div className="min-h-screen px-6 py-8">

          <main className="mt-8">
          <div className="mb-5 w-full max-w-2xl">
          <Link to="/">
          <button className="flex items-center gap-2 text-[14px] font-medium text-[#6C3CF0] hover:underline">
            <ArrowLeft size={18} />
            Back to Dashboard
          </button></Link>
        </div>
            <h1 className="text-[26px] font-bold text-[#1F245C]">
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