"use client";

import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
} from "recharts";

import { MoreHorizontal } from "lucide-react";

import { shipmentTypeData } from "@/data/dashboard";
import ShipmentTypeItem from "./ShipmentTypeItem";

export default function ShipmentTypeChart() {
  const totalShipments = shipmentTypeData.reduce(
    (total, item) => total + item.shipments,
    0
  );

  return (
    <section
      className="
        h-[394px]
        w-[299px]
        rounded-[12px]
        bg-[#FEFEFE]
        p-[16px]
      "
    >
      {/* Header */}
      <header className="flex h-[28px] w-full items-center justify-between">
        <h2 className="text-[12px] font-semibold text-[#34363A]">
          Shipment Type
        </h2>

        <button
          type="button"
          aria-label="Shipment type options"
          className="
            flex
            h-[22px]
            w-[22px]
            items-center
            justify-center
            rounded-[6px]
            bg-[#F5F5F6]
            text-[#8C8E94]
            transition
            hover:bg-[#ECECEF]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#7563CF]
          "
        >
          <MoreHorizontal
            size={13}
            strokeWidth={1.6}
          />
        </button>
      </header>

      {/* Donut chart */}
      <div className="relative mx-auto mt-[8px] h-[217px] w-[217px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <PieChart>
            <Pie
              data={shipmentTypeData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={96.5}
              startAngle={90}
              endAngle={-270}
              paddingAngle={0}
              stroke="none"
            >
              {shipmentTypeData.map((item) => (
                <Cell
                  key={item.name}
                  fill={item.color}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Center content */}
        <div
          className="
            pointer-events-none
            absolute
            left-[68px]
            top-[84px]
            flex
            h-[51px]
            w-[82px]
            flex-col
            items-center
            justify-center
            gap-[4px]
            text-center
          "
        >
          <span className="text-[8px] text-[#9A9CA2]">
            Total Shipment
          </span>

          <strong className="text-[18px] font-semibold leading-[21px] text-[#34363A]">
            {totalShipments.toLocaleString()}
          </strong>
        </div>
      </div>

      {/* Shipment type list */}
      <div className="mt-[12px] grid grid-cols-2 gap-x-[16px] gap-y-[15px]">
        {shipmentTypeData.map((item) => (
          <ShipmentTypeItem
            key={item.name}
            name={item.name}
            percentage={item.value}
            shipments={item.shipments}
            color={item.color}
          />
        ))}
      </div>
    </section>
  );
}