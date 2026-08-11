import { FileText } from "lucide-react";
import UploadDropzone from "./UploadDropzone";
import UploadedResume from "./Uploaded";
import ResumeTip from "./ResumeTip";

export default function UploadResumeCard() {
  return (
    <div className="rounded-3xl bg-white/20 p-4 shadow-sm">
      {/* Header */}
      <div className="mb-2">
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-violet-600" />

          <h2 className="text-lg font-semibold text-slate-800">
            Upload Your Resume
          </h2>
        </div>
      </div>

      {/* Body */}

      <div className="grid grid-cols-2 gap-3">
        <UploadDropzone />

        <div className="flex flex-col gap-3">
          <UploadedResume />
          <ResumeTip />
        </div>
      </div>
    </div>
  );
}