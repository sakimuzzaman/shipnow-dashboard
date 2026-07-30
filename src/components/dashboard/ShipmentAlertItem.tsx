import { ArrowUpRight } from "lucide-react";

import type { ShipmentAlert } from "@/types/dashboard";

import ShipmentAlertIcon from "./ShipmentAlertIcon";

interface ShipmentAlertItemProps {
  alert: ShipmentAlert;
}

export default function ShipmentAlertItem({
  alert,
}: ShipmentAlertItemProps) {
  return (
    <article
      className="
        flex
        h-[34px]
        w-full
        items-center
        gap-[12px]
      "
    >
      <ShipmentAlertIcon
        type={alert.icon}
      />

      <div
        className="
          flex
          h-[33px]
          w-[193px]
          items-center
          justify-between
          gap-[4px]
        "
      >
        {/* Alert information */}
        <div className="min-w-0">
          <p className="truncate text-[7px] font-medium text-[#856DF3]">
            {alert.shipmentId}
          </p>

          <p className="mt-[2px] truncate text-[8px] text-[#55575C]">
            {alert.issue}
          </p>
        </div>

        {/* Date and action */}
        <div className="flex shrink-0 items-center gap-[4px]">
          <span className="text-[7px] text-[#9A9CA2]">
            {alert.date}
          </span>

          <button
            type="button"
            aria-label={`Open shipment ${alert.shipmentId}`}
            className="
              flex
              h-[16px]
              w-[16px]
              items-center
              justify-center
              rounded-[4px]
              text-[#757575]
              transition-colors
              hover:bg-[#F0F0F0]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#856DF3]
            "
          >
            <ArrowUpRight
              size={11}
              strokeWidth={1.5}
            />
          </button>
        </div>
      </div>
    </article>
  );
}