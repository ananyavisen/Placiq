import { useState } from "react";
import { Trophy } from "lucide-react";
import Sidebar from "../Assessment/Sidebar";
import UserProfile from "../Assessment/UserProfile";
import AchievementStats from "./AchievementStats";
import AchievementFilters from "./AchievementFilters";
import AchievementCard from "./AchievementCard";
import MilestoneProgress from "./MilestoneProgress";
import AchievementCategories from "./AchievementCategories";
import ShareProgress from "./ShareProgress";
import { achievements } from "../../data/achievements";

export default function Achievements() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? achievements
      : achievements.filter((a) => a.category === activeFilter);

  return (
    <div className="flex h-[calc(100dvh-2.5rem)] w-full flex-col overflow-hidden sm:h-[calc(100dvh-2rem)]">
      <div className="flex min-h-0 flex-1 gap-3 overflow-hidden">
        {/* ── Left: Sidebar ─────────────────────────────────────────────── */}
        <Sidebar activeItem="Achievements" />

        {/* ── Centre + Right wrapper ────────────────────────────────────── */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* Top bar */}
          <div className="flex justify-end px-1 pb-1 pt-1">
            <UserProfile />
          </div>

          <div className="flex min-h-0 flex-1 overflow-hidden">
            {/* ── Centre: Main achievements panel ─────────────────────── */}
            <main className="flex-1 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-1 py-3 sm:px-2">
              {/* Page header */}
              <div className="mb-5">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F3E8FF]">
                    <Trophy size={20} className="text-[#8B5CF6]" strokeWidth={2} />
                  </div>
                  <h1 className="font-[Inter] text-2xl font-bold text-[#2F314D]">
                    Achievements
                  </h1>
                </div>
                <p className="mt-1 font-[Inter] text-sm text-[#6B6478]">
                  Track your milestones and celebrate your placement preparation
                  journey.
                </p>
              </div>

              {/* Stats row */}
              <AchievementStats />

              {/* Filter bar */}
              <AchievementFilters
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
              />

              {/* Achievement list */}
              <div className="flex flex-col gap-3">
                {filtered.length > 0 ? (
                  filtered.map((achievement) => (
                    <AchievementCard
                      key={achievement.id}
                      achievement={achievement}
                    />
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#C4B5FD] bg-white/60 py-14 text-center">
                    <Trophy size={36} className="mb-3 text-[#C4B5FD]" strokeWidth={1.5} />
                    <p className="font-[Inter] text-sm font-medium text-[#6B6478]">
                      No achievements in this category yet.
                    </p>
                    <p className="mt-1 font-[Inter] text-xs text-[#9CA3AF]">
                      Keep going — your next milestone is just around the corner!
                    </p>
                  </div>
                )}
              </div>

              {/* Bottom spacer so last card isn't flush to edge */}
              <div className="h-4" />
            </main>

            {/* ── Right: Milestone / progress panel ───────────────────── */}
            <aside className="hidden w-72 shrink-0 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden p-2 xl:block">
              <MilestoneProgress />
              <AchievementCategories />
              <ShareProgress />
              {/* Bottom spacer */}
              <div className="h-4" />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
