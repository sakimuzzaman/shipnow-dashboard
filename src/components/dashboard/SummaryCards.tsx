import {
    DollarSign,
    Package,
    Truck,
  } from "lucide-react";
  
  
import SummaryCard from "./SummaryCard";
import { summaryCards } from "@/data/dashboard";
  
  const cardIcons = [
    <Package key="package" size={15} strokeWidth={1.5} />,
    <Truck key="truck" size={15} strokeWidth={1.5} />,
    <DollarSign key="dollar" size={15} strokeWidth={1.5} />,
  ];
  
  export default function SummaryCards() {
    return (
      <section
        aria-label="Dashboard summary"
        className="grid grid-cols-3 gap-[12px]"
      >
        {summaryCards.map((card, index) => (
          <SummaryCard
            key={card.id}
            card={card}
            icon={cardIcons[index]}
          />
        ))}
      </section>
    );
  }