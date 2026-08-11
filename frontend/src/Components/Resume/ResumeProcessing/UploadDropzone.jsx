import { UploadCloud } from "lucide-react";

export default function UploadDropzone() {
  return (
    <div className="flex h-48 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-violet-300 bg-violet-50/20 px-6">
      <UploadCloud
        size={32}
        className="mb-3 text-violet-600"
      />

      <h4 className="text-sm font-semibold text-slate-700">
        Drag & drop your file here
      </h4>

      <p className="my-2 text-xs text-slate-400">or</p>

      <button className="rounded-lg border border-violet-500 px-6 py-2 text-sm font-medium text-violet-600 transition hover:bg-violet-50">
        Choose File
      </button>

      <p className="mt-3 text-xs text-slate-500">
        PDF or DOCX (Max 5MB)
      </p>
    </div>
  );
}