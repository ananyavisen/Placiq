import { Sparkles } from "lucide-react";

export default function ResumeTip() {
  return (
    <div className="flex items-start gap-3 rounded-2xl bg-linear-to-r from-violet-50 to-pink-50 p-5">
      <Sparkles
        size={18}
        className="mt-1 text-violet-600"
      />

      <p className="text-xs leading-5 text-slate-600">
        <span className="font-semibold">Tip:</span> Make sure your
        resume is up-to-date and contains relevant keywords for the
        role you're targeting.
      </p>
    </div>
  );
}