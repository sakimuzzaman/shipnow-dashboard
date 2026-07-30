import type { SummaryCardData } from "@/types/dashboard";

interface SummaryCardProps {
  card: SummaryCardData;
  icon?: React.ReactNode;
}

export default function SummaryCard({
  card,
  icon,
}: SummaryCardProps) {
  const isPositive = card.trend === "up";

  return (
    <article
      className="
        flex
        h-[115px]
        w-full
        flex-col
        gap-[8px]
        rounded-[12px]
        bg-[#FEFEFE]
        px-[16px]
        py-[16px]
      "
    >
      {/* Title */}
      <p className="text-[9px] font-medium leading-[12px] text-[#85878D]">
        {card.title}
      </p>

      {/* Value row */}
      <div className="flex items-center justify-between">
        <div className="flex items-end gap-[4px]">
          <h2 className="text-[20px] font-semibold leading-[24px] text-[#34363A]">
            {card.value}
          </h2>

          {card.additionalInfo && (
            <span className="mb-[2px] text-[8px] text-[#9A9CA2]">
              {card.additionalInfo}
            </span>
          )}
        </div>

        {/* Temporary icon */}
        <div
          className="
            flex
            h-[32px]
            w-[32px]
            items-center
            justify-center
            rounded-[6px]
            bg-[#7563CF]
            text-white
          "
        >
          {icon ?? (
            <span className="text-[12px]">
              ▣
            </span>
          )}
        </div>
      </div>

      {/* Percentage */}
      <div className="flex items-center gap-[4px]">
        <span
          className={[
            "flex h-[12px] w-[12px] items-center justify-center rounded-full",
            isPositive
              ? "bg-[#E6F5EC] text-[#3E9C65]"
              : "bg-[#FDEAEA] text-[#D15B5B]",
          ].join(" ")}
        >
          {isPositive ? "↑" : "↓"}
        </span>

        <span
          className={[
            "text-[8px] font-medium",
            isPositive
              ? "text-[#3E9C65]"
              : "text-[#D15B5B]",
          ].join(" ")}
        >
          {card.percentage}
        </span>

        <span className="text-[8px] text-[#A0A2A8]">
          from last week
        </span>
      </div>
    </article>
  );
}