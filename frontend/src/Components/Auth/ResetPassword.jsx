import {
    ArrowLeft,
    LockKeyhole,
    Eye,
    EyeOff,
    Headphones,
  } from "lucide-react";
  
  import logo from "../../assets/logo.png";
  import changePasswordImg from "../../assets/change-password.png";
  
  import { Link, useNavigate, useParams } from "react-router-dom";
  import { useState } from "react";
  
  export default function ResetPassword() {
    const navigate = useNavigate();
    const { uidb64, token } = useParams();
  
    const [formData, setFormData] = useState({
      newPassword: "",
      confirmPassword: "",
    });
  
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
  
    const handleChange = (e) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
  
      setError("");
      setMessage("");
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      setError("");
      setMessage("");
  
      if (formData.newPassword !== formData.confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
  
      setLoading(true);
  
      try {
        const response = await fetch(
          `http://localhost:8000/api/auth/reset-password/${uidb64}/${token}/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              new_password: formData.newPassword,
              confirm_password: formData.confirmPassword,
            }),
          }
        );
  
        const data = await response.json();
  
        if (response.ok) {
          setMessage("Password reset successfully!");
  
          setTimeout(() => {
            navigate("/login");
          }, 1500);
        } else {
          if (Array.isArray(data.error)) {
            setError(data.error.join(" "));
          } else {
            setError(data.error || "Unable to reset password.");
          }
        }
      } catch (error) {
        console.error("Reset password error:", error);
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
        <div className="mx-auto -mt-10 flex max-w-4xl flex-col items-center">
  
          {/* Back to Login */}
          <div className="mb-1 w-full max-w-2xl">
            <Link to="/login">
              <button
                type="button"
                className="flex items-center gap-2 text-[14px] font-medium text-[#6C3CF0] hover:underline"
              >
                <ArrowLeft size={18} />
                Back to Login
              </button>
            </Link>
          </div>
  
          {/* Heading */}
          <div className="mb-0 text-center">
            <h1 className="text-[32px] font-bold text-[#1F245C]">
              Reset Password
            </h1>
  
            <p className="mt-1 text-[15px] text-[#6B7280]">
              Create a new password for your Placiq account.
              <br />
              Make sure it's strong and secure.
            </p>
          </div>
  
          {/* Card */}
          <div className="w-full max-w-2xl rounded-3xl border border-white/60 bg-white/85 px-5 py-1 shadow-[0_10px_35px_rgba(80,60,120,0.08)] backdrop-blur-sm">
  
            {/* Illustration */}
            <div className="-mt-1 flex justify-center">
              <img
                src={changePasswordImg}
                alt="Reset password"
                className="h-24 w-24 object-contain"
              />
            </div>
  
            {/* Card Heading */}
            <div className="-mt-5 text-center">
              <h2 className="text-[22px] font-semibold text-[#1F245C]">
                Create a new password
              </h2>
  
              <p className="mt-1 text-[14px] text-[#6B7280]">
                Enter and confirm your new password below.
              </p>
            </div>
  
            <form onSubmit={handleSubmit}>
  
              {/* New Password */}
              <div className="mt-2">
                <label className="text-[13px] font-medium text-[#1F245C]">
                  New Password
                </label>
  
                <div className="relative mt-2">
                  <LockKeyhole
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
                  />
  
                  <input
                    type={showPassword ? "text" : "password"}
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                    placeholder="Enter new password"
                    required
                    className="h-10 w-full rounded-xl border border-[#D9DCE5] bg-white px-11 pr-12 text-[14px] text-[#1F245C] outline-none transition focus:border-[#8B5CF6]"
                  />
  
                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((prev) => !prev)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#6C3CF0]"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
  
                {/* Password Hint */}
                <p className="mt-1 text-[11px] text-[#6B7280]">
                  Use at least 8 characters with a mix of letters,
                  numbers and symbols.
                </p>
              </div>
  
              {/* Confirm Password */}
              <div className="mt-2">
                <label className="text-[13px] font-medium text-[#1F245C]">
                  Confirm New Password
                </label>
  
                <div className="relative mt-2">
                  <LockKeyhole
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
                  />
  
                  <input
                    type={
                      showConfirmPassword ? "text" : "password"
                    }
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm new password"
                    required
                    className="h-10 w-full rounded-xl border border-[#D9DCE5] bg-white px-11 pr-12 text-[14px] text-[#1F245C] outline-none transition focus:border-[#8B5CF6]"
                  />
  
                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword((prev) => !prev)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#6C3CF0]"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>
  
              {/* Error */}
              {error && (
                <p className="mt-2 text-center text-sm font-medium text-red-500">
                  {error}
                </p>
              )}
  
              {/* Success */}
              {message && (
                <p className="mt-2 text-center text-sm font-medium text-green-600">
                  {message}
                </p>
              )}
  
              {/* Reset Button */}
              <button
                type="submit"
                disabled={loading}
                className="mt-3 h-10 w-full rounded-xl bg-[#6C3CF0] text-[15px] font-medium text-white shadow-sm transition hover:bg-[#5B2FDC] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Resetting Password..." : "Reset Password"}
              </button>
  
            </form>
  
            {/* Security Note */}
            <div className="mt-2 flex items-start gap-2 rounded-xl bg-[#F7F4FF] px-3 py-1">
              <LockKeyhole
                size={17}
                className="mt-0.5 shrink-0 text-[#6C3CF0]"
              />
  
              <p className="text-[12px] leading-5 text-[#6B7280]">
                Your password will be securely updated and your
                reset link will no longer be usable.
              </p>
            </div>
  
            {/* Login */}
            <p className="mt-2 text-center text-[14px] text-[#6B7280]">
              Remember your password?{" "}
  
              <Link
                to="/"
                className="font-medium text-[#6C3CF0] hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
  
          {/* Support */}
          <div className="mt-0 flex w-full max-w-2xl items-center justify-between rounded-2xl border border-white/70 bg-white/75 px-4 py-1.5 shadow-sm backdrop-blur-sm">
  
            <div className="flex items-center gap-3">
  
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEE8FF] text-[#6C3CF0]">
                <Headphones size={19} />
              </div>
  
              <div>
                <p className="text-[14px] font-semibold text-[#1F245C]">
                  Still having trouble?
                </p>
  
                <p className="text-[12px] text-[#6B7280]">
                  Contact our support team and we'll help you
                  recover your account.
                </p>
              </div>
  
            </div>
  
            <button
              type="button"
              className="text-[14px] font-medium text-[#6C3CF0] hover:underline"
            >
              Contact Support
            </button>
  
          </div>
        </div>
      </div>
    );
  }