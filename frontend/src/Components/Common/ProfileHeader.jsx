import {
  Bell,
  Settings,
  User,
  LogOut,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProfileHeader() {
  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState(null);

  // Fetch authenticated user
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/auth/me/",
          {
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user.");
        }

        const data = await response.json();

        setUser(data);
      } catch (error) {
        console.error("Failed to get current user:", error);
      }
    };

    getUser();
  }, []);

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
    <div className="mb-8 ml-7 flex items-center gap-5">

      {/* Notification */}
      <button className="relative">
        <Bell
          size={22}
          className="text-gray-500"
        />

        <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-pink-500" />
      </button>

      {/* Profile */}
      <div className="flex items-center gap-3">

        {/* Profile Photo */}
        <div className="h-12 w-12 shrink-0">
          {user?.profile_photo ? (
            <img
              src={user.profile_photo}
              alt={user.name || "Profile"}
              className="h-12 w-12 rounded-full border object-cover"
            />
          ) : (
            <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-[#6C3CF0] text-lg font-semibold text-white">
              {user?.name?.charAt(0).toUpperCase() || "U"}
            </div>
          )}
        </div>

        {/* User Information */}
        <div>
          <h4 className="font-semibold text-[#2D2555]">
            {user?.name || "User"}
          </h4>

          <p className="text-sm text-gray-500">
            {user?.target_role || "Career Profile"}
          </p>
        </div>

        {/* Settings Dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowDropdown(!showDropdown)}
            className="p-1"
          >
            <Settings
              size={18}
              className="cursor-pointer text-gray-500"
            />
          </button>

          {showDropdown && (
            <div className="absolute right-0 top-8 z-50 w-44 rounded-lg border border-gray-200 bg-white py-1 shadow-lg">

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
                type="button"
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