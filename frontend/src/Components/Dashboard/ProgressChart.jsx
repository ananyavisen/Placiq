import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { ChevronDown } from "lucide-react";

export default function ProgressChart() {
  const data = [
    { day: "Mon", value: 12 },
    { day: "Tue", value: 30 },
    { day: "Wed", value: 28 },
    { day: "Thu", value: 48 },
    { day: "Fri", value: 50 },
    { day: "Sat", value: 74 },
    { day: "Sun", value: 72 },
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 h-[300px]">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-[#18245c]">
          Your Progress
        </h2>

        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 text-sm text-slate-600 bg-white hover:bg-slate-50 transition">
          This Week
          <ChevronDown size={15} />
        </button>
      </div>

      {/* Chart */}
      <div className="w-full h-[210px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="progressGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity={0.28} />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity={0.03} />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              stroke="#EEF0F6"
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94A3B8", fontSize: 12 }}
            />

            <YAxis
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94A3B8", fontSize: 11 }}
              tickFormatter={(value) => `${value}%`}
            />

            <Tooltip
              cursor={{ stroke: "#DDD6FE", strokeDasharray: "4 4" }}
              formatter={(value) => [`${value}%`, "Progress"]}
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#7C3AED"
              strokeWidth={3}
              fill="url(#progressGradient)"
              dot={{
                r: 4,
                fill: "#7C3AED",
                stroke: "#FFFFFF",
                strokeWidth: 2,
              }}
              activeDot={{
                r: 6,
                fill: "#7C3AED",
                stroke: "#FFFFFF",
                strokeWidth: 2,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}