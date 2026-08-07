import logo from "../../assets/logo.png";

import {
  LayoutDashboard,
  Map,
  ClipboardCheck,
  Mic,
  Code2,
  FileText,
  Briefcase,
  BookOpen,
  Bot,
  Trophy,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Map, label: "Roadmap" },
  { icon: ClipboardCheck, label: "Assessments" },
  { icon: Mic, label: "Mock Interviews" },
  { icon: Code2, label: "Coding Practice" },
  { icon: FileText, label: "Resume Builder" },
  { icon: Briefcase, label: "Job Tracker" },
  { icon: BookOpen, label: "Resources" },
  { icon: Bot, label: "AI Coach" },
  { icon: Trophy, label: "Achievements" },
];

function Sidebar() {
    return (
    <aside className="w-60 h-fit rounded-[30px]  bg-[#FFFCFA]/30 backdrop-blur-sm shadow-xl flex border-white/40 px-6 py-10 flex-col">
    {/* Logo */}
    <div className="flex items-center gap-3 mb-12 px-2">
      <img src={logo} alt="Placiq" className="h-12 w-15" />
      <div>
        <h1 className="text-2xl font-bold text-[#49344C]">Placiq</h1>
        <p className="text-xs text-gray-500">
          Smart Prep. Right Match.
        </p>
      </div>
    </div>

    {/* Navigation */}
    <nav className="flex flex-col gap-1">
      {menuItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <button
            key={item.label}
            className={`flex items-center gap-3 px-3 py-3 rounded-2xl transition-all
              ${
                index === 4
                  ? "bg-[#F3ECFF] text-[#8E7397]"
                  : "text-[#595063] hover:bg-[#F8F5FC]"
              }`}
          >
            <Icon size={15} />
            <span className="font-medium">{item.label}</span>
          </button>
        );
      })}
    </nav>

  </aside>
);
}

export default Sidebar;