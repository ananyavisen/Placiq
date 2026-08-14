import React from "react";
import {
  Check,
  ChevronRight,
} from "lucide-react";

export default function Milestones() {

  const milestones = [
    ["Complete Trees", "In DSA"],
    ["DBMS Basics", "In Core CS"],
    ["Build a Full Stack Project", "In Development"],
  ];

  return (
    <section className="side-card milestones">

      <h3>Upcoming Milestones</h3>

      {milestones.map(([name, area]) => (
        <div
          className="milestone"
          key={name}
        >

          <span className="milestone-dot">
            <Check size={13} />
          </span>

          <strong>{name}</strong>

          <small>{area}</small>

        </div>
      ))}

      <button className="text-btn">
        View All Milestones
        <ChevronRight size={15} />
      </button>

    </section>
  );
}