const avatarStyles = [
  "bg-[#F0E8FF] text-[#7C3AED] border-[#E3D5FF]",
  "bg-[#E7F8F0] text-[#059669] border-[#CBEEDD]",
  "bg-[#FFF0E8] text-[#E85D04] border-[#F8D8C5]",
  "bg-[#EAF2FF] text-[#2563EB] border-[#D5E3FF]",
  "bg-[#FFEAF3] text-[#DB2777] border-[#F8D2E2]",
];

function getAvatarStyle(company = "") {
  let hash = 0;

  for (let i = 0; i < company.length; i++) {
    hash = company.charCodeAt(i) + ((hash << 5) - hash);
  }

  return avatarStyles[Math.abs(hash) % avatarStyles.length];
}

export default function CompanyAvatar({
  company = "Unknown",
  size = "md",
}) {
  const initials = company
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  const style = getAvatarStyle(company);

  return (
    <div
      className={`
        ${size === "sm" ? "h-9 w-9 text-xs" : "h-12 w-12 text-sm"}
        flex shrink-0 items-center justify-center
        rounded-xl
        border
        font-[Manrope]
        font-bold
        ${style}
      `}
    >
      {initials}
    </div>
  );
}