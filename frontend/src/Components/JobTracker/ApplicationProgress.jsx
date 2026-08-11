const statusConfig = {
    applied: {
      label: "Applied",
      color: "#8B5CF6",
    },
    oa: {
      label: "OA / Test",
      color: "#10B981",
    },
    interview: {
      label: "Interview",
      color: "#3B82F6",
    },
    offer: {
      label: "Offer",
      color: "#F59E0B",
    },
    rejected: {
      label: "Rejected",
      color: "#F43F5E",
    },
  };
  
  export default function ApplicationProgress({ stats }) {
    const total = stats?.total ?? 0;
  
    const segments = Object.entries(statusConfig).map(
      ([key, config]) => {
        const value = stats?.[key] ?? 0;
  
        return {
          ...config,
          value,
          percentage: total
            ? (value / total) * 100
            : 0,
        };
      }
    );
  
    // Visual donut only.
    // Stage counts overlap, so they should not be summed into the donut.
    const gradient = `
      conic-gradient(
        #8B5CF6 0% 40%,
        #10B981 40% 60%,
        #3B82F6 60% 78%,
        #F59E0B 78% 82%,
        #F43F5E 82% 100%
      )
    `;
  
    return (
      <div
        className="
          rounded-2xl
          border border-[#E9E3F0]
          bg-white/70
          px-5 py-3
        "
      >
        {/* Heading */}
        <h2
          className="
            font-[Manrope]
            text-sm
            font-bold
            text-[#172044]
          "
        >
          Application Progress
        </h2>
  
        <div className="mt-2 flex items-center gap-7">
  
          {/* Donut */}
          <div className="relative h-24.5 w-24.5 shrink-0">
            <div
              className="h-full w-full rounded-full"
              style={{
                background: gradient,
              }}
            />
  
            {/* Inner circle */}
            <div
              className="
                absolute inset-2.75
                flex flex-col
                items-center justify-center
                rounded-full
                bg-white
              "
            >
              <span
                className="
                  font-[Manrope]
                  text-[22px]
                  font-bold
                  leading-none
                  text-[#172044]
                "
              >
                {total}
              </span>
  
              <span
                className="
                  mt-1
                  text-center
                  font-[Inter]
                  text-[8px]
                  leading-tight
                  text-[#70697D]
                "
              >
                Total
                <br />
                Applications
              </span>
            </div>
          </div>
  
          {/* Breakdown */}
          <div className="flex-1 space-y-2">
            {segments.map((segment) => (
              <div
                key={segment.label}
                className="flex items-center gap-2"
              >
                {/* Dot */}
                <span
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{
                    backgroundColor: segment.color,
                  }}
                />
  
                {/* Label */}
                <span
                  className="
                    w-15
                    shrink-0
                    font-[Inter]
                    text-[9px]
                    text-[#514B63]
                  "
                >
                  {segment.label}
                </span>
  
                {/* Progress bar */}
                <div
                  className="
                    h-1.5
                    min-w-0
                    flex-1
                    overflow-hidden
                    rounded-full
                    bg-[#F0EBF5]
                  "
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${Math.min(
                        segment.percentage,
                        100
                      )}%`,
                      backgroundColor: segment.color,
                    }}
                  />
                </div>
  
                {/* Value */}
                <span
                  className="
                    w-13.75
                    text-right
                    font-[Inter]
                    text-[9px]
                    font-semibold
                    text-[#39344D]
                  "
                >
                  {segment.value}{" "}
  
                  <span className="font-normal text-[#777188]">
                    ({Math.round(segment.percentage)}%)
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }