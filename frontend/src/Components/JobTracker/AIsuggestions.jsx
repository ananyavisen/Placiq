import {
    Sparkles,
    BriefcaseBusiness,
    FolderKanban,
    ChevronRight,
  } from "lucide-react";
  
  const iconMap = {
    resume: Sparkles,
    jobs: BriefcaseBusiness,
    projects: FolderKanban,
  };
  
  const iconStyles = {
    resume: {
      wrapper: "bg-[#F1E8FF]",
      icon: "text-[#8B5CF6]",
    },
    jobs: {
      wrapper: "bg-[#FFF1E5]",
      icon: "text-[#F59E0B]",
    },
    projects: {
      wrapper: "bg-[#F1E8FF]",
      icon: "text-[#8B5CF6]",
    },
  };
  
  function SuggestionItem({ suggestion }) {
    const Icon = iconMap[suggestion.type] || Sparkles;
    const style = iconStyles[suggestion.type] || iconStyles.resume;
  
    return (
      <button
        type="button"
        className="
          flex w-full
          items-center gap-2
          rounded-xl
          border border-[#E9E3F0]
          bg-white/70
          px-2.5 py-1.5
          text-left
          transition
          hover:border-[#D8C9F5]
          hover:bg-[#FAF7FF]
        "
      >
        <div
          className={`
            flex h-6 w-6 shrink-0
            items-center justify-center
            rounded-lg
            ${style.wrapper}
          `}
        >
          <Icon
            size={12}
            strokeWidth={2}
            className={style.icon}
          />
        </div>
  
        <p
          className="
            min-w-0
            flex-1
            font-[Inter]
            text-[9px]
            leading-snug
            text-[#514B63]
          "
        >
          {suggestion.text}
        </p>
  
        <ChevronRight
          size={13}
          className="shrink-0 text-[#9B91AA]"
        />
      </button>
    );
  }
  
  export default function AISuggestions({
    suggestions = [],
  }) {
    return (
      <div
        className="
          rounded-2xl
          border border-[#E9E3F0]
          bg-white/70
          px-4 py-3
        "
      >
        <h2
          className="
            font-[Manrope]
            text-sm
            font-bold
            text-[#172044]
          "
        >
          AI Suggestions for You
        </h2>
  
        <div className="mt-2 space-y-1.5">
          {suggestions.map((suggestion) => (
            <SuggestionItem
              key={suggestion.id}
              suggestion={suggestion}
            />
          ))}
        </div>
      </div>
    );
  }