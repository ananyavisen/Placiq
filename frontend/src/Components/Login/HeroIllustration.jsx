import HeroImg from "../../assets/Hero.png";

export default function HeroIllustration() {
  return (
    <div className="flex-[1.4] flex items-baseline-last justify-center">

      <img
        src={HeroImg}
        alt="Hero"
        className="
            justify-center
            float-left
            object-contain
            select-none
           
        "
      />

    </div>
  );
}