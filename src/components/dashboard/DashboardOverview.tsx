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
    </div>
  );
}