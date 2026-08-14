import ProfileHeader from "../Common/ProfileHeader";
import ImprovementCard from "./Improve/ImprovementCard";
import ResumeHeader from "./ResumeHeader";
import UploadResumeCard from "./ResumeProcessing/UploadResume";
import ResumeRightPanel from "./ResumeRightPanel/ResumeRightPanel";

export default function ResumeLayout() {
  return (
    <div className="min-h-screen flex gap-6  rounded-2xl">

      {/* Main Content */}
      <main className="flex-1 min-w-0 px-8 py-6">

        <ResumeHeader />

        <div className="mt-6">
          <UploadResumeCard />
        </div>

        <div className="mt-6">
          <ImprovementCard />
        </div>

      </main>

      {/* Right Panel */}
      <aside className="w-80 shrink-0 px-4 py-6">
        <ProfileHeader />
        <ResumeRightPanel />
      </aside>

    </div>
  );
}