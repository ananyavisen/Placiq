import ApplicationStatCard from "./ApplicationStatCard";

export default function ApplicationStats() {
  const stats = [
    {
      type: "applied",
      label: "Applied",
      value: "28",
      footer: "↑ 5 this week",
    },
    {
      type: "pending",
      label: "OA / Test Pending",
      value: "9",
      footer: "2 due this week",
    },
    {
      type: "interviews",
      label: "Interviews",
      value: "6",
      footer: "3 upcoming",
    },
    {
      type: "offers",
      label: "Offers",
      value: "1",
      footer: "Congrats! 🎉",
    },
    {
      type: "rejected",
      label: "Rejected",
      value: "7",
      footer: "Keep going!",
    },
  ];

  return (
    <div className="flex gap-3">
      {stats.map((stat) => (
        <ApplicationStatCard
          key={stat.type}
          {...stat}
        />
      ))}
    </div>
  );
}