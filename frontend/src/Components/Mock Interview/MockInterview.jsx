import "./MockInterview.css";
import React from "react";
import {
  PenLine,
  UsersRound,
  CheckCircle2,
  Clock3,
  XCircle,
} from "lucide-react";

import RoundHeader from "./RoundHeader";
import AttemptsCard from "./AttemptsCard";
import Insights from "./Insights";

const hrAttempts = [
  {
    icon: CheckCircle2,
    tone: "success",
    title: "HR Interview – DSA Profile",
    date: "May 24, 2024",
    time: "10:30 AM",
    score: "78%",
  },
  {
    icon: Clock3,
    tone: "warning",
    title: "HR Interview – Operating System Profile",
    date: "May 20, 2024",
    time: "02:15 PM",
    score: "65%",
  },
  {
    icon: XCircle,
    tone: "danger",
    title: "HR Interview – General",
    date: "May 18, 2024",
    time: "11:00 AM",
    score: "52%",
  },
];

const writtenTests = [
  {
    icon: CheckCircle2,
    tone: "success",
    title: "DSA – Arrays & Strings",
    date: "May 23, 2024",
    time: "09:30 AM",
    score: "82%",
  },
  {
    icon: Clock3,
    tone: "warning",
    title: "Operating System – Processes & Scheduling",
    date: "May 21, 2024",
    time: "01:00 PM",
    score: "70%",
  },
  {
    icon: XCircle,
    tone: "danger",
    title: "DBMS – SQL & Normalization",
    date: "May 19, 2024",
    time: "03:45 PM",
    score: "55%",
  },
];

const hrData = {
  type: "HR Round",
  icon: UsersRound,
  description:
    "Prepare for HR interviews with common questions on your background, skills, and career goals.",
  duration: "20-25 mins",
  questions: "10-15",
  buttonText: "Start HR Mock Interview",
  attemptsTitle: "Your Recent HR Interviews",
  attempts: hrAttempts,
  viewText: "View All HR Attempts",
};

const writtenData = {
  type: "Written Round",
  icon: PenLine,
  description:
    "Test your subject knowledge with timed tests and technical assessments.",
  duration: "60-90 mins",
  questions: "15-25",
  buttonText: "Start Written Test",
  attemptsTitle: "Your Recent Written Tests",
  attempts: writtenTests,
  viewText: "View All Written Tests",
};

function RoundCard({ data }) {
  return (
    <section className="mi-main-card mi-round-card">
      <RoundHeader {...data} />

      <div className="mi-section-divider"></div>

      <AttemptsCard
        title={data.attemptsTitle}
        attempts={data.attempts}
        viewText={data.viewText}
      />
    </section>
  );
}

export default function MockInterview() {
  return (
    <div className="mock-interview-page">

      {/* Search Bar */}
      <div className="mi-search-bar">
        <span className="mi-search-icon">⌕</span>

        <input
          type="text"
          placeholder="Search mock interviews..."
        />
      </div>

      {/* Page Heading */}
      <div className="mi-page-heading">
        <h1>Mock Interviews</h1>

        <p>
          Practice interviews. Get real feedback.
          Improve with every attempt.
        </p>
      </div>

      <div className="mi-page-grid">

        {/* Left Content */}
        <section className="mi-content">

          {/* Tabs */}
          <div className="mi-tabs">

            <button className="mi-tab active">
              <UsersRound size={18} />
              HR Round
            </button>

            <button className="mi-tab">
              <PenLine size={18} />
              Written Round
            </button>

          </div>

          {/* HR Round */}
          <RoundCard data={hrData} />

          {/* Written Round */}
          <RoundCard data={writtenData} />

        </section>

        {/* Right Side */}
        <Insights />

      </div>
    </div>
  );
}