import { Camera, Pencil } from "lucide-react";
import { Link } from "react-router-dom";

const ProfileSection = () => {
  return (
    <div className="w-full rounded-2xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm">

      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-[20px] font-semibold text-[#1F245C]">
          Profile
        </h2>

        <p className="mt-1 text-[14px] text-[#6B7280]">
          Manage your personal information.
        </p>
      </div>

      {/* Profile Content */}
      <div className="flex items-center justify-between">

        {/* Left: Photo + Details */}
        <div className="flex items-center gap-5">

          {/* Profile Photo */}
          <div className="relative h-24 w-24 shrink-0">

            <img
              src="https://i.pravatar.cc/100?img=32"
              alt="Profile"
              className="h-24 w-24 rounded-full border-4 border-white object-cover shadow-sm"
            />

            {/* Camera Button */}
            <button
              className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#EEE7FF] text-[#6C3CF0] shadow-sm"
              aria-label="Change profile picture"
            >
              <Camera size={15} />
            </button>

          </div>

          {/* User Information */}
          <div className="space-y-2">

            {/* Full Name */}
            <div>
              <p className="text-[13px] text-[#6B7280]">
                Full Name
              </p>

              <p className="text-[17px] font-semibold text-[#1F245C]">
                User
              </p>
            </div>

            {/* Email */}
            <div>
              <p className="text-[13px] text-[#6B7280]">
                Email Address
              </p>

              <p className="text-[15px] text-[#1F245C]">
                xyz@gmail.com
              </p>
            </div>

            {/* Phone */}
            <div>
              <p className="text-[13px] text-[#6B7280]">
                Phone Number
              </p>

              <p className="text-[15px] text-[#1F245C]">
                +91 XXXXXXXXXX
              </p>
            </div>

          </div>
        </div>

        {/* Edit Profile */}
        <Link to="/profile">
        <button className="flex items-center gap-2 rounded-xl border border-[#8B5CF6] bg-white/60 px-5 py-2.5 text-[14px] font-medium text-[#6C3CF0] transition hover:bg-[#EEE7FF]">
          <Pencil size={16} />
          Edit Profile
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileSection;