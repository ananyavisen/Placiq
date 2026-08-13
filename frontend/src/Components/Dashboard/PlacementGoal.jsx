import { Target } from "lucide-react";
import googleLogo from "../../assets/companies/google.svg";
import microsoftLogo from "../../assets/companies/microsoft.svg";
import adobeLogo from "../../assets/companies/adobe.svg";
import { ChevronRight } from "lucide-react";


export default function PlacementGoal() {
  return (
    <div className="bg-white shadow-sm rounded-2xl p-4">
        <h3 className="flex items-center gap-2 text-[18px] font-bold text-[#7C4DFF]">
           <Target size={19} />
           Placement Goal
        </h3>
     <p className="text-[16px] font-semibold text-[#2B224C] mt-1">
       Software Engineer
     </p>
     <p className="text-[13px] text-gray-500 mt-1">
      Target Companies
     </p>
     <div className="flex items-center gap-1 mt-4">
  <img
    src={googleLogo}
    alt="Google"
    className="w-8 h-8 rounded-full bg-white p-1 shadow-sm"
  />

  <img
    src={microsoftLogo}
    alt="Microsoft"
    className="w-8 h-8 rounded-full bg-white p-1 shadow-sm"
  />

  <img
    src={adobeLogo}
    alt="Adobe"
    className="w-8 h-8 rounded-full bg-white p-1 shadow-sm"
  />

  <div className="w-5 h-5 rounded-full bg-[#EDE7FF] flex items-center justify-center text-[10px] font-medium text-[#6C3CF0]">
    +3
  </div>
</div>
<button className="mt-5 w-full bg-[#EEE8FF] hover:bg-[#E5DCFF] transition rounded-2xl h-11 flex items-center justify-center gap-2 text-[#6C3CF0] font-medium">
  Edit Goal
  <ChevronRight size={18} />
</button>
    </div>
  );
}