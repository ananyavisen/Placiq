import React from "react";

export default function AttemptRow({ item }) {
  const Icon = item.icon;

  return (
    <div className="mi-attempt-row">

      <div className={`mi-status-icon ${item.tone}`}>
        <Icon size={15} />
      </div>

      <div className="mi-attempt-info">

        <strong>{item.title}</strong>

        <span>
          {item.date} <b>•</b> {item.time}
        </span>

      </div>

      <div className="mi-attempt-score">

        <small>Score</small>

        <strong className={item.tone}>
          {item.score}
        </strong>

      </div>

      <button className="mi-report-button">
        View Report
      </button>

    </div>
  );
}