import LiveTracking from "./LiveTracking";
import ProductCategories from "./ProductCategories";
import ProfitSummaryChart from "./ProfitSummaryChart";
import RecentShipmentsTable from "./RecentShipmentsTable";
import ShipmentAlerts from "./ShipmentAlerts";
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

        <LiveTracking />

        <ShipmentAlerts />
      </div>

      <div className="flex gap-[16px]">
  <RecentShipmentsTable />

  {/* Recent Activity placeholder */}
      <div
          className="
            h-[404px]
            w-[288px]
            rounded-[12px]
            bg-[#EDEDEF]
          "
      />
     </div>

    </div>
  );
}