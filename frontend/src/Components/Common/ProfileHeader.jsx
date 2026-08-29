import {
  Bell,
  Settings,
  User,
  LogOut,
} from "lucide-react";
import profile from "../../assets/profile.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ProfileHeader() {
  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = async () => {
    try {
        // Get CSRF token
        const csrfResponse = await fetch(
            "http://localhost:8000/api/auth/csrf/",
            {
                credentials: "include",
            }
        );

        const csrfData = await csrfResponse.json();

        // Logout
        const response = await fetch(
            "http://localhost:8000/api/auth/logout/",
            {
                method: "POST",
                headers: {
                    "X-CSRFToken": csrfData.csrfToken,
                },
                credentials: "include",
            }
        );

        if (response.ok) {
            navigate("/");
        } else {
            console.error("Logout failed");
        }

    } catch (error) {
        console.error("Logout error:", error);
    }
};

  return (
    <div className="flex items-center gap-5 mb-8 ml-7">

      {/* Notification */}
      <button className="relative">
        <Bell size={22} className="text-gray-500" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-pink-500 rounded-full border-2 border-white"></span>
      </button>

      {/* Profile */}
      <div className="flex items-center gap-3">

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

        {/* Settings Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="p-1"
          >
            <Settings
              size={18}
              className="text-gray-500 cursor-pointer"
            />
          </button>

          {showDropdown && (
            <div className="absolute right-0 top-8 w-44 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-50">

              {/* Profile Settings */}
              <Link
                to="/settings"
                className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <User size={16} />
                Profile Settings
              </Link>

              {/* Logout */}
              <button
                  onClick={handleLogout}
                  className="flex w-full items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
              >
                  <LogOut size={16} />
                  Logout
              </button>

            </div>
          )}
        </div>

      </div>
    </div>
  );
}