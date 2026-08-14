import React, { useState } from "react";
import {
  Award,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  ChevronRight,
  Code2,
  FileText,
  GraduationCap,
  Headphones,
  Home,
  Lock,
  Menu,
  MessageSquare,
  Mic2,
  PenLine,
  Search,
  Settings,
  Sparkles,
  Target,
  Trophy,
  UsersRound,
  X
} from "lucide-react";
import logo from "./assets/logo.png";
import bg from "./assets/bg.png";

const navItems = [
  [Home, "Dashboard"],
  [BookOpen, "Roadmap"],
  [GraduationCap, "Assessments"],
  [Mic2, "Mock Interviews"],
  [Code2, "Coding Practice"],
  [FileText, "Resume Builder"],
  [BriefcaseBusiness, "Job Tracker"],
  [BookOpen, "Resources"],
  [Sparkles, "AI Coach"],
  [Award, "Achievements"]
];

const steps = [
  {
    number: "01",
    icon: Sparkles,
    title: "Build Your Foundation",
    description: "Learn the basics and build a strong programming foundation.",
    tags: ["Programming Basics", "OOP Concepts", "Git & GitHub"],
    status: "Completed",
    tone: "green",
    done: true
  },
  {
    number: "02",
    icon: Code2,
    title: "Master DSA",
    description: "Master problem solving and essential data structures & algorithms.",
    tags: ["Arrays", "Strings", "Linked List", "Trees", "Graphs", "Dynamic Programming"],
    status: "In Progress",
    tone: "purple",
    progress: 65
  },
  {
    number: "03",
    icon: BookOpen,
    title: "Strengthen Core CS",
    description: "Learn core computer science subjects for interviews.",
    tags: ["DBMS", "Operating Systems", "Computer Networks"],
    status: "Locked",
    tone: "blue"
  },
  {
    number: "04",
    icon: Code2,
    title: "Build Real Projects",
    description: "Build real world projects and improve your development skills.",
    tags: ["Frontend", "Backend", "Full Stack"],
    status: "Locked",
    tone: "orange"
  },
  {
    number: "05",
    icon: UsersRound,
    title: "Prepare for Interviews",
    description: "Prepare for technical, aptitude and HR interviews.",
    tags: ["Aptitude", "Technical", "HR Interview", "Mock Interviews"],
    status: "Locked",
    tone: "pink"
  },
  {
    number: "06",
    icon: Trophy,
    title: "Get Placement Ready",
    description: "Polish your profile and get ready to land your dream offer.",
    tags: ["Resume", "Job Applications", "Company Preparation", "Placement Strategy"],
    status: "Locked",
    tone: "violet"
  }
];

function Brand() {
  return (
    <div className="brand">
      <img src={logo} alt="Placiq" className="brand-logo" />
      <div>
        <div className="brand-name">Placiq</div>
        <div className="brand-tagline">Smart Prep. Right Match.</div>
      </div>
    </div>
  );
}

