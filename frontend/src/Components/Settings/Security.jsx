import { Lock, ShieldCheck, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Security = () => {
  const navigate = useNavigate();

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
    <div className="w-full rounded-2xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm">

      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-[20px] font-semibold text-[#1F245C]">
          Security & Privacy
        </h2>

        <p className="mt-1 text-[14px] text-[#6B7280]">
          Manage your password and account security.
        </p>
      </div>

      {/* Security Options */}
      <div className="space-y-5">

        {/* Password */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEE8FF] text-[#6C3CF0]">
              <Lock size={19} />
            </div>

            <div>
              <p className="text-[15px] font-medium text-[#1F245C]">
                Password
              </p>

              <p className="text-[12px] text-[#6B7280]">
                Last changed 30 days ago.
              </p>
            </div>
          </div>

          <Link to="/change-password">
          <button className="rounded-xl bg-[#EEE8FF] px-4 py-2 text-[13px] font-medium text-[#6C3CF0]">
            Change
          </button>
        </Link>
        </div>

        {/* Two Factor Authentication */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEE8FF] text-[#6C3CF0]">
              <ShieldCheck size={19} />
            </div>

            <div>
              <p className="text-[15px] font-medium text-[#1F245C]">
                Two-Factor Authentication
              </p>

              <p className="text-[12px] text-[#6B7280]">
                Add an extra layer of security to your account.
              </p>
            </div>
          </div>

          <button className="rounded-xl bg-[#EEE8FF] px-4 py-2 text-[13px] font-medium text-[#6C3CF0]">
            Enable
          </button>
        </div>

        {/* Logout */}
        <div className="flex items-center justify-between border-t border-[#E5E7EB] pt-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF0F3] text-[#E11D48]">
              <LogOut size={19} />
            </div>

            <div>
              <p className="text-[15px] font-medium text-[#1F245C]">
                Log out
              </p>

              <p className="text-[12px] text-[#6B7280]">
                Sign out from this device.
              </p>
            </div>
          </div>

          <button onClick={handleLogout} className="rounded-xl bg-[#FFF0F3] px-4 py-2 text-[13px] font-medium text-[#E11D48]">
            Log Out
          </button>
        </div>

      </div>
    </div>
  );
};

export default Security;