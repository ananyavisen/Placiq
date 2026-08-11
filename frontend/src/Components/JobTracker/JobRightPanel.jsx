import { useState } from "react";
import ReminderPanel from "./Reminder";
import { reminders } from "./reminderData";
import Calender from "./Calender"
import AIInsights from "./AIinsights";
export default function JobRightPanel() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(
    "Notification" in window &&
      Notification.permission === "granted"
  );

  const enableNotifications = async () => {
    // Browser support check
    if (!("Notification" in window)) {
      alert("Your browser does not support notifications.");
      return;
    }

    // Already granted
    if (Notification.permission === "granted") {
      setNotificationsEnabled(true);
      return;
    }

    // Ask user
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      setNotificationsEnabled(true);

      // Test notification
      new Notification("Placig Reminder 🔔", {
        body: "Notifications are now enabled!",
      });
    }
  };

  return (
    <div className="flex flex-col gap-4">

      <ReminderPanel reminders={reminders} />

      <button
        type="button"
        onClick={enableNotifications}
        disabled={notificationsEnabled}
        className="
          rounded-xl
          border border-[#E9E3F0]
          bg-white
          px-4 py-2
          font-[Inter]
          text-xs
          font-medium
          text-[#7C3AED]
          transition
          hover:bg-[#F9F6FF]
          disabled:cursor-default
          disabled:opacity-60
        "
      >
        {notificationsEnabled
          ? "Notifications Enabled"
          : "Enable Reminders"}
      </button>
      <Calender />
      <AIInsights
        companiesApplied={28}
        responseRate={42}
      />
    </div>
  );
}