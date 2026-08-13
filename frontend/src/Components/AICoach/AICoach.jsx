
import logo from "../../assets/logo.png";
import bg from "../../assets/bg.png";
import React from "react";
import Sidebar from "../Common/Sidebar";
import TopBar from "./TopBar";
import ChatPanel from "./ChatPanel";
import RightPanel from "./RightPanel";
import "./AICoach.css";

const AICoach = () => {
  return (
    <div
  className="ai-coach-page"
  style={{ backgroundImage: `url(${bg})` }}
>
      <Sidebar />

      <main className="ai-coach-main">
        <TopBar />

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
    </div>
  );
};

export default AICoach;