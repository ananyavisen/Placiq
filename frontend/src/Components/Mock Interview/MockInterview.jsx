import "./MockInterview.css";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
import ProfileHeader from "../Common/ProfileHeader";

import { getInterviewSessions } from "../../api/mockInterview";


function RoundCard({ data }) {
  const navigate = useNavigate();

  const handleStartInterview = () => {
    navigate("/mock-interview/voice", {
      state: {
        interviewType:
          data.type === "HR Round"
            ? "hr"
            : "technical",
      },
    });
  };

  return (
    <section className="mi-main-card mi-round-card">

      <RoundHeader
        {...data}
        onStart={handleStartInterview}
      />

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

  // -----------------------------------------
  // Sessions from backend
  // -----------------------------------------

  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);


  // -----------------------------------------
  // Fetch sessions
  // -----------------------------------------

  useEffect(() => {

    const loadSessions = async () => {

      try {

        const data = await getInterviewSessions();

        console.log("Interview sessions:", data);

        setSessions(data);

      } catch (error) {

        console.error(
          "Failed to load interview sessions:",
          error
        );

      } finally {

        setLoading(false);

      }

    };

    loadSessions();

  }, []);


  // -----------------------------------------
  // HR attempts
  // -----------------------------------------

  const hrAttempts = sessions

    .filter(
      (session) =>
        session.interview_type === "hr"
    )

    .slice(0, 3)

    .map((session) => ({
      id: session.id,
    
      icon:
        session.status === "completed"
          ? CheckCircle2
          : session.status === "active"
          ? Clock3
          : XCircle,
    
      tone:
        session.status === "completed"
          ? "success"
          : session.status === "active"
          ? "warning"
          : "danger",
    
      title: "HR Mock Interview",
    
      date: new Date(
        session.started_at
      ).toLocaleDateString(),
    
      time: new Date(
        session.started_at
      ).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    
      score:
        session.overall_score !== null &&
        session.overall_score !== undefined
          ? `${session.overall_score}%`
          : "--",
    }));

  // -----------------------------------------
  // Technical attempts
  // -----------------------------------------

  const technicalAttempts = sessions
  .filter(
    (session) =>
      session.interview_type === "technical"
  )
  .slice(0, 3)
  .map((session) => ({
    id: session.id, // <-- ADD THIS

    icon:
      session.status === "completed"
        ? CheckCircle2
        : session.status === "active"
        ? Clock3
        : XCircle,

    tone:
      session.status === "completed"
        ? "success"
        : session.status === "active"
        ? "warning"
        : "danger",

    title: "Technical Mock Interview",

    date: new Date(
      session.started_at
    ).toLocaleDateString(),

    time: new Date(
      session.started_at
    ).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),

    score:
      session.overall_score !== null &&
      session.overall_score !== undefined
        ? `${session.overall_score}%`
        : "--",
  }));

  // -----------------------------------------
  // Round data
  // -----------------------------------------

  const hrData = {

    type: "HR Round",

    icon: UsersRound,

    description:
      "Prepare for HR interviews with common questions on your background, skills, and career goals.",

    duration: "20-25 mins",

    questions: "10-15",

    buttonText:
      "Start HR Mock Interview",

    attemptsTitle:
      "Your Recent HR Interviews",

    attempts: hrAttempts,

    viewText:
      "View All HR Attempts",

  };


  const technicalData = {

    type: "Technical Round",

    icon: PenLine,

    description:
      "Test your subject knowledge with timed tests and technical assessments.",

    duration: "60-90 mins",

    questions: "15-25",

    buttonText:
      "Start Technical Round",

    attemptsTitle:
      "Your Recent Technical Round results",

    attempts: technicalAttempts,

    viewText:
      "View All Technical Rounds",

  };


  // -----------------------------------------
  // Page
  // -----------------------------------------

  const latestCompletedSession = sessions
  .filter((session) => session.status === "completed")
  .sort(
    (a, b) =>
      new Date(b.started_at) - new Date(a.started_at)
  )[0];
  return (

    <div className="mock-interview-page">

      {/* Top Bar */}

      <div className="mi-topbar">

        <div className="mi-search-bar">

          <span className="mi-search-icon">
            ⌕
          </span>

          <input
            type="text"
            placeholder="Search mock interviews..."
          />

        </div>

        <ProfileHeader />

      </div>


      {/* Page Heading */}

      <div className="mi-page-heading">

        <h1>
          Mock Interviews
        </h1>

        <p>
          Practice interviews. Get real feedback.
          Improve with every attempt.
        </p>

      </div>


      <div className="mi-page-grid">

        {/* Left Content */}

        <section className="mi-content">

          <div className="mi-tabs">

            <button className="mi-tab active">

              <UsersRound size={18} />

              HR Round

            </button>


            <button className="mi-tab">

              <PenLine size={18} />

              Technical Round

            </button>

          </div>


          {/* Loading state */}

          {loading ? (

            <div className="mi-main-card">
              Loading your interviews...
            </div>

          ) : (

            <>

              <RoundCard
                data={hrData}
              />

              <RoundCard
                data={technicalData}
              />

            </>

          )}

        </section>


        {/* Right Side */}

        <aside className="mi-sidebar">
  <Insights
    sessionId={latestCompletedSession?.id}
  />
</aside>

      </div>

    </div>

  );
}