
import logo from "../../assets/logo.png";
import PlacementGoal from "./PlacementGoal";
import HelpCard from "./HelpCard";
import {
  LayoutDashboard,
  Map,
 ClipboardCheck,
  Mic,
  Code2,
  FileText,
  Briefcase,
  BookOpen,
  Sparkles,
  Trophy,
  Settings,
  Target,
  Headphones,
} from "lucide-react";
const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Map, label: "Roadmap" },
  { icon: ClipboardCheck, label: "Assessments" },
  { icon: Mic, label: "Mock Interviews" },
  { icon: Code2, label: "Coding Practice" },
  { icon: FileText, label: "Resume Builder" },
  { icon: Briefcase, label: "Job Tracker" },
  { icon: BookOpen, label: "Resources" },
  { icon: Sparkles, label: "AI Coach" },
  { icon: Trophy, label: "Achievements" },
  { icon: Settings, label: "Settings" },
];
export default function Sidebar() {
  return (
    <div className="w-[248px] bg-transparent rounded-[32px] min-h-screen shadow-sm flex flex-col p-6">
        {/* Top Part */}
      <div className="flex items-center gap-3 px-0 pt-3 pb-6">
        {/* Logo */}
       <img
        src={logo}
        alt="Placiq"
       className="w-14 h-14 object-contain"
       />
     <div>
      <h1 className="text-[32px] font-bold text-[#2B224C] leading-none">
        Placiq
      </h1>
      <p className="text-[14px] text-gray-500 mt-1">
       Smart Prep.<br />Right Match.
    </p>
  </div>
</div>
{/* Menu Items */}
<div className="mt-3 px-1">
  {menuItems.map(({ icon: Icon, label, active }) => (
    <button
      key={label}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition
      ${
        active
          ? "bg-[#F2ECFF] text-[#7C4DFF]"
          : "text-[#2B224C] hover:bg-[#F7F5FF]"
      }`}
    >
      <Icon size={20} />
      <span className="text-[16px] font-medium">{label}</span>
    </button>
  ))}
</div>
{/* Bottom Part */}
<div className="mt-auto space-y-2">
      <PlacementGoal />
      <HelpCard />
</div>
</div>   
  );
}