import React, { useState } from "react";
import "./Roadmap.css";
import {
  BookOpen,
  Code2,
  Sparkles,
  Trophy,
  UsersRound,
} from "lucide-react";
// import "./Roadmap.css";
import RoadmapStep from "./RoadmapStep";
import RecommendedLearning from "./RecommendedLearning";
import Readiness from "./Readiness";
import Milestones from "./Milestones";
import FeatureStrip from "./FeatureStrip";


const steps = [
  {
    number: "01",
    icon: Sparkles,
    title: "Build Your Foundation",
    description:
      "Learn the basics and build a strong programming foundation.",
    tags: [
      "Programming Basics",
      "OOP Concepts",
      "Git & GitHub",
    ],
    status: "Completed",
    tone: "green",
    done: true,
  },

  {
    number: "02",
    icon: Code2,
    title: "Master DSA",
    description:
      "Master problem solving and essential data structures & algorithms.",
    tags: [
      "Arrays",
      "Strings",
      "Linked List",
      "Trees",
      "Graphs",
      "Dynamic Programming",
    ],
    status: "In Progress",
    tone: "purple",
    progress: 65,
  },

  {
    number: "03",
    icon: BookOpen,
    title: "Strengthen Core CS",
    description:
      "Learn core computer science subjects for interviews.",
    tags: [
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
    status: "Locked",
    tone: "blue",
  },

  {
    number: "04",
    icon: Code2,
    title: "Build Real Projects",
    description:
      "Build real world projects and improve your development skills.",
    tags: [
      "Frontend",
      "Backend",
      "Full Stack",
    ],
    status: "Locked",
    tone: "orange",
  },

  {
    number: "05",
    icon: UsersRound,
    title: "Prepare for Interviews",
    description:
      "Prepare for technical, aptitude and HR interviews.",
    tags: [
      "Aptitude",
      "Technical",
      "HR Interview",
      "Mock Interviews",
    ],
    status: "Locked",
    tone: "pink",
  },

  {
    number: "06",
    icon: Trophy,
    title: "Get Placement Ready",
    description:
      "Polish your profile and get ready to land your dream offer.",
    tags: [
      "Resume",
      "Job Applications",
      "Company Preparation",
      "Placement Strategy",
    ],
    status: "Locked",
    tone: "violet",
  },
];


export default function Roadmap() {

  const [expanded, setExpanded] = useState(null);

  return (
    <div className="roadmap-page">

      {/* PAGE HEADING */}

      <div className="page-title">

        <div>

          <div className="title-line">

            <h1>
              Your Placement Journey
            </h1>

            <span className="title-sparkle">
              <Sparkles size={24} />
            </span>

          </div>

          <p>
            Follow a structured path from learning
            to placement ready.
          </p>

        </div>

      </div>


      {/* THREE PANEL CONTENT */}

      <div className="layout">

        {/* MAIN ROADMAP */}

        <section className="content">

          <div className="roadmap">

            {steps.map((step, index) => (

              <RoadmapStep
                key={step.number}
                step={step}
                expanded={expanded === index}
                onToggle={() =>
                  setExpanded(
                    expanded === index
                      ? null
                      : index
                  )
                }
              />

            ))}

          </div>


          {/* FEATURE PROMOTION */}

          <FeatureStrip />

        </section>


        {/* RIGHT PANEL */}

        <aside className="right-panel">

          <RecommendedLearning />

          <Readiness />

          <Milestones />

        </aside>

      </div>

    </div>
  );
}