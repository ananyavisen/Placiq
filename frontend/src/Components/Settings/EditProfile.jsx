import {
  ArrowLeft,
  Camera,
  User,
  Mail,
  Phone,
  ShieldCheck,
} from "lucide-react";

import bg from "../../assets/bg.png";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const EditProfile = () => {
  return (
     <>
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
          <Link to="/settings">
          <button className="flex items-center gap-2 text-[14px] font-medium text-[#6C3CF0] hover:underline">
            <ArrowLeft size={18} />
            Back to Settings
          </button></Link>
        </div>

        {/* Heading */}
        <div className="mb-7 text-center">
          <h1 className="text-[36px] font-bold text-[#1F245C]">
            Edit Profile
          </h1>

          <p className="mt-2 text-[16px] text-[#6B7280]">
            Update your personal information and profile details.
          </p>
        </div>

        {/* Profile Card */}
        <div className="w-full max-w-2xl rounded-3xl border border-white/60 bg-white/85 p-10 shadow-[0_10px_35px_rgba(80,60,120,0.08)] backdrop-blur-sm">

          {/* Profile Photo */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <img
                src="https://i.pravatar.cc/150?img=32"
                alt="Profile"
                className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-md"
              />

              <button
                type="button"
                className="absolute bottom-1 right-1 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#6C3CF0] text-white shadow-sm transition hover:bg-[#5B2FDC]"
                aria-label="Change profile photo"
              >
                <Camera size={17} />
              </button>
            </div>

            <button className="mt-3 text-[13px] font-medium text-[#6C3CF0] hover:underline">
              Change Photo
            </button>
          </div>

          {/* Form */}
          <div className="mt-8 space-y-5">

            {/* Full Name */}
            <div>
              <label className="text-[13px] font-medium text-[#1F245C]">
                Full Name
              </label>

              <div className="relative mt-2">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
                />

                <input
                  type="text"
                  defaultValue="Anekvarna"
                  className="h-12 w-full rounded-xl border border-[#D9DCE5] bg-white px-11 text-[14px] text-[#1F245C] outline-none transition focus:border-[#8B5CF6]"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-[13px] font-medium text-[#1F245C]">
                Email Address
              </label>

              <div className="relative mt-2">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
                />

                <input
                  type="email"
                  defaultValue="anekvarna030@gmail.com"
                  className="h-12 w-full rounded-xl border border-[#D9DCE5] bg-white px-11 text-[14px] text-[#1F245C] outline-none transition focus:border-[#8B5CF6]"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="text-[13px] font-medium text-[#1F245C]">
                Phone Number
              </label>

              <div className="relative mt-2">
                <Phone
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
                />

                <input
                  type="tel"
                  defaultValue="+91 98765 43210"
                  className="h-12 w-full rounded-xl border border-[#D9DCE5] bg-white px-11 text-[14px] text-[#1F245C] outline-none transition focus:border-[#8B5CF6]"
                />
              </div>
            </div>

          </div>

          {/* Buttons */}
          <div className="mt-8 flex items-center justify-end gap-3">

            <button
              type="button"
              className="rounded-xl border border-[#D9DCE5] bg-white px-6 py-2.5 text-[14px] font-medium text-[#6B7280] transition hover:bg-[#F9FAFB]"
            >
              Cancel
            </button>

            <button
              type="button"
              className="rounded-xl bg-[#6C3CF0] px-6 py-2.5 text-[14px] font-medium text-white shadow-sm transition hover:bg-[#5B2FDC]"
            >
              Save Changes
            </button>

          </div>

          {/* Security Note */}
          <div className="mt-6 flex items-start gap-3 rounded-xl bg-[#F7F4FF] px-4 py-3">
            <ShieldCheck
              size={18}
              className="mt-0.5 shrink-0 text-[#6C3CF0]"
            />

            <p className="text-[12px] leading-5 text-[#6B7280]">
              Your personal information is kept secure and will only be used
              to improve your Placiq experience.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default EditProfile;