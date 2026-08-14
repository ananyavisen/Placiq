import { Search } from "lucide-react";

export default function Navbar({ placeholder = "Search assessments..." }) {
  return (
    <header className="flex items-center gap-4 px-1 py-2">
      <div className="flex h-10 flex-1 items-center rounded-xl border border-white/60 bg-white/50 px-3 shadow-sm backdrop-blur-sm transition focus-within:border-[#C4B5FD] focus-within:bg-white/70">
        <Search size={16} className="shrink-0 text-[#9CA3AF]" />
        <input
          type="text"
          placeholder={placeholder}
          className="ml-2 w-full bg-transparent font-[Inter] text-sm text-[#2F314D] outline-none placeholder:text-[#B9B2C3]"
        />
      </div>
    </header>
  );
}
