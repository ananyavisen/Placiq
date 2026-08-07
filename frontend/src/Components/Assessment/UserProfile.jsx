import { Bell, Settings } from "lucide-react";

export default function UserProfile() {
  return (
    <div className="flex items-center gap-4">
      <button type="button" className="relative p-1 transition hover:opacity-80">
        <Bell size={20} className="text-[#49344C]" strokeWidth={1.8} />
        <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-[#EA7567]" />
      </button>

      <div className="flex items-center gap-2.5">
        <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-white/80 shadow-sm">
          <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-[#DDD6FE] to-[#C4B5FD] font-[Inter] text-sm font-semibold text-[#7C3AED]">
            U1
          </div>
        </div>
        <div className="hidden sm:block">
          <p className="font-[Inter] text-sm font-semibold leading-tight text-[#2F314D]">
            User1
          </p>
          <p className="font-[Inter] text-xs text-[#6B6478]">
            Frontend Developer
          </p>
        </div>
      </div>

      <button
        type="button"
        className="p-1 transition hover:opacity-80"
      >
        <Settings size={18} className="text-[#9CA3AF]" strokeWidth={1.8} />
      </button>
    </div>
  );
}
