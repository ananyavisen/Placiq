
import logo from "../../assets/logo.png";
import bg from "../../assets/bg.png";
import React from "react";
import ChatPanel from "./ChatPanel";
import RightPanel from "./RightPanel";
import "./AICoach.css";
import ProfileHeader from "../Common/ProfileHeader";

const AICoach = () => {
  return (
    

      <main className="ai-coach-main">
         <div className="ai-topbar">
          <ProfileHeader />
        </div>

        <div className="ai-coach-content">
          <div className="ai-coach-heading">
            <h1>
              AI Coach <span>✦</span>
            </h1>

            <p>
              Your personal AI mentor to guide, motivate and help you grow.
            </p>
          </div>

          <div className="ai-coach-grid">
            <ChatPanel />
            <RightPanel />
          </div>
        </div>
      </main>
  
  );
};

export default AICoach;