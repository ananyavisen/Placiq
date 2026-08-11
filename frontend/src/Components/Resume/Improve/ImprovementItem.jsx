export default function ImprovementItem({
    icon: Icon,
    title,
    level,
    levelColor,
    description,
    buttonColor,
  }) {
    return (
      <div className="flex items-center justify-between py-4 border-b border-gray-100 last:border-none">
        <div className="flex gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50">
            <Icon className="h-5 w-5 text-orange-500" />
          </div>
  
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-slate-800">
                {title}
              </h3>
  
              <span
                className={`rounded-md px-2 py-0.5 text-xs font-medium ${levelColor}`}
              >
                {level}
              </span>
            </div>
  
            <p className="mt-1 text-sm text-slate-500 max-w-xl">
              {description}
            </p>
          </div>
        </div>
  
      </div>
    );
  }