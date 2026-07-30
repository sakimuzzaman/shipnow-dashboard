import type { ShipmentStatus } from "@/types/dashboard";

interface ShipmentStatusBadgeProps {
  status: ShipmentStatus;
}

const statusStyles: Record<ShipmentStatus, string> = {
  "In Transit": `
    bg-[#F0F0F0]
    text-[#55575C]
  `,

  "Out for Delivery": `
    bg-[#E3DDFF]
    text-[#6E59C9]
  `,

  Delivered: `
    bg-[#E7F6EC]
    text-[#4E9A68]
  `,

  Processing: `
    bg-[#EAF0FF]
    text-[#5C72B8]
  `,
};

export default function ShipmentStatusBadge({
  status,
}: ShipmentStatusBadgeProps) {
  return (
    <span
      className={`
        inline-flex
        items-center
        justify-center
        whitespace-nowrap
        rounded-full
        px-[8px]
        py-[3px]
        text-[8px]
        font-medium
        leading-none
        ${statusStyles[status]}
      `}
    >
      {status}
    </span>
  );
}