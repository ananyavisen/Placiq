import { Search, Bell, ChevronDown } from "lucide-react";
export default function Topbar() {
  return (
    <div className="mt-3 py-4 px-8 flex items-center">
      
      {/* Search
        <div className="w-[360px] relative">
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
        </div> */}

      {/* Right Side */}
      <div className="ml-auto flex items-center gap-4">

  {/* Notification */}
  <div className="relative cursor-pointer">
    <Bell
      size={23}
      className="text-[#1F245C] hover:text-[#6C63FF] transition"
    />

    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
  </div>

  {/* Profile */}
  <div className="flex items-center gap-2 cursor-pointer">
    <img
      src="https://i.pravatar.cc/100?img=32"
      alt="Profile"
      className="w-11 h-11 rounded-full object-cover"
    />

    <span className="text-[16px] font-medium text-[#1F245C]">
      Anekvarna
    </span>

    <ChevronDown
      size={18}
      className="text-gray-500"
    />
  </div>

</div>

    </div>
  );
}