import React from "react";
import { BarChart3 } from "lucide-react";
import ScoreRing from "./ScoreRing";

export default function SummaryCard() {
  return (
    <section className="mi-side-card mi-summary-card">

      {/* Header */}
      <div className="mi-side-card-title summary-title">
        <div className="summary-title-icon">
          <BarChart3 size={16} />
        </div>

        <h3>Overall Summary</h3>
      </div>

      {/* Score Ring */}
      <div className="mi-score-section">

  <div className="mi-score-info">
    <strong>72%</strong>

    <span>
      Overall Average Score
    </span>
  </div>

  <ScoreRing />

</div>
      {/* Summary List */}
      <div className="mi-summary-list">

        <div>
          <span>
            <i className="mi-summary-dot purple"></i>
            HR Round Average
          </span>

          <strong>68%</strong>
        </div>

        <div>
          <span>
            <i className="mi-summary-dot orange"></i>
            Written Round Average
          </span>

          <strong>74%</strong>
        </div>

        <div>
          <span>
            <i className="mi-summary-dot green"></i>
            Tests Taken
          </span>

          <strong>12</strong>
        </div>

        <div>
          <span>
            <i className="mi-summary-dot red"></i>
            Total Time Practiced
          </span>

          <strong>15h 30m</strong>
        </div>

      </div>

    </section>
  );
}