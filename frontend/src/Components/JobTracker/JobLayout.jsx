import ApplicationCard from "./ApplicationCard";
import ApplicationFilters from "./ApplicationFilters";
import ApplicationStats from "./ApplicationStats";
import ApplicationProgress from "./ApplicationProgress";
import AISuggestions from "./AISuggestions";
import JobTrackerHeader from "./JobTrackerHeader";
import JobRightPanel from "./JobRightPanel";

import { applications } from "./applicationData";

const applicationStats = {
  total: 28,
  applied: 28,
  oa: 9,
  interview: 6,
  offer: 1,
  rejected: 7,
};

const aiSuggestions = [
  {
    id: 1,
    type: "resume",
    text: 'Add more keywords like "System Design" and "Cloud" to match more job roles.',
  },
  {
    id: 2,
    type: "jobs",
    text: "Consider applying to 15 more product-based startups this week.",
  },
  {
    id: 3,
    type: "projects",
    text: "Your backend project aligns well with 12 new job openings.",
  },
];

export default function JobLayout() {
  return (
    <div className="min-h-screen flex gap-6">

      {/* Main Content */}
      <main className="flex-1 min-w-0">

        {/* Header */}
        <JobTrackerHeader />

        {/* Stats */}
        <div className="mt-6">
          <ApplicationStats />
        </div>

        {/* Filters */}
        <div className="mt-4">
          <ApplicationFilters />
        </div>

        {/* Applications */}
        <div className="mt-4 overflow-hidden rounded-2xl border border-[#E9E3F0]">
          {applications.map((application) => (
            <ApplicationCard
              key={application.id}
              application={application}
            />
          ))}

          <button
            type="button"
            className="
              flex w-full items-center justify-center gap-2
              py-3
              font-[Inter]
              text-[11px]
              font-semibold
              text-[#7C3AED]
              transition
              hover:bg-[#F9F6FF]
            "
          >
            Show more applications
            <span>⌄</span>
          </button>
        </div>

        {/* Progress + AI Suggestions */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <ApplicationProgress stats={applicationStats} />
          <AISuggestions suggestions={aiSuggestions} />
        </div>

      </main>

      {/* Right Panel */}
      <aside className="w-80 shrink-0">
        <JobRightPanel />
      </aside>

    </div>
  );
}