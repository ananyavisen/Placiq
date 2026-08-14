import React from "react";
import {
  Check,
  ChevronDown,
  Lock,
} from "lucide-react";

function ProgressCircle({ value }) {
  return (
    <div className="progress-circle">
      <svg width="58" height="58" viewBox="0 0 58 58">
        <circle
          cx="29"
          cy="29"
          r="24"
          fill="none"
          stroke="#eee7ff"
          strokeWidth="4"
        />

        <circle
          cx="29"
          cy="29"
          r="24"
          fill="none"
          stroke="#7138e8"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={`${(value / 100) * 150} 150`}
          transform="rotate(-90 29 29)"
        />
      </svg>

      <span>{value}%</span>
    </div>
  );
}

export default function RoadmapStep({
  step,
  expanded,
  onToggle,
}) {
  const Icon = step.icon;

  return (
    <article className={`roadmap-step ${step.tone}`}>
      <div className="step-number">
        {step.number}
      </div>

      <div className="step-card">
        <div className="step-icon">
          <Icon size={25} />
        </div>

        <div className="step-content">
          <div className="step-heading">
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>

            <span className={`step-status ${step.tone}`}>
              {step.status}
            </span>
          </div>

          <div className="step-tags">
            {step.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="step-actions">
          {step.progress ? (
            <ProgressCircle value={step.progress} />
          ) : step.done ? (
            <div className="done-check">
              <Check size={20} />
            </div>
          ) : (
            <div className="locked">
              <Lock size={17} />
            </div>
          )}

          <button
            className="expand"
            onClick={onToggle}
            aria-label="Toggle roadmap step"
          >
            <ChevronDown
              size={18}
              className={expanded ? "rotated" : ""}
            />
          </button>
        </div>
      </div>

      {expanded && (
        <div className="step-details">
          <strong>What you'll learn</strong>

          <p>
            Follow this stage at your own pace, complete the
            topics, and use Placiq's practice tools to check
            your understanding.
          </p>
        </div>
      )}
    </article>
  );
}