import { ChevronRight } from "lucide-react";

const StatCard = ({
  icon,
  title,
  value,
  suffix = "",
  description,
  buttonText,
  buttonColor = "bg-violet-100 text-violet-600",
}) => {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 h-190px">
      <div className="flex justify-between items-start">
         <h3 className="mt-4 text-sm text-slate-500 font-medium">
        {title}
      </h3>
        

        <ChevronRight
          size={20}
          className="text-slate-400 cursor-pointer hover:text-violet-600"
        />
      </div>
      <div className="w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center text-violet-600">
          {icon}
        </div>

     

      <div className="mt-2 flex items-end gap-1">
        <span className="text-3xl font-bold text-[#1C225B]">
          {value}
        </span>

        {suffix && (
          <span className="text-lg font-semibold text-slate-500 mb-1">
            {suffix}
          </span>
        )}
      </div>

      <p className="mt-2 text-sm text-slate-500 leading-6">
        {description}
      </p>

      {buttonText && (
        <button
          className={`mt-3 px-5 py-2 rounded-xl text-sm font-medium ${buttonColor}`}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default StatCard;