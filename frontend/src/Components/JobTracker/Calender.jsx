import {
    ChevronLeft,
    ChevronRight,
    Star,
  } from "lucide-react";
  
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  
  // August 2026 starts on Saturday.
  // 0 = Monday, 5 = Saturday.
  const calendarDays = [
    { day: 27, muted: true },
    { day: 28, muted: true },
    { day: 29, muted: true },
    { day: 30, muted: true },
    { day: 31, muted: true },
  
    { day: 1 },
    { day: 2 },
  
    { day: 3 },
    { day: 4 },
    { day: 5 },
    { day: 6 },
    { day: 7 },
    { day: 8, type: "interview" },
  
    { day: 9 },
    { day: 10 },
    { day: 11 },
    { day: 12, type: "interview", selected: true },
    { day: 13 },
    { day: 14 },
    { day: 15 },
  
    { day: 16, type: "interview", highlighted: true },
    { day: 17, type: "oa" },
    { day: 18 },
    { day: 19 },
    { day: 20 },
    { day: 21 },
    { day: 22 },
  
    { day: 23 },
    { day: 24 },
    { day: 25 },
    { day: 26 },
    { day: 27 },
    { day: 28 },
    { day: 29 },
  
    { day: 30, type: "offer" },
    { day: 31 },
  ];
  
  const eventStyles = {
    interview: {
      dot: "bg-[#7C3AED]",
      ring: "border-[#7C3AED]",
    },
  
    oa: {
      dot: "bg-[#F59E0B]",
      ring: "border-[#F59E0B]",
    },
  
    offer: {
      dot: "bg-[#10B981]",
      ring: "border-[#10B981]",
    },
  };
  
  export default function ApplicationCalendar() {
    return (
      <div
        className="
          w-full
          rounded-2xl
          border border-[#E9E3F0]
          bg-white/70
          px-4
          py-3
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
            Application Calendar
          </h2>
        </div>
  
        {/* Month navigation */}
        <div className="mt-2 flex items-center justify-between px-1">
          <button
            type="button"
            className="
              flex h-5 w-5
              items-center justify-center
              rounded-full
              text-[#7C3AED]
              transition
              hover:bg-[#F3E8FF]
            "
          >
            <ChevronLeft size={14} />
          </button>
  
          <span
            className="
              font-[Manrope]
              text-[11px]
              font-semibold
              text-[#172044]
            "
          >
            August 2026
          </span>
  
          <button
            type="button"
            className="
              flex h-5 w-5
              items-center justify-center
              rounded-full
              text-[#7C3AED]
              transition
              hover:bg-[#F3E8FF]
            "
          >
            <ChevronRight size={14} />
          </button>
        </div>
  
        {/* Weekdays */}
        <div className="mt-3 grid grid-cols-7">
          {weekDays.map((day) => (
            <div
              key={day}
              className="
                text-center
                font-[Inter]
                text-[8px]
                font-medium
                text-[#777188]
              "
            >
              {day}
            </div>
          ))}
        </div>
  
        {/* Calendar */}
        <div className="mt-1 grid grid-cols-7 gap-y-1">
          {calendarDays.map((date, index) => {
            const event = date.type
              ? eventStyles[date.type]
              : null;
  
            return (
              <div
                key={`${date.day}-${index}`}
                className="relative flex h-7 items-center justify-center"
              >
                {/* Selected date */}
                {date.selected && (
                  <div
                    className="
                      absolute
                      h-7 w-7
                      rounded-full
                      border
                      border-[#8B5CF6]
                      bg-[#F3E8FF]
                    "
                  />
                )}
  
                {/* Highlighted date */}
                {date.highlighted && (
                  <div
                    className="
                      absolute
                      h-7 w-7
                      rounded-full
                      bg-[#DCC9FF]
                    "
                  />
                )}
  
                <span
                  className={`
                    relative z-10
                    font-[Inter]
                    text-[9px]
                    font-medium
  
                    ${
                      date.muted
                        ? "text-[#C9C2D2]"
                        : "text-[#303052]"
                    }
  
                    ${
                      date.highlighted
                        ? "font-semibold text-[#6D28D9]"
                        : ""
                    }
                  `}
                >
                  {date.day}
                </span>
  
                {/* Event indicator */}
                {event && (
                  <span
                    className={`
                      absolute
                      bottom-0.5
                      h-1
                      w-1
                      rounded-full
                      ${event.dot}
                    `}
                  />
                )}
              </div>
            );
          })}
        </div>
  
        {/* Legend */}
        <div
          className="
            mt-3
            flex
            items-center
            justify-center
            gap-5
            border-t
            border-[#F0ECF5]
            pt-2
          "
        >
          {/* Interview */}
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]" />
  
            <span
              className="
                font-[Inter]
                text-[8px]
                text-[#625B70]
              "
            >
              Interview
            </span>
          </div>
  
          {/* OA */}
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />
  
            <span
              className="
                font-[Inter]
                text-[8px]
                text-[#625B70]
              "
            >
              OA Deadline
            </span>
          </div>
  
          {/* Offer */}
          <div className="flex items-center gap-1.5">
            <Star
              size={10}
              strokeWidth={2.5}
              className="fill-[#10B981] text-[#10B981]"
            />
  
            <span
              className="
                font-[Inter]
                text-[8px]
                text-[#625B70]
              "
            >
              Offer
            </span>
          </div>
        </div>
      </div>
    );
  }