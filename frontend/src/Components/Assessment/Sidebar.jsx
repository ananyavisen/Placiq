import {
  LayoutDashboard,
  Map,
  ClipboardList,
  Users,
  Code2,
  FileText,
  Briefcase,
  BookOpen,
  Sparkles,
  Trophy,
  Headphones,
} from "lucide-react";
import logo from "../../assets/logo.png";
import { navItems } from "../../data/navigation";

export default function Sidebar({ activeItem = "Assessments" }) {
  const iconMap = {
  "layout-dashboard": LayoutDashboard,
  map: Map,
  "clipboard-list": ClipboardList,
  users: Users,
  "code-2": Code2,
  "file-text": FileText,
  briefcase: Briefcase,
  "book-open": BookOpen,
  sparkles: Sparkles,
  trophy: Trophy,
};

  return (
    <aside className="hidden h-full w-56 shrink-0 flex-col lg:flex xl:w-60">
      {/* Brand */}
      <div className="flex items-center gap-3 px-2 py-4">
        <img src={logo} alt="Placiq logo" className="h-10 w-10 object-contain" />
        <div>
          <h1 className="font-[Manrope] text-xl font-bold leading-tight text-[#49344C]">
            Placiq
          </h1>
          <p className="font-[Inter] text-[11px] text-[#595063]">
            Smart Prep. Right Match.
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto px-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {navItems.map((item) => {
          const Icon = iconMap[item.icon];
          const isActive = item.label === activeItem;

          return (
            <button
              key={item.label}
              type="button"
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 font-[Inter] text-sm transition-all duration-200 ${
                isActive
                  ? "bg-[#F3E8FF]/80 font-medium text-[#7C3AED]"
                  : "text-[#6B6478] hover:bg-white/40 hover:text-[#49344C]"
              }`}
            >
              <Icon
                size={18}
                strokeWidth={isActive ? 2.2 : 2}
                className={isActive ? "text-[#8B5CF6]" : "text-[#9CA3AF]"}
              />
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Upgrade card */}
      <div className="mx-1 mb-3 rounded-2xl bg-[#F3E8FF]/70 p-4 backdrop-blur-sm">
        <p className="font-[Inter] text-xs leading-relaxed text-[#6B6478]">
          Upgrade to Pro. Unlock advanced features and AI powered insights.
        </p>
        <button
          type="button"
          className="mt-3 w-full rounded-xl bg-[#8B5CF6] py-2 font-[Manrope] text-xs font-semibold text-white transition hover:bg-[#7C3AED]"
        >
          Upgrade Now
        </button>
      </div>

      {/* Support */}
      <div className="border-t border-white/30 px-2 py-4">
        <button
          type="button"
          className="flex items-center gap-2 font-[Inter] text-xs text-[#6B6478] transition hover:text-[#8B5CF6]"
        >
          <Headphones size={14} />
          Need help? Contact Support
        </button>
      </div>
    </aside>
  );
}
