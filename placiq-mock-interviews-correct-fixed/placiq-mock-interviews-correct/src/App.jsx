// import React from "react";
// import { useState } from "react";
// import {
//   Bell,
//   BookOpen,
//   BriefcaseBusiness,
//   CheckCircle2,
//   ChevronDown,
//   ChevronRight,
//   Clock3,
//   Code2,
//   FileText,
//   GraduationCap,
//   LayoutDashboard,
//   Lightbulb,
//   Menu,
//   Mic2,
//   PenLine,
//   Search,
//   Settings,
//   ShieldCheck,
//   Sparkles,
//   Star,
//   Target,
//   Trophy,
//   UsersRound,
//   X,
//   XCircle,
// } from "lucide-react";
// import bg from "./assets/bg.png";
// import logo from "./assets/logo.png";
// const navItems = [
//   [LayoutDashboard, "Dashboard"],
//   [BookOpen, "Roadmap"],
//   [CheckCircle2, "Assessments"],
//   [Mic2, "Mock Interviews"],
//   [Code2, "Coding Practice"],
//   [FileText, "Resume Builder"],
//   [BriefcaseBusiness, "Job Tracker"],
//   [BookOpen, "Resources"],
//   [Sparkles, "AI Coach"],
//   [Trophy, "Achievements"],
// ];

// const hrAttempts = [
//   { icon: CheckCircle2, tone: "success", title: "HR Interview – DSA Profile", date: "May 24, 2024", time: "10:30 AM", score: "78%" },
//   { icon: Clock3, tone: "warning", title: "HR Interview – Operating System Profile", date: "May 20, 2024", time: "02:15 PM", score: "65%" },
//   { icon: XCircle, tone: "danger", title: "HR Interview – General", date: "May 18, 2024", time: "11:00 AM", score: "52%" },
// ];

// const writtenTests = [
//   { icon: CheckCircle2, tone: "success", title: "DSA – Arrays & Strings", date: "May 23, 2024", time: "09:30 AM", score: "82%" },
//   { icon: Clock3, tone: "warning", title: "Operating System – Processes & Scheduling", date: "May 21, 2024", time: "01:00 PM", score: "70%" },
//   { icon: XCircle, tone: "danger", title: "DBMS – SQL & Normalization", date: "May 19, 2024", time: "03:45 PM", score: "55%" },
// ];

// function Brand() {
//   return (
//    <div className="flex items-center gap-3 px-5 pt-5 pb-4">
//   <img
//     src={logo}
//     alt="Placiq Logo"
//     className="w-[42px] h-[42px] object-contain"
//   />

//   <div>
//     <h1 className="text-[24px] font-bold text-[#17213D] leading-none">
//       Placiq
//     </h1>
//     <p className="text-[11px] text-gray-500 mt-1 whitespace-nowrap">
//       Smart Prep. Right Match.
//     </p>
//   </div>
// </div>
//   );
// }

// function Sidebar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <button className="mobile-menu" onClick={() => setOpen(true)} aria-label="Open menu">
//         <Menu size={20} />
//       </button>
//       <aside className={`sidebar ${open ? "open" : ""}`}>
//         <div className="sidebar-top">
//           <Brand />
//           <button className="mobile-close" onClick={() => setOpen(false)}><X size={20} /></button>
//         </div>

//         <nav className="nav">
//           {navItems.map(([Icon, label]) => (
//             <button
//               key={label}
//               className={`nav-item ${label === "Mock Interviews" ? "active" : ""}`}
//               onClick={() => setOpen(false)}
//             >
//               <Icon size={18} strokeWidth={1.9} />
//               <span>{label}</span>
//             </button>
//           ))}
//         </nav>

//         <div className="sidebar-bottom">
//           <div className="upgrade-card">
//             <div className="upgrade-title">Upgrade to Pro <Sparkles size={14} /></div>
//             <p>Unlock advanced features and AI powered insights.</p>
//             <button>Upgrade Now</button>
//           </div>
//           <div className="help">
//             <span className="help-icon">◌</span>
//             <div>
//               <strong>Need help?</strong>
//               <span>Contact Support</span>
//             </div>
//           </div>
//         </div>
//       </aside>
//       {open && <div className="overlay" onClick={() => setOpen(false)} />}
//     </>
//   );
// }

