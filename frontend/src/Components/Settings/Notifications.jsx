import {
  Bell,
  Mail,
  Calendar,
  Briefcase,
  BarChart3,
} from "lucide-react";

const Notifications = () => {
  return (
    <div className="w-full rounded-2xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm">

      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-[20px] font-semibold text-[#1F245C]">
          Notifications
        </h2>

        <p className="mt-1 text-[14px] text-[#6B7280]">
          Choose what notifications you want to receive.
        </p>
      </div>

      {/* Notification Options */}
<div className="space-y-5">

  {/* Daily Study Reminders */}
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEE8FF] text-[#6C3CF0]">
        <Bell size={18} />
      </div>

      <div>
        <p className="text-[15px] font-medium text-[#1F245C]">
          Daily Study Reminders
        </p>

        <p className="text-[12px] text-[#6B7280]">
          Get reminded to stay consistent.
        </p>
      </div>
    </div>

    <label className="relative inline-flex cursor-pointer items-center">
      <input type="checkbox" defaultChecked className="peer sr-only" />

      <div className="h-7 w-11 rounded-full bg-[#D1D5DB] transition peer-checked:bg-[#7C3AED]">
        <div className="absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow-sm transition peer-checked:translate-x-4" />
      </div>
    </label>
  </div>


  {/* Application Reminders */}
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEE8FF] text-[#6C3CF0]">
        <Mail size={18} />
      </div>

      <div>
        <p className="text-[15px] font-medium text-[#1F245C]">
          Application Reminders
        </p>

        <p className="text-[12px] text-[#6B7280]">
          Reminders to apply for jobs.
        </p>
      </div>
    </div>

    <label className="relative inline-flex cursor-pointer items-center">
      <input type="checkbox" defaultChecked className="peer sr-only" />

      <div className="h-7 w-11 rounded-full bg-[#D1D5DB] transition peer-checked:bg-[#7C3AED]">
        <div className="absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow-sm transition peer-checked:translate-x-4" />
      </div>
    </label>
  </div>


  {/* Interview Reminders */}
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEE8FF] text-[#6C3CF0]">
        <Calendar size={18} />
      </div>

      <div>
        <p className="text-[15px] font-medium text-[#1F245C]">
          Interview Reminders
        </p>

        <p className="text-[12px] text-[#6B7280]">
          Alerts for upcoming interviews.
        </p>
      </div>
    </div>

    <label className="relative inline-flex cursor-pointer items-center">
      <input type="checkbox" className="peer sr-only" />

      <div className="h-7 w-11 rounded-full bg-[#D1D5DB] transition peer-checked:bg-[#7C3AED]">
        <div className="absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow-sm transition peer-checked:translate-x-4" />
      </div>
    </label>
  </div>


  {/* Weekly Progress Summary */}
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEE8FF] text-[#6C3CF0]">
        <BarChart3 size={18} />
      </div>

      <div>
        <p className="text-[15px] font-medium text-[#1F245C]">
          Weekly Progress Summary
        </p>

        <p className="text-[12px] text-[#6B7280]">
          Receive your weekly progress report.
        </p>
      </div>
    </div>

    <label className="relative inline-flex cursor-pointer items-center">
      <input type="checkbox" defaultChecked className="peer sr-only" />

      <div className="h-7 w-11 rounded-full bg-[#D1D5DB] transition peer-checked:bg-[#7C3AED]">
        <div className="absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow-sm transition peer-checked:translate-x-4" />
      </div>
    </label>
  </div>


  {/* New Job Opportunities */}
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEE8FF] text-[#6C3CF0]">
        <Briefcase size={18} />
      </div>

      <div>
        <p className="text-[15px] font-medium text-[#1F245C]">
          New Job Opportunities
        </p>

        <p className="text-[12px] text-[#6B7280]">
          Get notified about relevant jobs.
        </p>
      </div>
    </div>

    <label className="relative inline-flex cursor-pointer items-center">
      <input type="checkbox" className="peer sr-only" />

      <div className="h-7 w-11 rounded-full bg-[#D1D5DB] transition peer-checked:bg-[#7C3AED]">
        <div className="absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow-sm transition peer-checked:translate-x-4" />
      </div>
    </label>
  </div>

</div>
    </div>
  );
};

export default Notifications;