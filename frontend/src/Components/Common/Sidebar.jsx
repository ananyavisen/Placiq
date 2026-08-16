import {
  LayoutDashboard,
  Map,
  ClipboardList,
  Users,
  Code2,
  FileText,
  Briefcase,
  BookOpen,
  Target,
  ChevronRight,
  Sparkles,
  Trophy,
  Headphones,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import googleLogo from "../../assets/google.png";
import microsoftLogo from "../../assets/microsoft.png";
import adobeLogo from "../../assets/adobe.png";
import amazonLogo from "../../assets/amazon.png";
import netflixLogo from "../../assets/netflix.png";
import metaLogo from "../../assets/meta.png";
import { Link } from "react-router-dom";

export const navItems = [
  { label: "Dashboard", icon: "layout-dashboard", path: "/" },
  { label: "Roadmap", icon: "map", path: "/roadmap" },
  { label: "Assessments", icon: "clipboard-list", path: "/assessments" },
  { label: "Mock Interviews", icon: "users", path: "/mock-interviews" },
  { label: "Coding Practice", icon: "code-2", path: "/coding-practice" },
  { label: "Resume Builder", icon: "file-text", path: "/resume-builder" },
  { label: "Job Tracker", icon: "briefcase", path: "/job-tracker" },
  { label: "Resources", icon: "book-open", path: "/resources" },
  { label: "AI Coach", icon: "sparkles", path: "/ai-coach" },
  { label: "Achievements", icon: "trophy", path: "/achievements" },
];

const targetCompanies = [
  { name: "Google", logo: googleLogo },
  { name: "Microsoft", logo: microsoftLogo },
  { name: "Adobe", logo: adobeLogo },
  { name: "Amazon", logo: amazonLogo },
  { name: "Netflix", logo: netflixLogo },
  { name: "Meta", logo: metaLogo },
];

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
      <nav className="flex min-h-0 flex-1 flex-col gap-0.5  px-3 scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      {navItems.map((item) => {
  const Icon = iconMap[item.icon];

  return (
    <NavLink
      key={item.label}
      to={item.path}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-xl px-3 py-2.5 font-[Inter] text-sm transition-all duration-200 ${
          isActive
            ? "bg-[#F3E8FF]/80 font-medium text-[#7C3AED]"
            : "text-[#6B6478] hover:bg-white/40 hover:text-[#49344C]"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <Icon
            size={18}
            strokeWidth={isActive ? 2.2 : 2}
            className={
              isActive
                ? "text-[#8B5CF6]"
                : "text-[#9CA3AF]"
            }
          />

          {item.label}
        </>
      )}
    </NavLink>
  );
})}
      </nav>

        {/* Bottom Section  */}
        <div className="shrink-0">
      {/* Placement Goal card */}
      <div className="mx-1 mb-2 rounded-xl bg-[#F3E8FF]/70 p-1 backdrop-blur-sm">
        <div className="flex items-center gap-1.5">
          <Target size={13} strokeWidth={2.5} className="text-[#8B5CF6]" />
          <p className="font-[Manrope] text-sm font-bold text-[#7C3AED]">
            Placement Goal
          </p>
        </div>

        <p className="mt-1 font-[Manrope] text-[10px] font-bold text-[#49344C]">
          Software Engineer
        </p>
        <p className="font-[Inter] text-[8px] text-[#8B7E99]">
          Target Companies
        </p>

        <div className="mt-1 flex items-center gap-1">
          {targetCompanies.map((company) => (
            <img
              key={company.name}
              src={company.logo}
              alt={company.name}
              className="h-4 w-4 rounded-full object-contain ring-1 ring-white"
            />
          ))}
          {targetCompanies.length > 3 && (
            <span className="flex h-3 w-3 items-center justify-center rounded-full bg-white text-[9px] font-semibold text-[#6B6478] ring-1 ring-white">
              +{targetCompanies.length - 3}
            </span>
          )}
        </div>
        <Link to="/settings">
        <button
          type="button"
          className="mt-2 flex w-full items-center justify-center gap-1 rounded-lg bg-[#8B5CF6] py-1.5 font-[Manrope] text-[11px] font-semibold text-white transition hover:bg-[#7C3AED]"
        >
          Edit Goal
          <ChevronRight size={14} strokeWidth={2.5} />
        </button></Link>
      </div>

      {/* Support */}
      <div className="border-t border-white/30 px-2 py-2">
        <button
          type="button"
          className="flex items-center gap-2 font-[Inter] text-xs text-[#6B6478] transition hover:text-[#8B5CF6]"
        >
          <Headphones size={14} />
          Need help? Contact Support
        </button>
      </div>
      </div>
    </aside>
  );
}