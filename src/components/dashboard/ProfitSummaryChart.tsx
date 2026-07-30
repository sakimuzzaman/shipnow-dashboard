"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { profitSummary } from "@/data/dashboard";

export default function ProfitSummaryChart() {
  return (
    <section
      className="
        h-[259px]
        w-[469px]
        rounded-[12px]
        bg-[#FEFEFE]
        px-[16px]
        pb-[12px]
        pt-[16px]
      "
    >
      {/* Header */}
      <div className="flex h-[28px] items-start justify-between">
        <div>
          <h2 className="text-[12px] font-semibold text-[#34363A]">
            Profit Summary
          </h2>

          <div className="mt-[4px] flex items-center gap-[6px]">
            <span className="text-[16px] font-semibold text-[#34363A]">
              $624,550
            </span>

            <span className="rounded bg-[#E8F6ED] px-[4px] py-[1px] text-[7px] font-medium text-[#3E9C65]">
              +5.62%
            </span>
          </div>
        </div>

        <button
          type="button"
          className="rounded-[5px] bg-[#F5F5F6] px-[8px] py-[5px] text-[8px] text-[#777A81]"
        >
          Last 8 Months
        </button>
      </div>

      {/* Chart */}
      <div className="mt-[30px] h-[175px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart
            data={profitSummary}
            margin={{
              top: 10,
              right: 0,
              left: -12,
              bottom: 0,
            }}
            barGap={3}
          >
            <CartesianGrid
              vertical={false}
              stroke="#ECECEF"
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 7,
                fill: "#9A9CA2",
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 7,
                fill: "#9A9CA2",
              }}
              ticks={[
                0,
                10000,
                30000,
                50000,
                70000,
              ]}
              tickFormatter={(value) => {
                if (value === 0) {
                  return "0";
                }

                return `$${value / 1000}K`;
              }}
            />

            <Tooltip
              contentStyle={{
                border: "none",
                borderRadius: "6px",
                fontSize: "9px",
              }}
            />

            <Legend
              verticalAlign="top"
              align="right"
              iconType="circle"
              iconSize={5}
              wrapperStyle={{
                top: -6,
                right: 0,
                fontSize: "7px",
              }}
            />

            <Bar
              dataKey="revenue"
              name="Revenue"
              fill="#C9C3EA"
              radius={[3, 3, 0, 0]}
              maxBarSize={10}
            />

            <Bar
              dataKey="cost"
              name="Cost"
              fill="#3A3B3E"
              radius={[3, 3, 0, 0]}
              maxBarSize={10}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}