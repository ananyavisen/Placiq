import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function Welcome() {
  const [userName, setUserName] = useState("");

  const hour = new Date().getHours();

  let greeting = "";

  if (hour >= 5 && hour < 12) {
    greeting = "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/auth/me/",
          {
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error("User is not authenticated");
        }

        const data = await response.json();

        console.log("Current user:", data);

        setUserName(data.name?.trim().split(/\s+/)[0] || "User");;
      } catch (error) {
        console.error("Failed to get current user:", error);
      }
    };

    getUser();
  }, []);

  return (
    <div className="mt-8">
      <h1 className="text-[40px] font-bold text-[#1F245C] leading-none">
        {greeting}, {userName}! <span>👋</span>
      </h1>

      <p className="mt-4 text-[19px] text-[#6B7280]">
        Let's continue your placement preparation journey.
      </p>

      <div className="mt-3 w-90 relative">
        <Search
          size={18}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search anything..."
          className="w-full h-12 rounded-full border border-[#ECECEC] pl-12 pr-4 text-[15px] outline-none focus:border-[#8B5CF6]"
        />
      </div>
    </div>
  );
}