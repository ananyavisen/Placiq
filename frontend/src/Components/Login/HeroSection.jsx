import logo from "../../assets/logo.png";
import FeatureList from "./FeatureList";
import HeroImg from "../../assets/Hero.png"

export default function HeroSection() {
  return (
    <div className="p-4 flex-1 flex-col">

      <div className="flex items-center gap-3">

        <img src={logo} alt="logo" className="w-25 h-25" />

        <div>
          <h1 className="text-2xl font-[Manrope] font-bold">Placiq</h1>
          <p className="text-[#595063] font-[Inter] text-sm">
            Prep today, get placed tomorrow
          </p>
        </div>
      </div>
        <div className="mr-15 p-4">
            <h1 className="font-[DM_Serif_Display] text-[#49344C] text-5xl p-0.5">Your Placement<br /> Journey, <span className="text-[#EA7567]">Structured</span> </h1>
            <p className="text-[#595063] font-[Inter] text-lg">
            Practice. Grow. Get Placed.
          </p>
          <p className="text-[#595063] font-[Inter] text-sm">
            All the tools you need to crack your dream job at one place.
          </p><br />
          <FeatureList />
          
        </div>
    </div>
  );
}