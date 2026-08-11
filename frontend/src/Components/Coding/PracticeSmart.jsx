import robot from "../../assets/robot.png";

export default function PracticeSmart() {
  return (
    <div className="mt-5 rounded-3xl bg-linear-to-r from-[#F7F1FF]/70 to-[#EEE4FF]/70 p-5 flex items-center justify-between">

      <div>
        <h3 className="font-semibold text-[#2D2555]">
          ✨ Practice Smart
        </h3>

        <p className="text-sm text-gray-600 mt-2 leading-6 max-w-45">
          Solve consistently and track your progress to crack any interview!
        </p>
      </div>

      <img
        src={robot}
        alt="Robot"
        className="w-24 object-contain"
      />

    </div>
  );
}