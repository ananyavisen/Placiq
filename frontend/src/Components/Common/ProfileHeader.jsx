import { Bell, ChevronDown, Settings } from "lucide-react";
import profile from "../../assets/profile.jpg"; // replace with your image

export default function ProfileHeader() {
  return (
    <div className="flex items-center gap-5 mb-8 ml-7">

      {/* Notification */}
      <button className="relative">
        <Bell size={22} className="text-gray-500" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-pink-500 rounded-full border-2 border-white"></span>
      </button>

      {/* Profile */}
      <div className="flex items-center gap-3 cursor-pointer">

        <img
          src={profile}
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover border"
        />

        <div>
          <h4 className="font-semibold text-[#2D2555]">
            User1
          </h4>

          <p className="text-sm text-gray-500">
            Frontend Developer
          </p>
        </div>

        <Settings
          size={18}
          className="text-gray-500"
        />

      </div>

    </div>
  );
}
