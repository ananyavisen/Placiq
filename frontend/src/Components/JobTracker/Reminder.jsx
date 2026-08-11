import {
    Clock3,
    Bell,
    CalendarDays,
  } from "lucide-react";
  import { useState } from "react";
  
  const reminderConfig = {
    deadline: {
      icon: Clock3,
      iconBg: "bg-[#FFECEF]",
      iconColor: "text-[#F43F5E]",
    },
    followup: {
      icon: Bell,
      iconBg: "bg-[#FFF4E8]",
      iconColor: "text-[#F59E0B]",
    },
    interview: {
      icon: CalendarDays,
      iconBg: "bg-[#EAF1FF]",
      iconColor: "text-[#3B82F6]",
    },
  };
  
  function ReminderItem({ reminder }) {
    const config =
      reminderConfig[reminder.type] || reminderConfig.deadline;
  
    const Icon = config.icon;
  
    return (
      <button
        type="button"
        className="
          flex w-full
          items-center gap-3
          px-3 py-2
          text-left
          transition
          hover:bg-[#FBF9FF]
        "
      >
        {/* Icon */}
        <div
          className={`
            flex h-8 w-8 shrink-0
            items-center justify-center
            rounded-lg
            ${config.iconBg}
          `}
        >
          <Icon
            size={15}
            strokeWidth={2}
            className={config.iconColor}
          />
        </div>
  
        {/* Content */}
        <div className="min-w-0 flex-1">
          <p
            className="
              truncate
              font-[Manrope]
              text-[10px]
              font-bold
              text-[#172044]
            "
          >
            {reminder.title}
          </p>
  
          <p
            className="
              mt-0.5
              truncate
              font-[Inter]
              text-[9px]
              text-[#70697D]
            "
          >
            {reminder.description}
          </p>
        </div>
  
        {/* Time */}
        {reminder.time && (
          <span
            className="
              shrink-0
              font-[Inter]
              text-[9px]
              font-medium
              text-[#70697D]
            "
          >
            {reminder.time}
          </span>
        )}
      </button>
    );
  }
  
  export default function ReminderPanel({
    reminders = [],
    onViewAll,
  }) {
    const [notificationsEnabled, setNotificationsEnabled] =
      useState(
        "Notification" in window &&
          Notification.permission === "granted"
      );
  
    const enableNotifications = async () => {
      if (!("Notification" in window)) {
        alert("Your browser does not support notifications.");
        return;
      }
  
      if (Notification.permission === "granted") {
        setNotificationsEnabled(true);
        return;
      }
  
      const permission =
        await Notification.requestPermission();
  
      if (permission === "granted") {
        setNotificationsEnabled(true);
  
        new Notification("Placig Reminder 🔔", {
          body: "Notifications are now enabled!",
        });
      }
    };
  
    return (
      <div
        className="
          overflow-hidden
          rounded-2xl
          border border-[#E9E3F0]
          bg-white/70
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 pt-3 pb-2">
          <h2
            className="
              font-[Manrope]
              text-sm
              font-bold
              text-[#172044]
            "
          >
            Today's Reminders
          </h2>
  
          <div className="flex items-center gap-3">
            {/* Notification */}
            <button
              type="button"
              onClick={enableNotifications}
              title={
                notificationsEnabled
                  ? "Notifications enabled"
                  : "Enable notifications"
              }
              className={`
                transition
                ${
                  notificationsEnabled
                    ? "text-[#7C3AED]"
                    : "text-[#A49BAF] hover:text-[#7C3AED]"
                }
              `}
            >
              <Bell
                size={14}
                fill={
                  notificationsEnabled
                    ? "currentColor"
                    : "none"
                }
              />
            </button>
  
            {/* View All */}
            <button
              type="button"
              onClick={onViewAll}
              className="
                font-[Inter]
                text-[10px]
                font-semibold
                text-[#7C3AED]
                transition
                hover:text-[#6D28D9]
              "
            >
              View All
            </button>
          </div>
        </div>
  
        {/* Reminders */}
        <div className="divide-y divide-[#F0ECF5]">
          {reminders.map((reminder) => (
            <ReminderItem
              key={reminder.id}
              reminder={reminder}
            />
          ))}
        </div>
      </div>
    );
  }