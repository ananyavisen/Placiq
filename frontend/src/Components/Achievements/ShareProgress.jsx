import { Share2, Sparkles } from "lucide-react";

export default function ShareProgress() {
  return (
    <div className="relative mt-4 overflow-hidden rounded-2xl bg-gradient-to-br from-[#C4B5FD] via-[#A78BFA] to-[#8B5CF6] p-5 shadow-sm">
      <div className="relative z-10 max-w-[72%]">
        <p className="font-[Inter] text-sm font-semibold leading-snug text-white">
          Share Your Progress
        </p>
        <p className="mt-1 font-[Inter] text-[11px] leading-relaxed text-white/80">
          Celebrate your achievements with your network!
        </p>
        <button
          type="button"
          className="mt-3 flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 font-[Manrope] text-xs font-semibold text-[#7C3AED] transition hover:bg-[#F3E8FF]"
        >
          <Share2 size={13} strokeWidth={2} />
          Share Achievements
        </button>
      </div>
      {/* Decorative icon */}
      <div className="absolute -bottom-2 -right-2 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
        <Sparkles size={34} className="text-white/90" strokeWidth={1.5} />
      </div>
    </div>
  );
}
