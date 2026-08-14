import { FolderOpen } from "lucide-react";

export default function CollectionCard() {
  return (
    <div className="relative mt-4 overflow-hidden rounded-2xl bg-linear-to-br from-[#C4B5FD] via-[#A78BFA] to-[#8B5CF6] p-5 shadow-sm">
      <div className="relative z-10 max-w-[70%]">
        <p className="font-[Inter] text-sm font-semibold leading-snug text-white">
          Save your favorite resources and access them anytime!
        </p>
        <button
          type="button"
          className="mt-3 rounded-xl bg-white px-4 py-2 font-[Manrope] text-xs font-semibold text-[#7C3AED] transition hover:bg-[#F3E8FF]"
        >
          Create Collection
        </button>
      </div>
      <div className="absolute -bottom-2 -right-2 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
        <FolderOpen size={36} className="text-white/90" strokeWidth={1.5} />
      </div>
    </div>
  );
}
