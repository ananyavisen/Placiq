import React from "react";
import { Clock3, Target } from "lucide-react";

export default function RoundHeader({
  type,
  icon,
  description,
  duration,
  questions,
  buttonText,
}) {
  const Icon = icon;

  return (
    <div className="mi-round-header">

      <div className="mi-round-icon">
        <Icon size={24} />
      </div>

      <div className="mi-round-description">
        <h3>{type}</h3>

        <p>{description}</p>
      </div>

      <div className="mi-round-details">

        <div className="mi-detail-item">
          <Clock3 size={18} />

          <div>
            <span>Duration</span>
            <strong>{duration}</strong>
          </div>
        </div>

        <div className="mi-detail-item">
          <Target size={18} />

          <div>
            <span>Questions</span>
            <strong>{questions}</strong>
          </div>
        </div>

      </div>

      <button className="mi-start-button">
        {buttonText}
      </button>

    </div>
  );
}