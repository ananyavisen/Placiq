import React from "react";
import {
  WandSparkles,
  ClipboardCheck,
  ShieldCheck,
  GraduationCap,
  ExternalLink,
} from "lucide-react";
// import ProfileHeader from "../Common/ProfileHeader";

const quickActions = [
  {
    title: "Explain a Concept",
    subtitle: "Get simple explanations",
    icon: WandSparkles,
  },
  {
    title: "Quiz Me",
    subtitle: "Practice with quizzes",
    icon: ClipboardCheck,
  },
  {
    title: "Review Mistakes",
    subtitle: "Get feedback on weak areas",
    icon: ShieldCheck,
  },
  {
    title: "Study Plan Help",
    subtitle: "Personalized study guidance",
    icon: GraduationCap,
  },
];

const suggestedPrompts = [
  "Explain deadlock in OS",
  "Top 10 DSA patterns",
  "How to improve problem solving?",
  "System design for beginners",
  "Tips for HR interview",
];

const RightPanel = () => {
  return (
    <aside className="ai-right-panel">
      {/* <ProfileHeader /> */}
      {/* Quick Actions */}
      <div className="ai-side-card">

        <h3>Quick Actions</h3>

        <div className="ai-quick-actions">

          {quickActions.map((action) => {
            const Icon = action.icon;

            return (
              <button
                className="ai-quick-action"
                key={action.title}
              >
                <div className="ai-quick-icon">
                  <Icon size={20} />
                </div>

                <div>
                  <strong>{action.title}</strong>

                  <span>
                    {action.subtitle}
                  </span>
                </div>
              </button>
            );
          })}

        </div>
      </div>

      {/* Suggested prompts */}
      <div className="ai-side-card ai-prompts-card">

        <h3>Suggested Prompts</h3>

        <div className="ai-prompt-list">

          {suggestedPrompts.map((prompt) => (
            <button
              className="ai-prompt"
              key={prompt}
            >
              <ExternalLink size={14} />

              <span>{prompt}</span>
            </button>
          ))}

        </div>
      </div>

      {/* Motivation */}
      <div className="ai-motivation-card">

        <div className="ai-quote">
          “
        </div>

        <div className="ai-motivation-text">
          Consistency today,
          <br />
          Success tomorrow.
        </div>

        {/* Robot */}
        <div className="ai-robot">

          <div className="ai-robot-sparkle">
            ✦
          </div>

          <div className="ai-robot-head">

            <div className="ai-robot-eye" />
            <div className="ai-robot-eye" />

          </div>

          <div className="ai-robot-body">
            <div className="ai-robot-button" />
          </div>

        </div>

      </div>

    </aside>
  );
};

export default RightPanel;