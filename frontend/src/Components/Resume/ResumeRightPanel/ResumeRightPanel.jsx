import ATSScoreCard from "./ATSScoreCard";
import ResumeInsights from "./ResumeInsights";

export default function ResumeRightPanel() {
  return (
    <div className="flex flex-col gap-6">
      <ATSScoreCard />
      <ResumeInsights />
 
    </div>
  );
}