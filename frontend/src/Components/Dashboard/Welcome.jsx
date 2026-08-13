import { Search } from "lucide-react";
export default function Welcome() {

  const hour = new Date().getHours();

   let greeting = "";

    if (hour >= 5 && hour < 12) {
      greeting = "Good Morning";
    } else if (hour >= 12 && hour < 17) {
      greeting = "Good Afternoon";
    } else {
      greeting = "Good Evening";
     }

  return (
    <div className="mt-8">
      <h1 className="text-[40px] font-bold text-[#1F245C] leading-none">
        {greeting}, Anek! <span>👋</span>
      </h1>

      <p className="mt-4 text-[19px] text-[#6B7280]">
        Let's continue your placement preparation journey.
      </p>
    
    {/* Search */}
        <div className="mt-3 w-[360px] relative">
        <Search
        size={18}
         className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
          />
        <input
         type="text"
        placeholder="Search anything..."
         className="w-full h-12 rounded-full border border-[#ECECEC] pl-12 pr-4 text-[15px] outline-none focus:border-[#8B5CF6]"
        //  className="w-full h-11 rounded-full bg-white/80 backdrop-blur-md border border-white/40"
         />
        </div>
        </div>
  );
}