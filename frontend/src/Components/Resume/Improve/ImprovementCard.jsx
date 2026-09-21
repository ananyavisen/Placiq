import { useEffect, useState } from "react";
import { Zap } from "lucide-react";
import ImprovementItem from "./ImprovementItem";

export default function ImprovementCard() {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/resume/latest/",
          {
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch resume analysis");
        }

        const data = await response.json();

        setSuggestions(data.analysis?.suggestions || []);
      } catch (error) {
        console.error("Suggestion fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSuggestions();
  }, []);

  return (
    <div className="rounded-3xl border mt-2 border-[#ECE8F8] p-6 shadow-xl">
      {/* Header */}
      <div className="mb-5 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-red-500" />

            <h2 className="text-lg font-semibold text-slate-800">
              What Needs Improvement
            </h2>
          </div>

          <p className="mt-1 text-sm text-slate-500">
            AI-generated suggestions based on your resume.
          </p>
        </div>

        {!loading && (
          <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-500">
            {suggestions.length} Issues Found
          </span>
        )}
      </div>

      {/* Suggestions */}
      {loading ? (
        <p className="text-sm text-slate-500">
          Analyzing your resume...
        </p>
      ) : suggestions.length === 0 ? (
        <p className="text-sm text-slate-500">
          No improvement suggestions found.
        </p>
      ) : (
        suggestions.map((suggestion, index) => (
          <div
            key={index}
            className="border-b border-[#ECE8F8] py-4 last:border-b-0"
          >
            <p className="text-sm leading-6 text-slate-700">
              {suggestion}
            </p>
          </div>
        ))
      )}

      {/* Footer */}
      <div className="pt-5 text-center">
        <button className="text-sm font-semibold text-violet-600 hover:underline">
          View All Suggestions →
        </button>
      </div>
    </div>
  );
}