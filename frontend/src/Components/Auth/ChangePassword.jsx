import {
  ArrowLeft,
  Eye,
  EyeOff,
  LockKeyhole,
  Headphones,
} from "lucide-react";

import bg from "../../assets/bg.png";
import logo from "../../assets/logo.png";
import changePasswordImg from "../../assets/change-password.png";

const ChangePassword = () => {
  return (
    <div
    //   className="min-h-screen bg-cover bg-center px-6 py-8"
    className="min-h-screen bg-[length:100%_100%] bg-no-repeat px-6 py-8"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Logo */}
      <div className="ml-8 mt-2 flex items-center gap-3">
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
      <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center">

        {/* Back to Settings */}
        <div className="mb-5 w-full max-w-2xl">
          <button className="flex items-center gap-2 text-[14px] font-medium text-[#6C3CF0] hover:underline">
            <ArrowLeft size={18} />
            Back to Settings
          </button>
        </div>

        {/* Heading */}
        <div className="mb-7 text-center">
          <h1 className="text-[36px] font-bold text-[#1F245C]">
            Change Password
          </h1>

          <p className="mt-2 text-[16px] text-[#6B7280]">
            Keep your account secure with a strong password.
          </p>
        </div>

        {/* Password Card */}
        <div className="w-full max-w-2xl rounded-3xl border border-white/60 bg-white/85 p-10 shadow-[0_10px_35px_rgba(80,60,120,0.08)] backdrop-blur-sm">

          {/* Illustration */}
          <div className="flex justify-center">
            <img
              src={changePasswordImg}
              alt="Change password"
              className="h-44 w-44 object-contain"
            />
          </div>

          {/* Card Heading */}
          <div className="mt-2 text-center">
            <h2 className="text-[22px] font-semibold text-[#1F245C]">
              Update your password
            </h2>

            <p className="mt-1 text-[14px] text-[#6B7280]">
              Enter your current password and choose a new one.
            </p>
          </div>

          {/* Current Password */}
          <div className="mt-7">
            <label className="text-[13px] font-medium text-[#1F245C]">
              Current Password
            </label>

            <div className="relative mt-2">
              <LockKeyhole
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
              />

              <input
                type="password"
                placeholder="Enter current password"
                className="h-12 w-full rounded-xl border border-[#D9DCE5] bg-white px-11 pr-12 text-[14px] text-[#1F245C] outline-none transition focus:border-[#8B5CF6]"
              />

              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#6C3CF0]"
              >
                <Eye size={18} />
              </button>
            </div>
          </div>

          {/* New Password */}
          <div className="mt-5">
            <label className="text-[13px] font-medium text-[#1F245C]">
              New Password
            </label>

            <div className="relative mt-2">
              <LockKeyhole
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
              />

              <input
                type="password"
                placeholder="Enter new password"
                className="h-12 w-full rounded-xl border border-[#D9DCE5] bg-white px-11 pr-12 text-[14px] text-[#1F245C] outline-none transition focus:border-[#8B5CF6]"
              />

              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#6C3CF0]"
              >
                <Eye size={18} />
              </button>
            </div>

            {/* Password Hint */}
            <p className="mt-2 text-[12px] text-[#6B7280]">
              Use at least 8 characters with a mix of letters, numbers and
              symbols.
            </p>
          </div>

          {/* Confirm Password */}
          <div className="mt-5">
            <label className="text-[13px] font-medium text-[#1F245C]">
              Confirm New Password
            </label>

            <div className="relative mt-2">
              <LockKeyhole
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
              />

              <input
                type="password"
                placeholder="Confirm new password"
                className="h-12 w-full rounded-xl border border-[#D9DCE5] bg-white px-11 pr-12 text-[14px] text-[#1F245C] outline-none transition focus:border-[#8B5CF6]"
              />

              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#6C3CF0]"
              >
                <Eye size={18} />
              </button>
            </div>
          </div>

          {/* Update Button */}
          <button className="mt-7 h-12 w-full rounded-xl bg-[#6C3CF0] text-[15px] font-medium text-white shadow-sm transition hover:bg-[#5B2FDC]">
            Update Password
          </button>

          {/* Security Note */}
          <div className="mt-5 flex items-start gap-3 rounded-xl bg-[#F7F4FF] px-4 py-3">
            <LockKeyhole
              size={17}
              className="mt-0.5 shrink-0 text-[#6C3CF0]"
            />

            <p className="text-[12px] leading-5 text-[#6B7280]">
              For your security, you'll be logged out from other devices after
              changing your password.
            </p>
          </div>
        </div>

        {/* Support */}
        <div className="mt-6 flex w-full max-w-2xl items-center justify-between rounded-2xl border border-white/70 bg-white/75 px-6 py-4 shadow-sm backdrop-blur-sm">

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EEE8FF] text-[#6C3CF0]">
              <Headphones size={19} />
            </div>

            <div>
              <p className="text-[14px] font-semibold text-[#1F245C]">
                Need help?
              </p>

              <p className="text-[12px] text-[#6B7280]">
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