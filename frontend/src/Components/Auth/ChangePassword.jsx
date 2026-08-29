import {
  ArrowLeft,
  Eye,
  EyeOff,
  LockKeyhole,
  Headphones,
} from "lucide-react";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/logo.png";
import changePasswordImg from "../../assets/change-password.png";

const ChangePassword = () => {
  
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    current_password: "",
    new_password: "",
    confirm_password: "",
  });

  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setError("");
    setMessage("");
  };

  const togglePassword = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    // Check passwords match
    if (formData.new_password !== formData.confirm_password) {
      setError("New passwords do not match.");
      return;
    }

    // Check password length
    if (formData.new_password.length < 8) {
      setError("New password must be at least 8 characters long.");
      return;
    }

    setLoading(true);

    try {
      // Get CSRF token
      const csrfResponse = await fetch(
        "http://localhost:8000/api/auth/csrf/",
        {
          credentials: "include",
        }
      );

      if (!csrfResponse.ok) {
        throw new Error("Failed to get CSRF token");
      }

      const csrfData = await csrfResponse.json();

      // Change password
      const response = await fetch(
        "http://localhost:8000/api/auth/change-password/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrfData.csrfToken,
          },
          credentials: "include",
          body: JSON.stringify({
            current_password: formData.current_password,
            new_password: formData.new_password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Failed to change password.");
        return;
      }

      setMessage("Password changed successfully!");

      // Clear form
      setFormData({
        current_password: "",
        new_password: "",
        confirm_password: "",
      });

      // Optional: go back to settings after a short delay
      setTimeout(() => {
        navigate("/settings");
      }, 1500);

    } catch (error) {
      console.error("Change password error:", error);
      setError("Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-2 py-2">
      {/* Logo */}
      <div className="ml-6 flex items-center gap-3">
        <img
          src={logo}
          alt="Placiq"
          className="h-14 w-14 object-contain"
        />

        <div>
          <h2 className="text-[28px] font-bold leading-none text-[#1F245C]">
            Placiq
          </h2>

          <p className="mt-1 text-[13px] leading-5 text-[#6B7280]">
            Smart Prep.
            <br />
            Right Match.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto -mt-12 flex max-w-4xl flex-col items-center">

        {/* Back to Settings */}
        <div className="mb-2 w-full max-w-2xl">
          <Link
            to="/settings"
            className="flex items-center gap-2 text-[14px] font-medium text-[#6C3CF0] hover:underline"
          >
            <ArrowLeft size={18} />
            Back to Settings
          </Link>
        </div>

        {/* Heading */}
        <div className="mb-0 -mt-4 text-center">
          <h1 className="text-[32px] font-bold text-[#1F245C]">
            Change Password
          </h1>

          <p className="-mt-1 text-[14px] text-[#6B7280]">
            Keep your account secure with a strong password.
          </p>
        </div>

        {/* Password Card */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl rounded-3xl border border-white/60 bg-white/85 px-5 py-1 shadow-[0_10px_35px_rgba(80,60,120,0.08)] backdrop-blur-sm"
        >

          {/* Illustration */}
          <div className="-mt-6 flex justify-center">
            <img
              src={changePasswordImg}
              alt="Change password"
              className="h-28 w-28 object-contain"
            />
          </div>

          {/* Card Heading */}
          <div className="-mt-7 text-center">
            <h2 className="text-[20px] font-semibold text-[#1F245C]">
              Update your password
            </h2>

            <p className="mt-0 text-[12px] text-[#6B7280]">
              Enter your current password and choose a new one.
            </p>
          </div>

          {/* Current Password */}
          <div className="mt-0">
            <label className="text-[13px] font-medium text-[#1F245C]">
              Current Password
            </label>

            <div className="relative mt-2">
              <LockKeyhole
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
              />

              <input
                type={showPassword.current ? "text" : "password"}
                name="current_password"
                value={formData.current_password}
                onChange={handleChange}
                placeholder="Enter current password"
                className="h-9 w-full rounded-xl border border-[#D9DCE5] bg-white px-11 pr-12 text-[14px] text-[#1F245C] outline-none transition focus:border-[#8B5CF6]"
                required
              />

              <button
                type="button"
                onClick={() => togglePassword("current")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#6C3CF0]"
              >
                {showPassword.current ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div className="mt-0">
            <label className="text-[13px] font-medium text-[#1F245C]">
              New Password
            </label>

            <div className="relative mt-2">
              <LockKeyhole
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
              />

              <input
                type={showPassword.new ? "text" : "password"}
                name="new_password"
                value={formData.new_password}
                onChange={handleChange}
                placeholder="Enter new password"
                className="h-9 w-full rounded-xl border border-[#D9DCE5] bg-white px-11 pr-12 text-[14px] text-[#1F245C] outline-none transition focus:border-[#8B5CF6]"
                required
              />

              <button
                type="button"
                onClick={() => togglePassword("new")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#6C3CF0]"
              >
                {showPassword.new ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>

            {/* Password Hint */}
            <p className="mt-0.5 text-[11px] text-[#6B7280]">
              Use at least 8 characters with a mix of letters, numbers and
              symbols.
            </p>
          </div>

          {/* Confirm Password */}
          <div className="mt-0">
            <label className="text-[13px] font-medium text-[#1F245C]">
              Confirm New Password
            </label>

            <div className="relative mt-2">
              <LockKeyhole
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
              />

              <input
                type={showPassword.confirm ? "text" : "password"}
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleChange}
                placeholder="Confirm new password"
                className="h-9 w-full rounded-xl border border-[#D9DCE5] bg-white px-11 pr-12 text-[14px] text-[#1F245C] outline-none transition focus:border-[#8B5CF6]"
                required
              />

              <button
                type="button"
                onClick={() => togglePassword("confirm")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#6C3CF0]"
              >
                {showPassword.confirm ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <p className="mt-2 text-center text-[12px] font-medium text-red-500">
              {error}
            </p>
          )}

          {/* Success */}
          {message && (
            <p className="mt-2 text-center text-[12px] font-medium text-green-600">
              {message}
            </p>
          )}

          {/* Update Button */}
          <button
            type="submit"
            disabled={loading}
            className="mt-0.5 h-10 w-full rounded-xl bg-[#6C3CF0] text-[15px] font-medium text-white shadow-sm transition hover:bg-[#5B2FDC] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Updating..." : "Update Password"}
          </button>

          {/* Security Note */}
          <div className="mt-1 flex items-start gap-2 rounded-xl bg-[#F7F4FF] px-3 py-0.5">
            <LockKeyhole
              size={17}
              className="mt-0.5 shrink-0 text-[#6C3CF0]"
            />

            <p className="text-[12px] leading-5 text-[#6B7280]">
              For your security, you'll be logged out from other devices after
              changing your password.
            </p>
          </div>
        </form>

        {/* Support */}
        <div className="mt-0 flex w-full max-w-2xl items-center justify-between rounded-2xl border border-white/70 bg-white/75 px-4 py-1.5 shadow-sm backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEE8FF] text-[#6C3CF0]">
              <Headphones size={19} />
            </div>

            <div>
              <p className="text-[14px] font-semibold text-[#1F245C]">
                Need help?
              </p>

              <p className="text-[11px] text-[#6B7280]">
                Contact our support team if you're having trouble.
              </p>
            </div>
          </div>

          <button className="text-[14px] font-medium text-[#6C3CF0] hover:underline">
            Contact Support
          </button>
        </div>

      </div>
    </div>
  );
};

export default ChangePassword;

