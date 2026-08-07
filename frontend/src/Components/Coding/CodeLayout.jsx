import Sidebar from "./Sidebar";
import HeaderCode from "./HeaderCode";
import PracticeTabs from "./PracticeTabs";
import TopicCarousel from "./TopicCarousel";
import CurrentTopicCard from "./CurrentTopicCard";
import QuestionSection from "./QuestionSection";
import FilterBar from "./FilterBar";
import QuestionRow from "./QuestionRow";
import Progress from "./Progress";
import ProfileHeader from "./ProfileHeader";
import PracticeSmart from "./PracticeSmart";
import QuickStats from "./QuickStats";
import TopicProgress from "./TopicProgress";

export default function CodeLayout() {
    return (
      <div className="min-h-screen flex ">
  
        {/* Sidebar */}
        <aside className="flex-1 min-w-62.5 max-w-70 border-r border-gray-200">
          <Sidebar />
          <PracticeSmart />
        </aside>
  
        {/* Main Content */}
        <main className="flex-4 px-8 py-6 overflow-y-auto">
          {/* Page Header */}
            <HeaderCode />
            
            
          {/* Topic Cards */}
            <PracticeTabs />
            <TopicCarousel />
            <CurrentTopicCard />

          {/* Question List */}
            <QuestionSection />

        </main>
  
        {/* Right Panel */}
        <aside className="flex-[1.4] min-w-75 max-w-90 border-l border-gray-200 px-6 py-6">
            <ProfileHeader />
          {/* Progress Card */}
            <Progress />
            <TopicProgress />
            <QuickStats />
            
        </aside>
  
      </div>
    );
  }