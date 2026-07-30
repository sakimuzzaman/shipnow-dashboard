"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { shipmentStatistics } from "@/data/dashboard";

export default function ShipmentStatisticsChart() {
  return (
    <section
      className="
        h-[259px]
        w-[369px]
        rounded-[12px]
        bg-[#FEFEFE]
        px-[16px]
        pb-[12px]
        pt-[16px]
      "
    >
      {/* Header */}
      <div className="flex h-[28px] items-center justify-between">
        <div>
          <h2 className="text-[12px] font-semibold text-[#34363A]">
            Shipment Statistic
          </h2>

          <div className="mt-[4px] flex items-center gap-[6px]">
            <span className="text-[16px] font-semibold text-[#34363A]">
              4,352
            </span>

            <span className="rounded bg-[#E8F6ED] px-[4px] py-[1px] text-[7px] font-medium text-[#3E9C65]">
              +4.7%
            </span>
          </div>
        </div>

        <button
          type="button"
          className="rounded-[5px] bg-[#F5F5F6] px-[8px] py-[5px] text-[8px] text-[#777A81]"
        >
          Last Year
        </button>
      </div>

      {/* Chart */}
      <div className="mt-[30px] h-[175px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart
            data={shipmentStatistics}
            margin={{
              top: 10,
              right: 0,
              left: -15,
              bottom: 0,
            }}
          >
            <CartesianGrid
              vertical={false}
              stroke="#ECECEF"
              strokeDasharray="0"
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
              ticks={[0, 1000, 2000, 3000, 4000]}
              tickFormatter={(value) =>
                value === 0
                  ? "0"
                  : `${value / 1000}K`
              }
            />

            <Tooltip
              cursor={{
                fill: "rgba(117, 99, 207, 0.05)",
              }}
              contentStyle={{
                border: "none",
                borderRadius: "6px",
                fontSize: "9px",
              }}
            />

            <Bar
              dataKey="shipments"
              radius={[2, 2, 0, 0]}
              maxBarSize={20}
            >
              {shipmentStatistics.map((entry) => (
                <Cell
                  key={entry.month}
                  fill={
                    entry.month === "May"
                      ? "#7563CF"
                      : "#D9D6ED"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}