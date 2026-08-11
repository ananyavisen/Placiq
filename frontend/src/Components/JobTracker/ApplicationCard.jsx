import {
    Bookmark,
    MoreVertical,
    MapPin,
    CalendarDays,
  } from "lucide-react";
  
  import CompanyAvatar from "./CompanyAvatar";
  import ApplicationTimeline from "./ApplicationTimeline";


  const statusStyles = {
    applied: "bg-[#F1E8FF] text-[#7C3AED]",
    oa: "bg-[#FFF1E5] text-[#D97706]",
    interview: "bg-[#F0E9FF] text-[#7C3AED]",
    offer: "bg-[#E6F8EE] text-[#059669]",
    rejected: "bg-[#FFE8ED] text-[#E11D48]",
  };
  
  const statusLabels = {
    applied: "Applied",
    oa: "OA Pending",
    interview: "Interview 1",
    offer: "Offer Received",
    rejected: "Rejected",
  };
  
  export default function ApplicationCard({
    application,
    onBookmark,
    onMenuClick,
  }) {
    const {
      company,
      role,
      location,
      appliedDate,
      status,
      currentStage,
      deadline,
      interviewDate,
      score,
      bookmarked,
    } = application;
  
    return (
      <div
        className="
          mt-2
          group
          flex min-h-20.5
          items-center
          gap-5
          border-b border-[#EEE9F4]
          bg-white/50
          px-3 py-3
          transition
          hover:bg-[#FCFAFF]
        "
      >
        {/* Company */}
        <div className="flex w-85 shrink-0 items-center gap-4">
          <CompanyAvatar company={company} />
  
          <div className="min-w-0">
            <h3
              className="
                truncate
                font-[Manrope]
                text-sm
                font-bold
                text-[#172044]
              "
            >
              {company}
            </h3>
  
            <p
              className="
                truncate
                font-[Inter]
                text-[11px]
                font-medium
                text-[#172044]
              "
            >
              {role}
            </p>
  
            <div className="mt-1 flex items-center gap-3">
              <span
                className="
                  flex items-center gap-1
                  font-[Inter]
                  text-[9px]
                  text-[#70697D]
                "
              >
                <MapPin size={9} />
                {location}
              </span>
  
              <span
                className="
                  flex items-center gap-1
                  font-[Inter]
                  text-[9px]
                  text-[#70697D]
                "
              >
                <CalendarDays size={9} />
                Applied on {appliedDate}
              </span>
            </div>
          </div>
        </div>
  
        {/* Status */}
        <div className="w-26.25 shrink-0">
          <span
            className={`
              inline-flex
              rounded-full
              px-3 py-1
              font-[Inter]
              text-[9px]
              font-semibold
              ${statusStyles[status]}
            `}
          >
            {statusLabels[status]}
          </span>
        </div>
  
        {/* Timeline */}
        <div className="flex-1">
          <ApplicationTimeline
            currentStage={currentStage}
            deadline={deadline}
            interviewDate={interviewDate}
            score={score}
          />
        </div>
  
        {/* Actions */}
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => onBookmark?.(application)}
            className="text-[#596080] transition hover:text-[#7C3AED]"
          >
            <Bookmark
              size={17}
              strokeWidth={1.8}
              fill={bookmarked ? "#8B5CF6" : "none"}
            />
          </button>
  
          <button
            type="button"
            onClick={() => onMenuClick?.(application)}
            className="text-[#596080] transition hover:text-[#7C3AED]"
          >
            <MoreVertical
              size={18}
              strokeWidth={1.8}
            />
          </button>
        </div>
      </div>
    );
  }