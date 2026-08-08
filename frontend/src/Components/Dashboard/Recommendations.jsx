import { ArrowRight } from "lucide-react";

import dsaRoadmap from "../../assets/recommendations/dsa-roadmap.svg";
import arrayProblems from "../../assets/recommendations/arrayproblems.svg";
import systemDesign from "../../assets/recommendations/systemdesign.svg";

export default function Recommendations() {
  const recommendations = [
  {
    image: dsaRoadmap,
    title: "DSA Roadmap",
    description: "Continue your roadmap",
    action: "Continue",
  },
  {
    image: arrayProblems,
    title: "Top 50 Array Problems",
    description: "Essential problems",
    action: "Start Practice",
  },
  {
    image: systemDesign,
    title: "System Design Basics",
    description: "Learn fundamentals",
    action: "Start Learning",
  },
];

  return (
    <div className="mt-6">

      {/* Heading */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-[#18245c]">
          Recommended for You
        </h2>

        <button className="text-sm font-medium text-violet-600 hover:text-violet-700">
          View all
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-4">
        {recommendations.map((item) => (
        //   <div
        //     key={item.title}
        //     className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        //   >
        //     {/* Image */}
        //     <div className="h-28 rounded-2xl bg-[#F8F6FF] flex items-center justify-center overflow-hidden">
        //       <img
        //         src={item.image}
        //         alt={item.title}
        //         className="h-full w-full object-contain"
        //       />
        //     </div>

        //     {/* Content */}
        //     <h3 className="mt-4 text-[16px] font-semibold text-[#18245c]">
        //       {item.title}
        //     </h3>

        //     <p className="mt-1 text-sm text-slate-500 leading-5">
        //       {item.description}
        //     </p>

        //     {/* Action */}
        //     <button className="mt-4 flex items-center gap-1 text-sm font-medium text-violet-600 hover:text-violet-700">
        //       {item.action}
        //       <ArrowRight size={15} />
        //     </button>
        //   </div>
        <div
  key={item.title}
  className="bg-[#F8F3FF] rounded-3xl p-4 shadow-sm border border-[#EEE5FF]
           hover:shadow-lg hover:-translate-y-1 transition-all duration-300
           min-h-[200px] flex overflow-hidden"
>
  {/* Left content */}
  <div className="w-[60%] flex flex-col justify-between pr-2">
    <div>
      <h3 className="text-[15px] font-semibold text-[#18245c] whitespace-nowrap">
        {item.title}
      </h3>

      <p className="mt-2 text-sm text-slate-500 leading-5">
        {item.description}
      </p>
    </div>

    <button className="mt-5 w-[140px] inline-flex items-center justify-center gap-2
             py-3 rounded-xl
             bg-violet-100 text-violet-600
             text-sm font-semibold
             hover:bg-violet-200
             transition-all duration-200 whitespace-nowrap">
          {item.action}
          <ArrowRight size={16} />
    </button>
  </div>

  {/* Right illustration */}
  <div className="w-[40%] flex items-center justify-center -translate-x-1"> 
        <img       
        src={item.image}   
        alt={item.title}       
        className="w-40 h-40 object-contain scale-[1.75] "    
         />   
   </div>
   </div>
        ))}
      </div>

    </div>
  );
}