import type { ShipmentAlertSummary } from "@/types/dashboard";

interface ShipmentAlertSummaryCardProps {
  alert: ShipmentAlertSummary;
}

export default function ShipmentAlertSummaryCard({
  alert,
}: ShipmentAlertSummaryCardProps) {
  return (
    <article
      className="
        flex
        h-[101px]
        w-[83.666px]
        flex-col
        items-center
        justify-between
        rounded-[8px]
        px-[8px]
        pb-[12px]
        pt-[16px]
      "
      style={{
        backgroundColor: alert.color,
      }}
    >
      <strong className="text-[18px] font-bold leading-[110%] text-[#333333]">
        {alert.count}
      </strong>

      <p className="text-center text-[7px] leading-[11px] text-[#55575C]">
        {alert.label}
      </p>
    </article>
  );
}