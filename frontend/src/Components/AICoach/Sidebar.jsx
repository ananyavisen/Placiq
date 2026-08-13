import React from "react";
import {
  House,
  Map,
  ClipboardCheck,
  Mic,
  Code2,
  FileText,
  BriefcaseBusiness,
  BookOpen,
  Sparkles,
  Trophy,
  Headphones,
} from "lucide-react";

import logo from "../../assets/logo.png";

const menuItems = [
  {
    name: "Dashboard",
    icon: House,
  },
  {
    name: "Roadmap",
    icon: Map,
  },
  {
    name: "Assessments",
    icon: ClipboardCheck,
  },
  {
    name: "Mock Interviews",
    icon: Mic,
  },
  {
    name: "Coding Practice",
    icon: Code2,
  },
  {
    name: "Resume Builder",
    icon: FileText,
  },
  {
    name: "Job Tracker",
    icon: BriefcaseBusiness,
  },
  {
    name: "Resources",
    icon: BookOpen,
  },
  {
    name: "AI Coach",
    icon: Sparkles,
    active: true,
  },
  {
    name: "Achievements",
    icon: Trophy,
  },
];

const Sidebar = () => {
  return (
    <aside className="ai-sidebar">

      {/* Logo */}
      <div className="ai-brand">
  <img
    src={logo}
    alt="Placiq"
    className="ai-brand-logo-image"
  />

  <span>Placiq</span>

</div>

      {/* Navigation */}
      <nav className="ai-navigation">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className={`ai-nav-item ${
                item.active ? "ai-nav-active" : ""
              }`}
            >
              <Icon size={20} strokeWidth={1.8} />

              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="ai-sidebar-bottom">

        {/* Upgrade */}
        <div className="ai-upgrade-card">
          <div className="ai-upgrade-title">
            Upgrade to Pro
            <Sparkles size={14} />
          </div>

          <p>
            Unlock advanced features and
            <br />
            AI powered insights.
          </p>

          <button className="ai-upgrade-button">
            Upgrade Now
          </button>
        </div>

        {/* Support */}
        <div className="ai-support">
          <Headphones size={22} />

          <div>
            <strong>Need help?</strong>
            <span>Contact Support</span>
          </div>
        </div>

      </div>
    </aside>
  );
};

export default Sidebar;