import React from "react";
import {
  ChevronRight,
  Sparkles,
  Target,
} from "lucide-react";

export default function RecommendedLearning() {
  return (
    <section className="side-card recommended">

      <div className="side-card-title">
        <Sparkles size={17} />
        <h3>Recommended Learning</h3>
      </div>

      <div className="recommend-art">
        <Target size={54} />
      </div>

      <h4>Binary Trees</h4>

      <p>
        You're making good progress in DSA.
        Continue with Binary Trees to complete
        this milestone.
      </p>

      <button className="primary-btn">
        Continue Learning
        <ChevronRight size={17} />
      </button>

    </section>
  );
}