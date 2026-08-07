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
    </div>
  );
}