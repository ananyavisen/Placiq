import {
    Sparkles,
    ArrowRight,
  } from "lucide-react";
  
  const insightStats = [
    {
      label: "Avg. Response Time",
      value: "11",
      unit: "days",
    },
    {
      label: "Interview Rate",
      value: "27",
      unit: "%",
    },
    {
      label: "Offer Rate",
      value: "3.5",
      unit: "%",
    },
  ];
  
  export default function AIInsights({
    companiesApplied = 28,
    responseRate = 42,
    onViewReport,
  }) {
    return (
      <div
        className="
          rounded-2xl
          border border-[#E9E3F0]
          bg-white/70
          px-3 py-3
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2
            className="
              font-[Manrope]
              text-[12px]
              font-bold
              text-[#172044]
            "
          >
            AI Insights
          </h2>
  
          <button
            type="button"
            onClick={onViewReport}
            className="
              font-[Inter]
              text-[9px]
              font-semibold
              text-[#7C3AED]
              transition
              hover:text-[#6D28D9]
            "
          >
            View Report
          </button>
        </div>
  
        {/* Main insight */}
        <div
          className="
            mt-2
            flex
            items-center
            gap-2.5
            rounded-xl
            border border-[#E5D5FA]
            bg-[#F3E8FF]
            px-3
            py-2.5
          "
        >
          {/* Icon */}
          <div
            className="
              flex
              h-7
              w-7
              shrink-0
              items-center
              justify-center
              rounded-lg
              bg-white/70
            "
          >
            <Sparkles
              size={14}
              strokeWidth={2}
              className="text-[#7C3AED]"
            />
          </div>
  
          {/* Insight */}
          <div className="min-w-0">
            <p
              className="
                font-[Manrope]
                text-[14px]
                font-bold
                text-[#31205F]
              "
            >
              You've applied to {companiesApplied} companies
            </p>
  
            <p
              className="
                mt-0.5
                font-[Inter]
                text-[10px]
                leading-relaxed
                text-[#625B70]
              "
            >
              Response rate is {responseRate}%. Keep applying
              consistently!
            </p>
          </div>
        </div>
  
        {/* Statistics */}
        <div className="mt-2 grid grid-cols-3 gap-2">
          {insightStats.map((stat) => (
            <div
              key={stat.label}
              className="
                rounded-xl
                border border-[#E9E3F0]
                bg-white/60
                px-2
                py-2
                text-center
              "
            >
              <p
                className="
                  font-[Inter]
                  text-[10px]
                  leading-tight
                  text-[#777188]
                "
              >
                {stat.label}
              </p>
  
              <div className="mt-1">
                <span
                  className="
                    font-[Manrope]
                    text-[16px]
                    font-bold
                    leading-none
                    text-[#172044]
                  "
                >
                  {stat.value}
                </span>
  
                <span
                  className="
                    ml-0.5
                    font-[Inter]
                    text-[14px]
                    font-medium
                    text-[#70697D]
                  "
                >
                  {stat.unit}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }