import { useState } from "react";
import Navbar from "./Navbar";
// import UserProfile from "./UserProfile";
import FilterTabs from "./FilterTabs";
import AssessmentCard from "./AssessmentCard";
import StatsCard from "./StatsCard";
import RecommendationCard from "./RecommendationCard";
import { assessments, filterTabs } from "../../data/assessments";
import ProfileHeader from "../Common/ProfileHeader";

export default function Assessment() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="flex h-[calc(100vh-32px)] w-full flex-col lg:h-[calc(100vh-40px)]">
      

          <div className="flex min-h-0 flex-1 overflow-hidden">
            {/* Main content */}
            <main className="flex-1 overflow-y-auto scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-1 py-3 sm:px-2">
              {/* Page header */}
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h1 className="font-[Inter] text-2xl font-bold text-[#2F314D]">
                    Assessments
                  </h1>
                  <p className="mt-1 font-[Inter] text-sm text-[#6B6478]">
                    Test your knowledge and track your progress
                  </p>
                </div>
                <button
                  type="button"
                  className="shrink-0 rounded-xl bg-[#8B5CF6] px-5 py-2.5 font-[Manrope] text-sm font-semibold text-white shadow-md transition hover:bg-[#7C3AED] hover:shadow-lg"
                >
                  Create Assessment
                </button>
              </div>

              {/* Search bar */}
              <Navbar />

              {/* Filter tabs */}
              <FilterTabs
                tabs={filterTabs}
                activeTab={activeTab}
                onTabChange={setActiveTab}
              />

              {/* Assessment cards */}
              <div className="mt-5 flex flex-col gap-3">
                {assessments.map((assessment) => (
                  <AssessmentCard key={assessment.id} assessment={assessment} />
                ))}
              </div>

              {/* Footer disclaimer */}
              <p className="mt-8 text-center font-[Inter] text-xs text-[#B9B2C3]">
                All assessments are designed to enhance your learning and track
                your progress effectively.
              </p>
            </main>

            {/* Right panel */}
            <aside className="hidden w-75 shrink-0 overflow-y-auto scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden p-2 xl:block">
              <ProfileHeader />
              <StatsCard />
              <RecommendationCard />
            </aside>
          </div>
        </div>
      
  );
}
