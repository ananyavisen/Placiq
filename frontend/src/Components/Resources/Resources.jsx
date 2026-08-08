import { useState } from "react";
import { BookOpen, Search, ChevronDown, ArrowRight } from "lucide-react";
import Sidebar from "../Assessment/Sidebar";
import UserProfile from "../Assessment/UserProfile";
import CategoryCard from "./CategoryCard";
import ResourceCard from "./ResourceCard";
import FilterSection from "./FilterSection";
import ContinueLearningCard from "./ContinueLearningCard";
import CollectionCard from "./CollectionCard";
import {
  resourceCategories,
  recommendedResources,
  continueLearning,
} from "../../data/resources";

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="flex h-[calc(100dvh-2.5rem)] w-full flex-col overflow-hidden sm:h-[calc(100dvh-2rem)]">
      <div className="flex min-h-0 flex-1 gap-3 overflow-hidden">
        <Sidebar activeItem="Resources" />

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex justify-end px-1 pb-1 pt-1">
            <UserProfile />
          </div>

          <div className="flex min-h-0 flex-1 overflow-hidden">
            <main className="flex-1 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-1 py-3 sm:px-2">
              {/* Page header */}
              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F3E8FF]">
                    <BookOpen size={20} className="text-[#8B5CF6]" strokeWidth={2} />
                  </div>
                  <h1 className="font-[Inter] text-2xl font-bold text-[#2F314D]">
                    Resources
                  </h1>
                </div>
                <p className="mt-1 font-[Inter] text-sm text-[#6B6478]">
                  Curated resources to help you learn, practice and grow in your
                  placement journey.
                </p>
              </div>

              {/* Local search + type filter */}
              <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                <div className="flex h-10 flex-1 items-center rounded-xl border border-[#ECE4EF] bg-white px-3 shadow-sm transition focus-within:border-[#C4B5FD]">
                  <Search size={16} className="shrink-0 text-[#9CA3AF]" />
                  <input
                    type="text"
                    placeholder="Search resources..."
                    className="ml-2 w-full bg-transparent font-[Inter] text-sm text-[#2F314D] outline-none placeholder:text-[#B9B2C3]"
                  />
                </div>
                <div className="relative shrink-0">
                  <select className="h-10 w-full appearance-none rounded-xl border border-[#ECE4EF] bg-white py-2 pl-4 pr-9 font-[Inter] text-sm text-[#2F314D] shadow-sm outline-none transition focus:border-[#C4B5FD] sm:w-36">
                    <option>All Types</option>
                    <option>Video</option>
                    <option>Article</option>
                    <option>Notes</option>
                    <option>Book</option>
                    <option>Quiz</option>
                  </select>
                  <ChevronDown
                    size={14}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
                  />
                </div>
              </div>

              {/* Category cards */}
              <div className="mb-6 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {resourceCategories.map((category) => (
                  <CategoryCard
                    key={category.id}
                    category={category}
                    isActive={activeCategory === category.id}
                    onSelect={setActiveCategory}
                  />
                ))}
              </div>

              {/* Recommended resources */}
              <div>
                <h2 className="mb-3 font-[Inter] text-base font-semibold text-[#2F314D]">
                  Recommended for You
                </h2>
                <div className="flex flex-col gap-3">
                  {recommendedResources.map((resource) => (
                    <ResourceCard key={resource.id} resource={resource} />
                  ))}
                </div>
                <button
                  type="button"
                  className="mt-4 flex w-full items-center justify-center gap-1.5 font-[Inter] text-sm font-medium text-[#8B5CF6] transition hover:text-[#7C3AED]"
                >
                  View All Resources
                  <ArrowRight size={16} />
                </button>
              </div>
            </main>

            {/* Right panel */}
            <aside className="hidden w-72 shrink-0 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden p-2 xl:block">
              <FilterSection />

              <div className="mt-4 rounded-2xl border border-[#ECE4EF] bg-white p-4 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-[Inter] text-sm font-semibold text-[#2F314D]">
                    Continue Learning
                  </h3>
                  <button
                    type="button"
                    className="font-[Inter] text-xs font-medium text-[#8B5CF6] transition hover:text-[#7C3AED]"
                  >
                    View All
                  </button>
                </div>
                <div className="flex flex-col gap-2.5">
                  {continueLearning.map((item) => (
                    <ContinueLearningCard key={item.id} item={item} />
                  ))}
                </div>
              </div>

              <CollectionCard />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
