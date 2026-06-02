"use client";

import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "SEG", leads: 40 },
  { name: "TER", leads: 55 },
  { name: "QUA", leads: 70 },
  { name: "QUI", leads: 85 },
  { name: "SEX", leads: 75 },
  { name: "SÁB", leads: 72 },
  { name: "DOM", leads: 90 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#05325E] text-white text-[11px] font-bold py-1.5 px-3 rounded-lg shadow-lg">
        {payload[0].value} Leads
      </div>
    );
  }
  return null;
};

// Ponto customizado quando passa o mouse (bolinha azul com borda branca grossa)
const CustomDot = (props: any) => {
  const { cx, cy } = props;
  return (
    <circle
      cx={cx}
      cy={cy}
      r={6}
      stroke="white"
      strokeWidth={4}
      fill="#4A90E2"
      style={{ filter: "drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1))" }}
    />
  );
};

export default function PerformanceChart() {
  return (
    <div className="h-64 w-full relative -ml-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4A90E2" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#4A90E2" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#94a3b8", fontSize: 10, fontWeight: "bold" }}
            dy={10}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={false}
          />
          <Area
            type="monotone"
            dataKey="leads"
            stroke="#4A90E2"
            strokeWidth={4}
            fillOpacity={1}
            fill="url(#colorLeads)"
            activeDot={<CustomDot />}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
