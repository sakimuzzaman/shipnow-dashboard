import { MoreHorizontal } from "lucide-react";

import {
  shipmentAlerts,
  shipmentAlertSummary,
} from "@/data/dashboard";

import ShipmentAlertItem from "./ShipmentAlertItem";
import ShipmentAlertSummaryCard from "./ShipmentAlertSummaryCard";

export default function ShipmentAlerts() {
  const totalDelays = shipmentAlertSummary.reduce(
    (total, item) => total + item.count,
    0
  );

  return (
    <section
      className="
        h-[443px]
        w-[299px]
        rounded-[12px]
        bg-[#FEFEFE]
        p-[16px]
      "
    >
      {/* Header */}
      <header
        className="
          flex
          h-[28px]
          w-[267px]
          items-center
          justify-between
        "
      >
        <h2 className="text-[12px] font-semibold text-[#34363A]">
          Shipment Alerts
        </h2>

        <button
          type="button"
          aria-label="Shipment alert options"
          className="
            flex
            h-[22px]
            w-[22px]
            items-center
            justify-center
            rounded-[6px]
            bg-[#F5F5F6]
            text-[#8A8D94]
            transition-colors
            hover:bg-[#ECECEF]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#856DF3]
          "
        >
          <MoreHorizontal
            size={13}
            strokeWidth={1.6}
          />
        </button>
      </header>

      {/* Total */}
      <div
        className="
          mt-[8px]
          flex
          h-[26px]
          w-[267px]
          items-center
          gap-[8px]
        "
      >
        <strong className="text-[24px] font-bold leading-[110%] text-[#333333]">
          {totalDelays}
        </strong>

        <span className="text-[14px] font-normal leading-[125%] text-[#757575]">
          Delays Detected
        </span>
      </div>

      {/* Summary cards */}
      <div
        className="
          mt-[16px]
          flex
          h-[101px]
          w-[267px]
          gap-[4px]
          rounded-[12px]
        "
      >
        {shipmentAlertSummary.map((alert) => (
          <ShipmentAlertSummaryCard
            key={alert.id}
            alert={alert}
          />
        ))}
      </div>

      {/* Alert list */}
      <div
        className="
          mt-[16px]
          flex
          h-[200px]
          w-[267px]
          flex-col
          gap-[16px]
          py-[8px]
        "
      >
        {shipmentAlerts.map((alert) => (
          <ShipmentAlertItem
            key={alert.id}
            alert={alert}
          />
        ))}
      </div>
    </section>
  );
}