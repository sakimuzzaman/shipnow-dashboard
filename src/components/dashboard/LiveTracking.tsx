import { liveTrackingData } from "@/data/dashboard";

import TrackingDetails from "./TrackingDetails";
import TrackingMap from "./TrackingMap";

export default function LiveTracking() {
  return (
    <section
      className="
        h-[443px]
        w-[469px]
        rounded-[12px]
        bg-[#FEFEFE]
        p-[12px]
      "
    >
      <div className="relative h-[419px] w-[445px]">
        <TrackingMap
          progress={liveTrackingData.progress}
        />

        <TrackingDetails
          tracking={liveTrackingData}
        />
      </div>
    </section>
  );
}