interface ShipmentTypeItemProps {
    name: string;
    percentage: number;
    shipments: number;
    color: string;
  }
  
  export default function ShipmentTypeItem({
    name,
    percentage,
    shipments,
    color,
  }: ShipmentTypeItemProps) {
    return (
      <div className="flex h-[31px] w-[125.5px] items-center gap-[10px]">
        {/* Percentage badge */}
        <div
          className="flex h-[31px] w-[32px] shrink-0 items-center justify-center rounded-[6px] px-[2px] py-[4px]"
          style={{
            backgroundColor: color,
          }}
        >
          <span
            className={[
              "text-[8px] font-semibold",
              color === "#E0E0E0"
                ? "text-[#555555]"
                : "text-white",
            ].join(" ")}
          >
            {percentage}%
          </span>
        </div>
  
        {/* Shipment information */}
        <div className="min-w-0">
          <p className="truncate text-[8px] font-medium leading-[12px] text-[#4A4C51]">
            {name}
          </p>
  
          <p className="truncate text-[7px] leading-[10px] text-[#9A9CA2]">
            {shipments.toLocaleString()} shipments
          </p>
        </div>
      </div>
    );
  }