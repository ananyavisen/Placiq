import React from "react";
import { ChevronRight } from "lucide-react";

export default function Readiness() {

  const metrics = [
    ["DSA", "78%"],
    ["Core CS", "64%"],
    ["Development", "82%"],
    ["Interview Preparation", "58%"],
    ["Aptitude", "70%"],
  ];

  return (
    <section className="side-card readiness">

      <h3>Placement Readiness</h3>

      <div className="readiness-ring">
        <div>
          <strong>72%</strong>
          <span>Overall Ready</span>
        </div>
      </div>

      {metrics.map(([name, value]) => (
        <div className="metric" key={name}>

          <div>
            <span>{name}</span>
            <b>{value}</b>
          </div>

          <div className="metric-bar">
            <span style={{ width: value }} />
          </div>

        </div>
      ))}

      <button className="text-btn">
        View Detailed Analytics
        <ChevronRight size={15} />
      </button>

    </section>
  );
}