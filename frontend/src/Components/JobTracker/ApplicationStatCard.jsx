import {
    Send,
    Clock3,
    UsersRound,
    Star,
    CircleX,
  } from "lucide-react";
  
  const iconMap = {
    applied: Send,
    pending: Clock3,
    interviews: UsersRound,
    offers: Star,
    rejected: CircleX,
  };
  
  const styles = {
    applied: {
      card: "border-[#DDD1FF] bg-[#FBF8FF]",
      icon: "bg-[#F0E8FF] text-[#8B5CF6]",
      value: "text-[#111A3A]",
      trend: "text-[#10B981]",
    },
    pending: {
      card: "border-[#F6DCC8] bg-[#FFFBF8]",
      icon: "bg-[#FFF1E4] text-[#F59E0B]",
      value: "text-[#111A3A]",
      trend: "text-[#8B6F5A]",
    },
    interviews: {
      card: "border-[#C9DDFB] bg-[#F8FBFF]",
      icon: "bg-[#E8F1FF] text-[#3B82F6]",
      value: "text-[#111A3A]",
      trend: "text-[#52627A]",
    },
    offers: {
      card: "border-[#BDE7D2] bg-[#F7FFFA]",
      icon: "bg-[#E5F8EC] text-[#10B981]",
      value: "text-[#111A3A]",
      trend: "text-[#52627A]",
    },
    rejected: {
      card: "border-[#F8C8D4] bg-[#FFF8FA]",
      icon: "bg-[#FFE9EF] text-[#F43F5E]",
      value: "text-[#111A3A]",
      trend: "text-[#52627A]",
    },
  };
  
  export default function ApplicationStatCard({
    type,
    label,
    value,
    footer,
  }) {
    const Icon = iconMap[type];
    const style = styles[type];
  
    return (
      <div
        className={`
          flex min-h-26 flex-1
          rounded-2xl
          border
          px-3 py-2
          ${style.card}
        `}
      >
        {/* Icon */}
        <div
          className={`
            flex h-9 w-9 shrink-0
            items-center justify-center
            rounded-xl
            ${style.icon}
          `}
        >
          <Icon size={19} strokeWidth={2} />
        </div>
  
        {/* Content */}
        <div className="ml-3 min-w-0">
          <p className="font-[Manrope] text-xs font-semibold text-[#1E2A4A]">
            {label}
          </p>
  
          <p
            className={`
              mt-1
              font-[Manrope]
              text-[25px]
              font-bold
              leading-none
              ${style.value}
            `}
          >
            {value}
          </p>
  
          <p
            className={`
              mt-2
              whitespace-nowrap
              font-[Inter]
              text-[10px]
              ${style.trend}
            `}
          >
            {footer}
          </p>
        </div>
      </div>
    );
  }