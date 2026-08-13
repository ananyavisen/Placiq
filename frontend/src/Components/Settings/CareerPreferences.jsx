import { Target } from "lucide-react";

import googleLogo from "../../assets/companies/google.svg";
import microsoftLogo from "../../assets/companies/microsoft.svg";
import adobeLogo from "../../assets/companies/adobe.svg";

const CareerPreferences = () => {
  return (
    <div className="w-full rounded-2xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm">

      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-[20px] font-semibold text-[#1F245C]">
          Career Preferences
        </h2>

        <p className="mt-1 text-[14px] text-[#6B7280]">
          Set your placement goals and preferences.
        </p>
      </div>
       {/* Career Details */}
<div className="space-y-5">

  {/* Target Role */}
  <div>
    <p className="text-[13px] text-[#6B7280]">
      Target Role
    </p>

    <select
      className="mt-1 w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-[15px] text-[#1F245C] outline-none focus:border-[#8B5CF6]"
      defaultValue="Software Engineer"
    >
      <option>Software Engineer</option>
      <option>Frontend Developer</option>
      <option>Backend Developer</option>
      <option>Full Stack Developer</option>
      <option>Data Analyst</option>
    </select>
  </div>

  {/* Target Companies */}
  <div>
    <p className="text-[13px] text-[#6B7280]">
      Target Companies
    </p>

    <div className="mt-2 flex items-center gap-1">
      <img
        src={googleLogo}
        alt="Google"
        className="h-8 w-8 rounded-full bg-white p-1 shadow-sm"
      />

      <img
        src={microsoftLogo}
        alt="Microsoft"
        className="h-8 w-8 rounded-full bg-white p-1 shadow-sm"
      />

      <img
        src={adobeLogo}
        alt="Adobe"
        className="h-8 w-8 rounded-full bg-white p-1 shadow-sm"
      />

      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EDE7FF] text-[10px] font-medium text-[#6C3CF0]">
        +3
      </div>
    </div>
  </div>

  {/* Experience + Location */}
  <div className="grid grid-cols-2 gap-4">

    {/* Experience Level */}
    <div>
      <p className="text-[13px] text-[#6B7280]">
        Experience Level
      </p>

      <select
        className="mt-1 w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-[15px] text-[#1F245C] outline-none focus:border-[#8B5CF6]"
        defaultValue="Entry Level"
      >
        <option>Entry Level</option>
        <option>Mid Level</option>
        <option>Senior Level</option>
      </select>
    </div>

    {/* Preferred Location */}
    <div>
      <p className="text-[13px] text-[#6B7280]">
        Preferred Location
      </p>

      <select
        className="mt-1 w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-[15px] text-[#1F245C] outline-none focus:border-[#8B5CF6]"
        defaultValue="Delhi NCR"
      >
        <option>Delhi NCR</option>
        <option>Bangalore</option>
        <option>Hyderabad</option>
        <option>Pune</option>
        <option>Mumbai</option>
        <option>Remote</option>
      </select>
    </div>

  </div>

  {/* Preferred Job Type */}
  <div>
    <p className="text-[13px] text-[#6B7280]">
      Preferred Job Type
    </p>

    <select
      className="mt-1 w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-[15px] text-[#1F245C] outline-none focus:border-[#8B5CF6]"
      defaultValue="Full-time"
    >
      <option>Full-time</option>
      <option>Part-time</option>
      <option>Internship</option>
      <option>Contract</option>
    </select>
  </div>

</div>
      {/* Update Goal Button */}
      <div className="mt-6">
        <button className="flex items-center justify-center gap-2 rounded-xl bg-[#EEE8FF] px-5 py-2.5 text-[14px] font-medium text-[#6C3CF0] transition hover:bg-[#E5DCFF]">
          <Target size={17} />
          Update Goal
        </button>
      </div>

    </div>
  );
};

export default CareerPreferences;