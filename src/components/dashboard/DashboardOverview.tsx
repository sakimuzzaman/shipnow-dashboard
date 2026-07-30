import ProductCategories from "./ProductCategories";
import ProfitSummaryChart from "./ProfitSummaryChart";
import ShipmentStatisticsChart from "./ShipmentStatisticsChart";
import ShipmentTypeChart from "./ShipmentTypeChart";
import SummaryCards from "./SummaryCards";

export default function DashboardOverview() {
  return (
    <div className="flex flex-col gap-[12px]">
      
      <div className="flex gap-[12px]">
        <div className="flex w-[842px] flex-col gap-[12px]">
          <SummaryCards />

          <div className="flex gap-[12px]">
            <ShipmentStatisticsChart />

            <ProfitSummaryChart />
          </div>
        </div>

        <ShipmentTypeChart />
      </div>

       {/* Next dashboard row */}
       <div className="flex gap-[12px]">
        <ProductCategories />

        {/* Live Tracking will be added next */}
        <div className="h-[443px] flex-1 rounded-[12px] bg-[#EDEDEF]" />

        {/* Shipment Alerts will be added after Live Tracking */}
        <div className="h-[443px] w-[299px] rounded-[12px] bg-[#EDEDEF]" />
      </div>

    </div>
  );
}