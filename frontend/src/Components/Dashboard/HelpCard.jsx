import { Headset } from "lucide-react";
export default function HelpCard() {
  return (
    <div className="bg-white rounded-[24px] shadow-sm border border-[#F2F2F2] p-5">
      
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[#F5F1FF] flex items-center justify-center">
          <Headset
            size={20}
            className="text-[#7C4DFF]"
          />
        </div>

        <div>
          <h3 className="text-[14px] font-semibold text-[#2B224C]">
            Need Help?
          </h3>

          <p className="text-[12px] text-[#6B7280]">
            Contact Support
          </p>
        </div>

      </div>

    </div>
  );
}