"use client";

import type { RecentShipment } from "@/types/dashboard";

import ShipmentStatusBadge from "./ShipmentStatusBadge";

interface RecentShipmentRowProps {
  shipment: RecentShipment;
  checked: boolean;
  onCheckedChange: (
    shipmentId: string,
    checked: boolean
  ) => void;
}

export default function RecentShipmentRow({
  shipment,
  checked,
  onCheckedChange,
}: RecentShipmentRowProps) {
  return (
    <tr
      className="
        h-[55px]
        border-b
        border-[#E0E0E0]
        bg-[#FEFEFE]
        transition-colors
        hover:bg-[#FAFAFA]
      "
    >
      {/* Checkbox */}
      <td className="w-[32px] px-[10px]">
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) =>
            onCheckedChange(
              shipment.id,
              event.target.checked
            )
          }
          aria-label={`Select ${shipment.id}`}
          className="
            h-[12px]
            w-[12px]
            cursor-pointer
            appearance-none
            rounded-[3px]
            border
            border-[#E0E0E0]
            bg-[#F0F0F0]
            checked:border-[#856DF3]
            checked:bg-[#856DF3]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#856DF3]
          "
        />
      </td>

      {/* Shipment ID */}
      <td className="w-[95px] px-[4px]">
        <span className="text-[8px] font-medium text-[#856DF3]">
          {shipment.id}
        </span>
      </td>

      {/* Company */}
      <td className="w-[130px] px-[4px]">
        <p className="text-[8px] font-medium text-[#55575C]">
          {shipment.company}
        </p>

        <p className="mt-[2px] text-[7px] text-[#9A9CA2]">
          {shipment.category}
        </p>
      </td>

      {/* Carrier */}
      <td className="w-[65px] px-[4px]">
        <span className="text-[8px] text-[#55575C]">
          {shipment.carrier}
        </span>
      </td>

      {/* Route */}
      <td className="w-[205px] px-[4px]">
        <span className="whitespace-nowrap text-[8px] text-[#55575C]">
          {shipment.route}
        </span>
      </td>

      {/* Shipping date */}
      <td className="w-[90px] px-[4px]">
        <span className="whitespace-nowrap text-[8px] text-[#55575C]">
          {shipment.shippingDate}
        </span>
      </td>

      {/* Status */}
      <td className="px-[4px] text-right">
        <ShipmentStatusBadge
          status={shipment.status}
        />
      </td>
    </tr>
  );
}