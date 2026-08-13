import React from "react";
import {
  Search,
  Bell,
  ChevronDown,
} from "lucide-react";

const TopBar = () => {
  return (
    <header className="ai-topbar">

      {/* Search */}
      <div className="ai-search">
        <Search size={19} />

        <input
          type="text"
          placeholder="Ask anything to your AI coach..."
        />
      </div>

      {/* Right side */}
      <div className="ai-topbar-right">

        {/* Notification */}
        <button className="ai-notification">
          <Bell size={21} />

          <span className="ai-notification-dot" />
        </button>

        {/* Profile */}
        <button className="ai-profile">
          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="Profile"
          />

          <span>Anek Sharma</span>

          <ChevronDown size={17} />
        </button>

      </div>
    </header>
  );
};

export default TopBar;