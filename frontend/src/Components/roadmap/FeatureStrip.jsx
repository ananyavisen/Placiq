import React from "react";
import {
  ChevronRight,
  Code2,
  FileText,
  Mic2,
} from "lucide-react";

export default function FeatureStrip() {
  return (
    <section className="feature-strip">

      <div className="feature-heading">

        <div>
          <h3>
            Keep Building Your Placement Profile
          </h3>

          <p>
            Use Placiq's tools to practice,
            improve and track your journey.
          </p>
        </div>

        <button className="text-btn">
          Explore All Features
          <ChevronRight size={15} />
        </button>

      </div>

      <div className="feature-grid">

        <div className="feature">

          <div className="feature-icon purple">
            <Mic2 size={22} />
          </div>

          <div>
            <strong>Mock Interviews</strong>

            <span>
              Practice real interview questions
              and get AI feedback.
            </span>

            <button>
              Practice Now →
            </button>
          </div>

        </div>


        <div className="feature">

          <div className="feature-icon blue">
            <Code2 size={22} />
          </div>

          <div>
            <strong>Coding Practice</strong>

            <span>
              Solve coding challenges and improve
              your problem solving.
            </span>

            <button>
              Start Coding →
            </button>
          </div>

        </div>


        <div className="feature">

          <div className="feature-icon green">
            <FileText size={22} />
          </div>

          <div>
            <strong>Resume Builder</strong>

            <span>
              Create an ATS-friendly resume
              that gets you noticed.
            </span>

            <button>
              Build Resume →
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}