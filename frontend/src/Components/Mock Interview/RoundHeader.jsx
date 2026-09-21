import React from "react";

export default function RoundHeader({
  type,
  icon: Icon,
  description,
  duration,
  questions,
  buttonText,
  onStart,
}) {
  return (
    <div className="mi-round-header">

      <div className="mi-round-header-top">

        <div className="mi-round-icon">
          <Icon size={24} />
        </div>

        <div className="mi-round-info">
          <h2>{type}</h2>

          <p>{description}</p>

          <div className="mi-round-meta">
            <span>{duration}</span>
            <span>•</span>
            <span>{questions} Questions</span>
          </div>
        </div>

      </div>

      <button
        className="mi-start-button"
        onClick={onStart}
      >
        {buttonText}
      </button>

    </div>
  );
}