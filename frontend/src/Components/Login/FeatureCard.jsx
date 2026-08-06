import React from "react";

export default function FeatureCard({
  icon,
  title,
  subtitle,
}) {
  return (
    <div className="flex items-center gap-2 cursor-pointer group">

      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3E8FF] transition-all duration-300 group-hover:scale-105">
        {icon}
      </div>

      <div>
        <h3 className="text-[14px] font-semibold text-[#2F314D]">
          {title}
        </h3>

        <p className="text-[10px] text-[#6B6478]">
          {subtitle}
        </p>
      </div>

    </div>
  );
}