// function Topbar() {
//   return (
//     <header className="topbar">
//       <div className="searchbox">
//         <Search size={17} />
//         <input placeholder="Search mock interviews..." />
//       </div>
//       <div className="top-actions">
//         <button className="icon-button"><Bell size={19} /></button>
//         <div className="profile">
//           <div className="avatar">U1</div>
//           <div className="profile-copy">
//             <strong>User1</strong>
//             <span>Frontend Developer</span>
//           </div>
//           <Settings size={17} className="settings" />
//           <ChevronDown size={16} />
//         </div>
//       </div>
//     </header>
//   );
// }

// function ScoreRing() {
//   return (
//     <div className="ring-wrap">
//       <div className="score-ring">
//         <div className="ring-inner">
//           <strong>72%</strong>
//           <span>Overall Average Score</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// function AttemptRow({ item }) {
//   const Icon = item.icon;
//   return (
//     <div className="attempt-row">
//       <div className={`status-icon ${item.tone}`}><Icon size={14} /></div>
//       <div className="attempt-copy">
//         <strong>{item.title}</strong>
//         <span>{item.date} <b>•</b> {item.time}</span>
//       </div>
//       <div className="attempt-score">
//         <span>Score</span>
//         <strong className={item.tone}>{item.score}</strong>
//       </div>
//       <button className="report-button">View Report</button>
//     </div>
//   );
// }

// function RoundHeader({ type, icon, description, duration, questions, buttonText }) {
//   const Icon = icon;
//   return (
//     <div className="round-header">
//       <div className="round-intro">
//         <div className="round-icon"><Icon size={21} /></div>
//         <div>
//           <h3>{type}</h3>
//           <p>{description}</p>
//         </div>
//       </div>
//       <div className="round-meta">
//         <div className="meta-item">
//           <Clock3 size={17} />
//           <div><span>Duration</span><strong>{duration}</strong></div>
//         </div>
//         <div className="meta-item">
//           <Target size={17} />
//           <div><span>Questions</span><strong>{questions}</strong></div>
//         </div>
//         <button className="primary-button">{buttonText}</button>
//       </div>
//     </div>
//   );
// }

// function Insights() {
//   return (
//     <div className="right-column">
//       <section className="side-card summary-card">
//         <div className="side-card-title">
//           <span><Sparkles size={16} /> Overall Summary</span>
//         </div>
//         <ScoreRing />
//         <div className="summary-lines">
//           <div><span className="dot purple"></span><span>HR Round Average</span><strong>68%</strong></div>
//           <div><span className="dot orange"></span><span>Written Round Average</span><strong>74%</strong></div>
//           <div><span className="dot green"></span><span>Tests Taken</span><strong>12</strong></div>
//           <div><span className="dot red"></span><span>Total Time Practiced</span><strong>15h 30m</strong></div>
//         </div>
//       </section>

//       <section className="side-card insights-card">
//         <h3>Improve With Insights</h3>
//         <div className="insight-box strength">
//           <div className="insight-icon"><Target size={18} /></div>
//           <div><strong>Strengths</strong><p>You perform well in Communication and Problem Solving.</p></div>
//         </div>
//         <div className="insight-box improve">
//           <div className="insight-icon"><Lightbulb size={18} /></div>
//           <div><strong>Areas to Improve</strong><p>Work on System Design and OS concepts in depth.</p></div>
//         </div>
//         <div className="insight-box suggestion">
//           <div className="insight-icon"><FileText size={18} /></div>
//           <div><strong>Suggestions</strong><p>Practice more timed tests and review fundamentals regularly.</p></div>
//         </div>
//         <button className="analysis-button">View Detailed Analysis <ChevronRight size={16} /></button>
//       </section>
//     </div>
//   );
// }

// function App() {
//   const [tab, setTab] = useState("HR Round");

//   return (
//     <div className="app-shell" style={{ backgroundImage: `url(${bg})` }}>
//       <Sidebar />

//       <main className="main">
//         <Topbar />

//         <div className="page-grid">
//           <section className="content">
//             <div className="page-heading">
//               <h1>Mock Interviews</h1>
//               <p>Practice interviews. Get real feedback. Improve with every attempt.</p>
//             </div>

//             <div className="tabs">
//               <button className={tab === "HR Round" ? "tab active" : "tab"} onClick={() => setTab("HR Round")}>
//                 <UsersRound size={18} /> HR Round
//               </button>
//               <button className={tab === "Written Round" ? "tab active" : "tab"} onClick={() => setTab("Written Round")}>
//                 <PenLine size={18} /> Written Round
//               </button>
//             </div>

