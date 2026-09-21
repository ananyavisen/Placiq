import React from "react";
import { useNavigate } from "react-router-dom";

export default function AttemptRow({ item }) {
  const Icon = item.icon;
  const navigate = useNavigate();

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

      <button
  type="button"
  className="mi-report-btn"
  onClick={() => {
    console.log("Report clicked:", item.id);
    navigate(`/mock-interview/report/${item.id}`);
  }}
>
  View Report
</button>
    </div>
  );
}