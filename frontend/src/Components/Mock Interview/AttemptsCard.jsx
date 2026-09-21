import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AttemptsCard({
  title,
  attempts,
  viewText,
}) {
  const navigate = useNavigate();

  return (
    <div className="mi-attempts">
      <h3 className="mi-attempts-title">{title}</h3>

      <div className="mi-attempts-list">
        {attempts.map((attempt, index) => {
          const Icon = attempt.icon;

          return (
            <div
              className="mi-attempt-row"
              key={attempt.id || index}
            >
              <div className={`mi-status-icon ${attempt.tone}`}>
                <Icon size={16} strokeWidth={2.3} />
              </div>

              <div className="mi-attempt-info">
                <div className="mi-attempt-title">
                  {attempt.title}
                </div>

                <div className="mi-attempt-date">
                  {attempt.date}
                  <span>•</span>
                  {attempt.time}
                </div>
              </div>

              <div className="mi-score">
                <span className="mi-score-label">
                  Score
                </span>

                <span
                  className={`mi-score-value ${attempt.tone}`}
                >
                  {attempt.score}
                </span>
              </div>

              <button
                className="mi-report-btn"
                onClick={() => {
                  console.log(
                    "Report clicked, session ID:",
                    attempt.id
                  );

                  navigate(
                    `/mock-interview/report/${attempt.id}`
                  );
                }}
              >
                View Report
              </button>
            </div>
          );
        })}
      </div>

      <button className="mi-view-all">
        {viewText}
        <ChevronRight size={17} />
      </button>
    </div>
  );
}