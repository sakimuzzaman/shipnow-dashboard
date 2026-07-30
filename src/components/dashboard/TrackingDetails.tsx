import type { LiveTrackingData } from "@/types/dashboard";

interface TrackingDetailsProps {
  tracking: LiveTrackingData;
}

export default function TrackingDetails({
  tracking,
}: TrackingDetailsProps) {
  return (
    <section
      className="
        absolute
        bottom-[10px]
        left-[10px]
        h-[153px]
        w-[425px]
        rounded-[12px]
        bg-[#FEFEFE]
        p-[16px]
        shadow-[0px_4px_12px_0px_#00000014]
      "
    >
      {/* Shipment and courier details */}
      <div
        className="
          flex
          h-[44px]
          w-[393px]
          items-start
          justify-between
        "
      >
        {/* Shipment */}
        <div className="h-[41px] w-[124px]">
          <p className="text-[9px] font-semibold text-[#55575C]">
            #{tracking.shipmentId}
          </p>

          <div className="mt-[6px] flex items-center gap-[6px]">
            <span className="h-[7px] w-[7px] rounded-full bg-[#856DF3]" />

            <span className="text-[7px] text-[#757575]">
              {tracking.status}
            </span>
          </div>
        </div>

        {/* Courier */}
        <div className="text-right">
          <p className="text-[7px] text-[#9A9CA2]">
            Courier
          </p>

          <p className="mt-[2px] text-[8px] font-medium text-[#55575C]">
            {tracking.courier.name}
          </p>
        </div>

        {/* Delivery time */}
        <div className="h-[44px] w-[88px] text-right">
          <p className="text-[7px] text-[#9A9CA2]">
            Estimated
          </p>

          <p className="mt-[2px] text-[8px] font-medium text-[#55575C]">
            Mar 22
          </p>

          <p className="text-[7px] text-[#9A9CA2]">
            6:00 PM
          </p>
        </div>
      </div>

      {/* Progress */}
      <div
        className="
          mt-[8px]
          flex
          h-[57px]
          w-[393px]
          flex-col
          gap-[20px]
        "
      >
        <div
          className="
            relative
            h-[4px]
            w-full
            rounded-full
            bg-[#E0E0E0]
          "
        >
          <div
            className="
              h-full
              rounded-full
              bg-[#856DF3]
            "
            style={{
              width: `${tracking.progress}%`,
            }}
          />

          {/* Current point */}
          <span
            className="
              absolute
              top-1/2
              h-[14px]
              w-[14px]
              -translate-y-1/2
              rounded-full
              bg-[#856DF3]
              ring-2
              ring-white
            "
            style={{
              left: `calc(${tracking.progress}% - 7px)`,
            }}
          />
        </div>

        {/* Addresses */}
        <div
          className="
            flex
            h-[33px]
            w-full
            justify-between
            gap-[40px]
          "
        >
          <div className="w-[176.5px]">
            <p className="text-[8px] font-medium text-[#55575C]">
              {tracking.departure.city}
            </p>

            <p className="mt-[2px] text-[7px] text-[#9A9CA2]">
              {tracking.departure.dateTime}
            </p>
          </div>

          <div className="w-[176.5px] text-right">
            <p className="text-[8px] font-medium text-[#55575C]">
              {tracking.destination.city}
            </p>

            <p className="mt-[2px] text-[7px] text-[#9A9CA2]">
              {tracking.destination.dateTime}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}