//             {tab === "HR Round" ? (
//               <>
//                 <section className="main-card round-card">
//                   <RoundHeader
//                     type="HR Round"
//                     icon={UsersRound}
//                     description={<>Prepare for HR interviews with common questions<br className="desktop-only" /> on your background, skills, and career goals.</>}
//                     duration="20-25 mins"
//                     questions="10-15"
//                     buttonText="Start HR Mock Interview"
//                   />
//                   <div className="section-divider"></div>
//                   <div className="attempts">
//                     <h4>Your Recent HR Interviews</h4>
//                     {hrAttempts.map((item) => <AttemptRow key={item.title} item={item} />)}
//                     <button className="view-all">View All HR Attempts <ChevronRight size={15} /></button>
//                   </div>
//                 </section>

//                 <section className="main-card round-card written-preview">
//                   <RoundHeader
//                     type="Written Round"
//                     icon={PenLine}
//                     description={<>Test your subject knowledge with timed tests<br className="desktop-only" /> and technical assessments.</>}
//                     duration="60-90 mins"
//                     questions="15-25"
//                     buttonText="Start Written Test"
//                   />
//                   <div className="section-divider"></div>
//                   <div className="attempts">
//                     <h4>Your Recent Written Tests</h4>
//                     {writtenTests.map((item) => <AttemptRow key={item.title} item={item} />)}
//                     <button className="view-all">View All Written Tests <ChevronRight size={15} /></button>
//                   </div>
//                 </section>
//               </>
//             ) : (
//               <>
//                 <section className="main-card round-card">
//                   <RoundHeader
//                     type="Written Round"
//                     icon={PenLine}
//                     description={<>Test your subject knowledge with timed tests<br className="desktop-only" /> and technical assessments.</>}
//                     duration="60-90 mins"
//                     questions="15-25"
//                     buttonText="Start Written Test"
//                   />
//                   <div className="section-divider"></div>
//                   <div className="attempts">
//                     <h4>Your Recent Written Tests</h4>
//                     {writtenTests.map((item) => <AttemptRow key={item.title} item={item} />)}
//                     <button className="view-all">View All Written Tests <ChevronRight size={15} /></button>
//                   </div>
//                 </section>
//                 <section className="main-card round-card written-preview">
//                   <RoundHeader
//                     type="HR Round"
//                     icon={UsersRound}
//                     description={<>Prepare for HR interviews with common questions<br className="desktop-only" /> on your background, skills, and career goals.</>}
//                     duration="20-25 mins"
//                     questions="10-15"
//                     buttonText="Start HR Mock Interview"
//                   />
//                   <div className="section-divider"></div>
//                   <div className="attempts">
//                     <h4>Your Recent HR Interviews</h4>
//                     {hrAttempts.map((item) => <AttemptRow key={item.title} item={item} />)}
//                     <button className="view-all">View All HR Attempts <ChevronRight size={15} /></button>
//                   </div>
//                 </section>
//               </>
//             )}
//           </section>

//           <Insights />
//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";

import {
  Bell,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  Code2,
  FileText,
  LayoutDashboard,
  Lightbulb,
  Menu,
  Mic2,
  PenLine,
  Search,
  Settings,
  Sparkles,
  Target,
  Trophy,
  UsersRound,
  X,
  XCircle,
} from "lucide-react";

import bg from "./assets/bg.png";
import logo from "./assets/logo.png";

/* =========================
   NAVIGATION
========================= */

const navItems = [
  [LayoutDashboard, "Dashboard"],
  [BookOpen, "Roadmap"],
  [CheckCircle2, "Assessments"],
  [Mic2, "Mock Interviews"],
  [Code2, "Coding Practice"],
  [FileText, "Resume Builder"],
  [BriefcaseBusiness, "Job Tracker"],
  [BookOpen, "Resources"],
  [Sparkles, "AI Coach"],
  [Trophy, "Achievements"],
];

/* =========================
   DATA
========================= */

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

/* =========================
   BRAND
========================= */

function Brand() {
  return (
    <div className="brand">
      <img
        src={logo}
        alt="Placiq Logo"
        className="brand-logo"
      />

      <div className="brand-text">
        <h1>Placiq</h1>
        <p>Smart Prep. Right Match.</p>
      </div>
    </div>
  );
}

