import {
  CalendarDays,
  Clock,
  CheckCircle2,
  Circle,
  ArrowRight,
} from "lucide-react";

export default function Schedule() {
  const scheduleItems = [
    {
      date: "24",
      month: "MAY",
      title: "Mock Interview",
      subtitle: "Frontend Developer",
      time: "10:00 AM",
      color: "text-indigo-600",
    },
    {
      date: "25",
      month: "MAY",
      title: "DSA Assessment",
      subtitle: "Arrays & Strings",
      time: "02:00 PM",
      color: "text-pink-500",
    },
  ];

  const tasks = [
    { title: "DSA – Arrays Practice", completed: true },
    { title: "System Design Basics", completed: true },
    { title: "Aptitude Test", completed: true },
    { title: "Mock Interview", completed: false },
    { title: "Update Resume", completed: false },
  ];

  return (
    <div className="space-y-5">

      {/* Upcoming Schedule */}
      <div className="rounded-3xl bg-white/80 p-5 shadow-sm border border-white/70">

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-[#18245c]">
            Upcoming Schedule
          </h2>

          <button className="text-sm font-medium text-violet-600 hover:text-violet-700">
            View all
          </button>
        </div>

        {/* Schedule Items */}
        <div className="space-y-3">
          {scheduleItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-2xl border border-violet-100 bg-white/70 p-3"
            >

              {/* Date */}
              <div
                className={`flex h-16 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-violet-50 ${item.color}`}
              >
                <span className="text-[10px] font-medium">
                  {item.month}
                </span>

                <span className="text-xl font-bold leading-none">
                  {item.date}
                </span>
              </div>

              {/* Details */}
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-[#18245c]">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  {item.subtitle}
                </p>
              </div>

              {/* Time */}
              <div className="flex items-center gap-1 text-xs text-slate-500">
                <Clock size={13} />
                <span>{item.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Calendar Button */}
        <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-50 py-2.5 text-sm font-medium text-violet-600 transition hover:bg-violet-100">
          <CalendarDays size={16} />
          Go to Calendar
        </button>
      </div>


      {/* Today's Plan */}
      <div className="rounded-3xl bg-white/80 p-5 shadow-sm border border-white/70">

        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-[#18245c]">
            Today's Plan
          </h2>

          <span className="text-xs font-medium text-slate-500">
            3/5 completed
          </span>
        </div>

        {/* Progress */}
        <div className="mt-4">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-violet-100">
            <div className="h-full w-[60%] rounded-full bg-violet-500" />
          </div>
        </div>

        {/* Tasks */}
        <div className="mt-4 space-y-4">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="flex items-center gap-3"
            >
              {task.completed ? (
                <CheckCircle2
                  size={19}
                  className="shrink-0 text-violet-500"
                />
              ) : (
                <Circle
                  size={19}
                  className="shrink-0 text-slate-300"
                />
              )}

              <span
                className={`flex-1 text-sm ${
                  task.completed
                    ? "text-[#18245c]"
                    : "text-slate-600"
                }`}
              >
                {task.title}
              </span>

              <span
                className={`text-xs font-medium ${
                  task.completed
                    ? "text-green-600"
                    : "text-orange-500"
                }`}
              >
                {task.completed ? "Completed" : "Pending"}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}