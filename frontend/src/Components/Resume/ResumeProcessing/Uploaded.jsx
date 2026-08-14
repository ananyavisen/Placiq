import { FileText, Trash2 } from "lucide-react";

export default function Uploaded() {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-[#ECE8F8] bg-white/20 p-3">
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50">
          <FileText className="text-red-500" />
        </div>

        <div>
          <h3 className="font-semibold text-slate-800">
            User1_Resume.pdf
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            210 KB • Uploaded just now
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
       

        <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-50">
          <Trash2
            size={18}
            className="text-slate-500"
          />
        </button>
      </div>
    </div>
  );
}