function Sidebar({ open, setOpen }) {
  return (
    <>
      <button className="mobile-menu" onClick={() => setOpen(true)} aria-label="Open menu">
        <Menu size={22} />
      </button>

      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-glow glow-one" />
        <div className="sidebar-glow glow-two" />

        <div className="sidebar-top">
          <Brand />
          <button className="mobile-close" onClick={() => setOpen(false)} aria-label="Close menu">
            <X size={20} />
          </button>
        </div>

        <nav className="nav">
          {navItems.map(([Icon, label]) => (
            <button
              key={label}
              className={`nav-item ${label === "Roadmap" ? "active" : ""}`}
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
            <p>Unlock advanced features and AI powered insights.</p>
            <button>Upgrade Now</button>
          </div>

          <div className="help-card">
            <div className="help-icon"><Headphones size={19} /></div>
            <div>
              <strong>Need Help?</strong>
              <span>Contact Support</span>
            </div>
            <ChevronRight size={17} />
          </div>
        </div>
      </aside>

      {open && <div className="overlay" onClick={() => setOpen(false)} />}
    </>
  );
}

function Topbar() {
  return (
    <header className="topbar">
      <div className="search">
        <Search size={18} />
        <span>Search your roadmap...</span>
      </div>

      <div className="profile">
        <div className="avatar">AS</div>
        <div className="profile-text">
          <strong>Anjali Singh</strong>
          <span>Student</span>
        </div>
        <ChevronDown size={17} />
        <Settings size={18} className="settings" />
      </div>
    </header>
  );
}

function ProgressCircle({ value }) {
  const radius = 31;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="progress-circle">
      <svg viewBox="0 0 80 80">
        <circle className="circle-bg" cx="40" cy="40" r={radius} />
        <circle
          className="circle-value"
          cx="40"
          cy="40"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <span>{value}%</span>
    </div>
  );
}

function RoadmapStep({ step, expanded, onToggle }) {
  const Icon = step.icon;

  return (
    <article className={`roadmap-step ${step.done ? "completed" : ""}`}>
      <div className={`step-number ${step.tone}`}>
        {step.done ? <Check size={19} strokeWidth={3} /> : step.number}
      </div>

      <div className="step-card">
        <div className={`step-icon ${step.tone}`}>
          <Icon size={24} />
        </div>

        <div className="step-main">
          <div className="step-title-row">
            <h3>{step.title}</h3>
            <span className={`status ${step.tone}`}>{step.status}</span>
          </div>

          <p>{step.description}</p>

          <div className="tags">
            {step.tags.map(tag => <span key={tag}>{tag}</span>)}
          </div>
        </div>

        <div className="step-action">
          {step.progress ? <ProgressCircle value={step.progress} /> : step.done ? (
            <div className="done-check"><Check size={20} /></div>
          ) : (
            <div className="locked"><Lock size={17} /></div>
          )}
          <button className="expand" onClick={onToggle} aria-label="Toggle roadmap step">
            <ChevronDown size={18} className={expanded ? "rotated" : ""} />
          </button>
        </div>
      </div>

      {expanded && (
        <div className="step-details">
          <strong>What you'll learn</strong>
          <p>Follow this stage at your own pace, complete the topics, and use Placiq's practice tools to check your understanding.</p>
        </div>
      )}
    </article>
  );
}

function RecommendedLearning() {
  return (
    <section className="side-card recommended">
      <div className="side-card-title">
        <Sparkles size={17} />
        <h3>Recommended Learning</h3>
      </div>

      <div className="recommend-art">
        <Target size={54} />
      </div>

      <h4>Binary Trees</h4>
      <p>You're making good progress in DSA. Continue with Binary Trees to complete this milestone.</p>

      <button className="primary-btn">
        Continue Learning <ChevronRight size={17} />
      </button>
    </section>
  );
}

function Readiness() {
  return (
    <section className="side-card readiness">
      <h3>Placement Readiness</h3>

      <div className="readiness-ring">
        <div>
          <strong>72%</strong>
          <span>Overall Ready</span>
        </div>
      </div>

      {[
        ["DSA", "78%"],
        ["Core CS", "64%"],
        ["Development", "82%"],
        ["Interview Preparation", "58%"],
        ["Aptitude", "70%"]
      ].map(([name, value]) => (
        <div className="metric" key={name}>
          <div><span>{name}</span><b>{value}</b></div>
          <div className="metric-bar"><span style={{ width: value }} /></div>
        </div>
      ))}

      <button className="text-btn">View Detailed Analytics <ChevronRight size={15} /></button>
    </section>
  );
}

function Milestones() {
  return (
    <section className="side-card milestones">
      <h3>Upcoming Milestones</h3>
      {[
        ["Complete Trees", "In DSA"],
        ["DBMS Basics", "In Core CS"],
        ["Build a Full Stack Project", "In Development"]
      ].map(([name, area]) => (
        <div className="milestone" key={name}>
          <span className="milestone-dot"><Check size={13} /></span>
          <strong>{name}</strong>
          <small>{area}</small>
        </div>
      ))}
      <button className="text-btn">View All Milestones <ChevronRight size={15} /></button>
    </section>
  );
}

function FeatureStrip() {
  return (
    <section className="feature-strip">
      <div className="feature-heading">
        <div>
          <h3>Keep Building Your Placement Profile</h3>
          <p>Use Placiq's tools to practice, improve and track your journey.</p>
        </div>
        <button className="text-btn">Explore All Features <ChevronRight size={15} /></button>
      </div>

      <div className="feature-grid">
        <div className="feature">
          <div className="feature-icon purple"><Mic2 size={22} /></div>
          <div><strong>Mock Interviews</strong><span>Practice real interview questions and get AI feedback.</span><button>Practice Now →</button></div>
        </div>
        <div className="feature">
          <div className="feature-icon blue"><Code2 size={22} /></div>
          <div><strong>Coding Practice</strong><span>Solve coding challenges and improve your problem solving.</span><button>Start Coding →</button></div>
        </div>
        <div className="feature">
          <div className="feature-icon green"><FileText size={22} /></div>
          <div><strong>Resume Builder</strong><span>Create an ATS-friendly resume that gets you noticed.</span><button>Build Resume →</button></div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="app-shell" style={{ backgroundImage: `url(${bg})` }}>

      <Sidebar open={open} setOpen={setOpen} />

      <main className="main">
        <Topbar />

        <div className="page-title">
          <div>
            <div className="title-line">
              <h1>Your Placement Journey</h1>
              <span className="title-sparkle"><Sparkles size={24} /></span>
            </div>
            <p>Follow a structured path from learning to placement ready.</p>
          </div>
        </div>

        <div className="layout">
          <section className="content">
            <div className="roadmap">
              {steps.map((step, index) => (
                <RoadmapStep
                  key={step.number}
                  step={step}
                  expanded={expanded === index}
                  onToggle={() => setExpanded(expanded === index ? null : index)}
                />
              ))}
            </div>

            <FeatureStrip />
          </section>

          <aside className="right-panel">
            <RecommendedLearning />
            <Readiness />
            <Milestones />
          </aside>
        </div>
      </main>
    </div>
  );
}
