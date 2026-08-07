import {
  FileText,
  Code2,
  Mic,
  ClipboardCheck,
} from "lucide-react";

import ActionCard from "./ActionCard";

export default function QuickActions() {
  return (
    <div className="mt-8 grid grid-cols-4 gap-6">

      <ActionCard
        icon={<FileText size={24} />}
        title="Resume Builder"
        description="Build ATS-friendly resumes."
      />

      <ActionCard
        icon={<Code2 size={24} />}
        title="Coding Practice"
        description="Solve DSA questions daily."
      />

      <ActionCard
        icon={<Mic size={24} />}
        title="Mock Interview"
        description="Practice HR & technical rounds."
      />

      <ActionCard
        icon={<ClipboardCheck size={24} />}
        title="Assessments"
        description="Take company aptitude tests."
      />

    </div>
  );
}