/* =========================
   SIDEBAR
========================= */

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="mobile-menu"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <Menu size={22} />
      </button>

     <aside className={`sidebar ${open ? "open" : ""}`}>


    <Brand />

    <button
      className="mobile-close"
      onClick={() => setOpen(false)}
    >
      <X size={20} />
    </button>

    <nav className="nav">
      {navItems.map(([Icon, label]) => (
        <button
          key={label}
          className={`nav-item ${
            label === "Mock Interviews" ? "active" : ""
          }`}
          onClick={() => setOpen(false)}
        >
          <Icon size={18} strokeWidth={1.9} />
          <span>{label}</span>
        </button>
      ))}
    </nav>

    <div className="sidebar-bottom">
      <div className="upgrade-card">
        <div className="upgrade-title">
          <span>Upgrade to Pro</span>
          <Sparkles size={14} />
        </div>

        <p>
          Unlock advanced features and AI powered insights.
        </p>

        <button>Upgrade Now</button>
      </div>

      <div className="help">
        <div className="help-icon">◌</div>

        <div>
          <strong>Need help?</strong>
          <span>Contact Support</span>
        </div>
      </div>
    </div>

  {/* </div> */}
</aside>

      {/* Mobile overlay */}
      {open && (
        <div
          className="overlay"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}

/* =========================
   TOPBAR
========================= */

function Topbar() {
  return (
    <header className="topbar">
      <div className="search-box">
        <Search size={18} />
        <input
          type="text"
          placeholder="Search mock interviews..."
        />
      </div>

      <div className="topbar-right">
        <button className="icon-button">
          <Bell size={19} />
          <span className="notification-dot"></span>
        </button>

        <div className="profile">
          <div className="avatar">U1</div>

          <div className="profile-info">
            <strong>User1</strong>
            <span>Frontend Developer</span>
          </div>

          <ChevronDown size={16} />
        </div>

        <button className="settings-button">
          <Settings size={18} />
        </button>
      </div>
    </header>
  );
}

/* =========================
   SCORE RING
========================= */

function ScoreRing() {
  return (
    <div className="score-ring">
      <div className="score-inner">
        <strong>72%</strong>
        <span>Overall Average Score</span>
      </div>
    </div>
  );
}

/* =========================
   ATTEMPT ROW
========================= */

function AttemptRow({ item }) {
  const Icon = item.icon;

  return (
    <div className="attempt-row">
      <div className={`status-icon ${item.tone}`}>
        <Icon size={15} />
      </div>

      <div className="attempt-info">
        <strong>{item.title}</strong>

        <span>
          {item.date} <b>•</b> {item.time}
        </span>
      </div>

      <div className="attempt-score">
        <small>Score</small>
        <strong className={item.tone}>{item.score}</strong>
      </div>

      <button className="report-button">
        View Report
      </button>
    </div>
  );
}

/* =========================
   ROUND HEADER
========================= */

function RoundHeader({
  type,
  icon,
  description,
  duration,
  questions,
  buttonText,
}) {
  const Icon = icon;

  return (
    <div className="round-header">
      <div className="round-icon">
        <Icon size={24} />
      </div>

      <div className="round-description">
        <h3>{type}</h3>
        <p>{description}</p>
      </div>

      <div className="round-details">
        <div className="detail-item">
          <Clock3 size={18} />

          <div>
            <span>Duration</span>
            <strong>{duration}</strong>
          </div>
        </div>

        <div className="detail-item">
          <Target size={18} />

          <div>
            <span>Questions</span>
            <strong>{questions}</strong>
          </div>
        </div>
      </div>

      <button className="start-button">
        {buttonText}
      </button>
    </div>
  );
}

/* =========================
   SUMMARY CARD
========================= */

function SummaryCard() {
  return (
    <section className="side-card summary-card">
      <div className="side-card-title">
        <div>
          <h3>Overall Summary</h3>
        </div>
      </div>

      <div className="score-section">
        <ScoreRing />
      </div>

      <div className="summary-list">
        <div>
          <span>
            <i className="summary-dot purple"></i>
            HR Round Average
          </span>
          <strong>68%</strong>
        </div>

        <div>
          <span>
            <i className="summary-dot orange"></i>
            Written Round Average
          </span>
          <strong>74%</strong>
        </div>

        <div>
          <span>
            <i className="summary-dot green"></i>
            Tests Taken
          </span>
          <strong>12</strong>
        </div>

        <div>
          <span>
            <i className="summary-dot red"></i>
            Total Time Practiced
          </span>
          <strong>15h 30m</strong>
        </div>
      </div>
    </section>
  );
}

/* =========================
   INSIGHTS
========================= */

function Insights() {
  return (
    <div className="right-column">
      <SummaryCard />

      <section className="side-card insights-card">
        <h3>Improve With Insights</h3>

        <div className="insight-box strength">
          <div className="insight-icon">
            <Target size={18} />
          </div>

          <div>
            <strong>Strengths</strong>

            <p>
              You perform well in Communication
              and Problem Solving.
            </p>
          </div>
        </div>

        <div className="insight-box improve">
          <div className="insight-icon">
            <Lightbulb size={18} />
          </div>

          <div>
            <strong>Areas to Improve</strong>

            <p>
              Work on System Design and OS concepts
              in depth.
            </p>
          </div>
        </div>

        <div className="insight-box suggestion">
          <div className="insight-icon">
            <FileText size={18} />
          </div>

          <div>
            <strong>Suggestions</strong>

            <p>
              Practice more timed tests and review
              fundamentals regularly.
            </p>
          </div>
        </div>

        <button className="analysis-button">
          View Detailed Analysis
          <ChevronRight size={16} />
        </button>
      </section>
    </div>
  );
}

/* =========================
   ATTEMPTS CARD
========================= */

function AttemptsCard({
  title,
  attempts,
  viewText,
}) {
  return (
    <div className="attempts">
      <h4>{title}</h4>

      {attempts.map((item) => (
        <AttemptRow
          key={item.title}
          item={item}
        />
      ))}

      <button className="view-all">
        {viewText}
        <ChevronRight size={15} />
      </button>
    </div>
  );
}

/* =========================
   APP
========================= */

function App() {
  const [tab, setTab] = useState("HR Round");

  return (
    <div
      className="app-shell"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <main className="main">
        <Topbar />

        <div className="page-grid">
          {/* LEFT CONTENT */}
          <section className="content">
            <div className="page-heading">
              <h1>Mock Interviews</h1>

              <p>
                Practice interviews. Get real feedback.
                Improve with every attempt.
              </p>
            </div>

            {/* TABS */}
            <div className="tabs">
              <button
                className={
                  tab === "HR Round"
                    ? "tab active"
                    : "tab"
                }
                onClick={() =>
                  setTab("HR Round")
                }
              >
                <UsersRound size={18} />
                HR Round
              </button>

              <button
                className={
                  tab === "Written Round"
                    ? "tab active"
                    : "tab"
                }
                onClick={() =>
                  setTab("Written Round")
                }
              >
                <PenLine size={18} />
                Written Round
              </button>
            </div>

            {/* HR ROUND */}
            {tab === "HR Round" && (
              <>
                <section className="main-card round-card">
                  <RoundHeader
                    type="HR Round"
                    icon={UsersRound}
                    description="Prepare for HR interviews with common questions on your background, skills, and career goals."
                    duration="20-25 mins"
                    questions="10-15"
                    buttonText="Start HR Mock Interview"
                  />

                  <div className="section-divider"></div>

                  <AttemptsCard
                    title="Your Recent HR Interviews"
                    attempts={hrAttempts}
                    viewText="View All HR Attempts"
                  />
                </section>

                <section className="main-card round-card">
                  <RoundHeader
                    type="Written Round"
                    icon={PenLine}
                    description="Test your subject knowledge with timed tests and technical assessments."
                    duration="60-90 mins"
                    questions="15-25"
                    buttonText="Start Written Test"
                  />

                  <div className="section-divider"></div>

                  <AttemptsCard
                    title="Your Recent Written Tests"
                    attempts={writtenTests}
                    viewText="View All Written Tests"
                  />
                </section>
              </>
            )}

            {/* WRITTEN ROUND */}
            {tab === "Written Round" && (
              <>
                <section className="main-card round-card">
                  <RoundHeader
                    type="Written Round"
                    icon={PenLine}
                    description="Test your subject knowledge with timed tests and technical assessments."
                    duration="60-90 mins"
                    questions="15-25"
                    buttonText="Start Written Test"
                  />

                  <div className="section-divider"></div>

                  <AttemptsCard
                    title="Your Recent Written Tests"
                    attempts={writtenTests}
                    viewText="View All Written Tests"
                  />
                </section>

                <section className="main-card round-card">
                  <RoundHeader
                    type="HR Round"
                    icon={UsersRound}
                    description="Prepare for HR interviews with common questions on your background, skills, and career goals."
                    duration="20-25 mins"
                    questions="10-15"
                    buttonText="Start HR Mock Interview"
                  />

                  <div className="section-divider"></div>

                  <AttemptsCard
                    title="Your Recent HR Interviews"
                    attempts={hrAttempts}
                    viewText="View All HR Attempts"
                  />
                </section>
              </>
            )}
          </section>

          {/* RIGHT SIDE */}
          <Insights />
        </div>
      </main>
    </div>
  );
}

export default App;