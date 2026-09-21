import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  Lightbulb,
  MessageCircle,
  ShieldCheck,
  Target,
  Brain,
  Code2,
} from "lucide-react";
import { getInterviewReport } from "../../api/mockInterview";

export default function InterviewReport() {
  const { sessionId } = useParams();
  const navigate = useNavigate();

  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadReport = async () => {
      try {
        const data = await getInterviewReport(sessionId);
        setReport(data);
      } catch (err) {
        console.error("Failed to load interview report:", err);
        setError("Unable to load interview report.");
      } finally {
        setLoading(false);
      }
    };

    loadReport();
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading your report...</p>
      </div>
    );
  }

  if (error || !report) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-red-500">{error || "Report not found."}</p>

        <button
          onClick={() => navigate("/mock-interview")}
          className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-medium text-white"
        >
          Back to Mock Interviews
        </button>
      </div>
    );
  }

  const categories = [
    {
      key: "communication",
      title: "Communication",
      scoreKey: "communication_score",
      icon: MessageCircle,
    },
    {
      key: "confidence",
      title: "Confidence",
      scoreKey: "confidence_score",
      icon: ShieldCheck,
    },
    {
      key: "answer_quality",
      title: "Answer Quality",
      scoreKey: "answer_quality_score",
      icon: Target,
    },
    {
      key: "speaking_skills",
      title: "Speaking Skills",
      scoreKey: "speaking_skills_score",
      icon: Brain,
    },
    {
      key: "behavioral_performance",
      title: "Behavioral Performance",
      scoreKey: "behavioral_performance_score",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="min-h-screen px-8 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <button
            onClick={() => navigate("/mock-interview")}
            className="mb-4 flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800"
          >
            <ArrowLeft size={17} />
            Back to Mock Interviews
          </button>

          <h1 className="text-3xl font-bold text-gray-900">
            Interview Report
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Here's how your interview performance looked.
          </p>
        </div>
      </div>

      {/* Overall Score */}
      <section className="mb-6 rounded-3xl border border-white/30 bg-white/60 p-7 shadow-sm backdrop-blur-md">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">
              Overall Performance
            </p>

            <h2 className="mt-2 text-5xl font-bold text-gray-900">
              {report.overall_score ?? "--"}%
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Based on your performance across the interview.
            </p>
          </div>

          <div className="flex h-24 w-24 items-center justify-center rounded-full border-8 border-blue-100">
            <span className="text-xl font-bold text-blue-600">
              {Math.round(report.overall_score ?? 0)}
            </span>
          </div>
        </div>
      </section>

      {/* Performance Dimensions */}
      {/* Performance Dimensions */}
<section className="mb-6">
  <h2 className="mb-4 text-xl font-semibold text-gray-900">
    Performance Breakdown
  </h2>

  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
    {categories.map((category) => {
      const Icon = category.icon;
      const score = report[category.scoreKey];

      if (score === null || score === undefined) return null;

      return (
        <div
          key={category.key}
          className="rounded-2xl border border-white/30 bg-white/60 p-5 shadow-sm backdrop-blur-md"
        >
          <div className="flex items-center justify-between">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Icon size={18} />
            </div>

            <span className="text-xl font-bold text-gray-900">
              {score}%
            </span>
          </div>

          <p className="mt-4 text-sm font-semibold text-gray-800">
            {category.title}
          </p>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-blue-600"
              style={{
                width: `${Math.min(score, 100)}%`,
              }}
            />
          </div>
        </div>
      );
    })}
  </div>
</section>
      {/* Insights */}
      <section>
        <div className="mb-4 flex items-center gap-2">
          <Lightbulb size={20} className="text-blue-600" />

          <h2 className="text-xl font-semibold text-gray-900">
            Interview Insights
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {categories.map((category) => {
           const data = report.insights?.[category.key];

            if (!data?.insights?.length) return null;

            return (
              <div
                key={category.key}
                className="rounded-2xl border border-white/30 bg-white/60 p-6 shadow-sm backdrop-blur-md"
              >
                <h3 className="mb-4 text-base font-semibold text-gray-900">
                  {category.title}
                </h3>

                <div className="space-y-3">
                  {data.insights.map((insight, index) => (
                    <div
                      key={index}
                      className="rounded-xl bg-white/60 p-4"
                    >
                      <div className="flex items-start gap-3">
                        {insight.type === "strength" ? (
                          <CheckCircle2
                            size={18}
                            className="mt-0.5 shrink-0 text-green-500"
                          />
                        ) : (
                          <Lightbulb
                            size={18}
                            className="mt-0.5 shrink-0 text-blue-500"
                          />
                        )}

                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                            {insight.type}
                          </p>

                          <p className="mt-1 text-sm leading-6 text-gray-700">
                            {insight.statement}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}