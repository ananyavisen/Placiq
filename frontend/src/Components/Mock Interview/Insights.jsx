import React from "react";
import {
  ChevronRight,
  FileText,
  Lightbulb,
  Target,
} from "lucide-react";

import SummaryCard from "./SummaryCard";

export default function Insights() {
  return (
    <aside className="mi-right-column">

      <SummaryCard />

      <section className="mi-side-card mi-insights-card">

        <h3>Improve With Insights</h3>

        <div className="mi-insight-box strength">

          <div className="mi-insight-icon">
            <Target size={18} />
          </div>

          <div>
            <strong>Strengths</strong>

            <p>
              You perform well in Communication
              and Problem Solving.
            </p>
          </div>

        </div>

        <div className="mi-insight-box improve">

          <div className="mi-insight-icon">
            <Lightbulb size={18} />
          </div>

          <div>
            <strong>Areas to Improve</strong>

            <p>
              Work on System Design and OS concepts
              in depth.
            </p>
          </div>

        </div>

        <div className="mi-insight-box suggestion">

          <div className="mi-insight-icon">
            <FileText size={18} />
          </div>

          <div>
            <strong>Suggestions</strong>

            <p>
              Practice more timed tests and review
              fundamentals regularly.
            </p>
          </div>

        </div>

        <button className="mi-analysis-button">
          View Detailed Analysis
          <ChevronRight size={16} />
        </button>

      </section>

    </aside>
  );
}