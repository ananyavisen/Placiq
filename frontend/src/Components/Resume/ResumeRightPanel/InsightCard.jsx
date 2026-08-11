import { ArrowRight } from "lucide-react";

const variants = {
  success: {
    border: "border-emerald-100",
    bg: "from-emerald-300 to-green-50",
    iconBg: "bg-emerald-100",
    icon: "text-emerald-600",
    text: "text-emerald-600",
  },

  danger: {
    border: "border-red-100",
    bg: "from-red-300 to-rose-50",
    iconBg: "bg-red-100",
    icon: "text-red-500",
    text: "text-red-500",
  },

  primary: {
    border: "border-violet-100",
    bg: "from-violet-300 to-purple-50",
    iconBg: "bg-violet-100",
    icon: "text-violet-600",
    text: "text-violet-600",
  },

  info: {
    border: "border-sky-100",
    bg: "from-sky-300 to-indigo-50",
    iconBg: "bg-sky-100",
    icon: "text-sky-600",
    text: "text-sky-600",
  },
};

export default function InsightCard({
  type,
  icon: Icon,
  title,
  heading,
  description,
  action,
  className=""
}) {
  const style = variants[type];

  return (
    <div
    className={`rounded-2xl border ${style.border} bg-linear-to-r ${style.bg} p-3 ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className={`rounded-xl ${style.iconBg} p-2`}>
          <Icon className={style.icon} size={20} />
        </div>

        <div>
          <p className={`text-xs font-semibold uppercase ${style.text}`}>
            {title}
          </p>

          <h3 className="mt-1 text-base font-semibold text-slate-800">
            {heading}
          </h3>
        </div>
      </div>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        {description}
      </p>

      {action && (
        <button
          className={`mt-3 flex items-center gap-2 text-sm font-semibold ${style.text}`}
        >
          {action}
          <ArrowRight size={16} />
        </button>
      )}
    </div>
  );
}