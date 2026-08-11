const stages = [
    "Applied",
    "OA",
    "Interview",
    "Offer",
  ];
  
  export default function ApplicationTimeline({
    currentStage,
    interviewNumber = null,
    deadline = null,
    interviewDate = null,
    score = null,
  }) {
    const currentIndex = stages.indexOf(currentStage);
  
    return (
      <div className="min-w-90">
        {/* Timeline */}
        <div className="flex items-center">
          {stages.map((stage, index) => {
            const completed = index <= currentIndex;
            const active = index === currentIndex;
  
            return (
              <div
                key={stage}
                className="flex flex-1 items-center last:flex-none"
              >
                {/* Node */}
                <div
                  className={`
                    relative flex h-3 w-3 shrink-0
                    items-center justify-center
                    rounded-full border-2
                    ${
                      completed
                        ? "border-[#8B5CF6] bg-[#8B5CF6]"
                        : "border-[#D8D1E8] bg-white"
                    }
                  `}
                >
                  {completed && (
                    <div className="h-1 w-1 rounded-full bg-white" />
                  )}
  
                  {active && stage === "Offer" && (
                    <span className="absolute text-[9px]">
                      ★
                    </span>
                  )}
                </div>
  
                {/* Connecting line */}
                {index < stages.length - 1 && (
                  <div
                    className={`
                      h-0.5 flex-1
                      ${
                        index < currentIndex
                          ? "bg-[#8B5CF6]"
                          : "bg-[#DDD7E8]"
                      }
                    `}
                  />
                )}
              </div>
            );
          })}
        </div>
  
        {/* Labels */}
        <div className="mt-1 flex">
          {stages.map((stage) => (
            <span
              key={stage}
              className="
                flex-1
                font-[Inter]
                text-[9px]
                text-[#514B63]
              "
            >
              {stage}
            </span>
          ))}
        </div>
  
        {/* Context information */}
        {deadline && currentStage === "OA" && (
          <p className="mt-1 font-[Inter] text-[10px] text-[#6B6478]">
            OA Deadline:{" "}
            <span className="font-semibold text-[#EF4444]">
              {deadline}
            </span>
          </p>
        )}
  
        {interviewDate && currentStage === "Interview" && (
          <div
            className="
              mt-2 rounded-lg
              bg-[#F4EEFF]
              px-2.5 py-1.5
              font-[Inter]
              text-[10px]
              text-[#514B63]
            "
          >
            📅 Interview on {interviewDate}
          </div>
        )}
  
        {score && currentStage === "OA" && (
          <p className="mt-1 font-[Inter] text-[10px] text-[#6B6478]">
            Score:{" "}
            <span className="font-semibold text-[#7C3AED]">
              {score}%
            </span>
          </p>
        )}
      </div>
    );
  }