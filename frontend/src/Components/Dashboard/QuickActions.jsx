import {
  FileText,
  Code2,
  Mic,
  ClipboardCheck,
} from "lucide-react";

import ActionCard from "./ActionCard";

export default function QuickActions() {
  return (
    <div className="mt-8 grid grid-cols-4 gap-7">

      <ActionCard
        icon={<FileText size={22} />}
        title="Resume"
        description="Build ATS-friendly resumes."
      />

      <ActionCard
        icon={<Code2 size={22} />}
        title="Coding"
        description="Solve DSA questions daily."
      />

      <ActionCard
        icon={<Mic size={22} />}
        title="Interview"
        description="Practice HR & technical rounds."
      />

      <ActionCard
        icon={<ClipboardCheck size={22} />}
        title="Tests"
        description="Take company aptitude tests."
      />

    </div>
  );
}