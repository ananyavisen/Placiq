import { FileText } from "lucide-react";

export default function ResumeHeader() {
  return (
    <div className="flex flex-col gap-1 p-2">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-100">
          <FileText
            className="h-6 w-6 text-violet-600"
            strokeWidth={2.2}
          />
        </div>

        <h1 className="text-3xl font-bold text-slate-900">
          Resume Builder
        </h1>
      </div>

      <p className="text-sm text-slate-500">
        Upload your resume and get AI-powered feedback to make it ATS friendly
        and impactful.
      </p> 
    </div>
  );
}