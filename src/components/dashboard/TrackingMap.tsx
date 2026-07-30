"use client";

import {
  Minus,
  Plus,
  Search,
} from "lucide-react";
import Image from "next/image";

interface TrackingMapProps {
  progress: number;
}

export default function TrackingMap({
  progress,
}: TrackingMapProps) {
  return (
    <div
      className="
        relative
        h-[419px]
        w-[445px]
        overflow-hidden
        rounded-[8px]
        bg-[#F0F0F0]
      "
    >
     
     <Image
        src="/map-img.png"
        alt="Live shipment route map"
        fill
        priority
        className="object-cover"
    />
     
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(
            135deg,
            #E7E7E7_0%,
            #F6F6F6_35%,
            #E4E4E4_65%,
            #F4F4F4_100%
          )]
        "
      />

      
      {/* Top controls */}
      <div
        className="
          absolute
          left-[10px]
          top-[10px]
          flex
          h-[58px]
          w-[425px]
          items-start
          justify-between
        "
      >
        {/* Search form */}
        <form
          onSubmit={(event) => event.preventDefault()}
          className="
            flex
            h-[36px]
            w-[254px]
            items-center
            rounded-[10px]
            bg-[#FEFEFE]
            py-[2px]
            pl-[4px]
            pr-[4px]
            shadow-[0px_4px_12px_0px_#0000001A]
          "
        >
          <label
            htmlFor="tracking-search"
            className="sr-only"
          >
            Search by shipment ID
          </label>

          <input
            id="tracking-search"
            type="search"
            placeholder="Search by Shipment ID..."
            className="
              h-[32px]
              w-[218px]
              rounded-[8px]
              bg-[#FEFEFE]
              px-[12px]
              py-[8px]
              text-[8px]
              text-[#55575C]
              outline-none
              placeholder:text-[#9A9CA2]
              focus-visible:ring-2
              focus-visible:ring-[#856DF3]
            "
          />

          <button
            type="submit"
            aria-label="Search shipment"
            className="
              flex
              h-[28px]
              w-[28px]
              shrink-0
              items-center
              justify-center
              rounded-[8px]
              bg-[#FEFEFE]
              text-[#65676C]
              transition-colors
              hover:bg-[#F0F0F0]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#856DF3]
            "
          >
            <Search size={13} />
          </button>
        </form>

        {/* Zoom controls */}
        <div
          className="
            flex
            h-[58px]
            w-[28px]
            flex-col
            gap-[1px]
            overflow-hidden
            rounded-[8px]
            bg-[#FEFEFE]
            shadow-[0px_4px_8px_0px_#0000001F]
          "
        >
          <button
            type="button"
            aria-label="Zoom in"
            className="
              flex
              h-[28px]
              w-[28px]
              items-center
              justify-center
              rounded-[8px]
              bg-[#FEFEFE]
              text-[#65676C]
              hover:bg-[#F0F0F0]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#856DF3]
            "
          >
            <Plus size={13} />
          </button>

          <button
            type="button"
            aria-label="Zoom out"
            className="
              flex
              h-[28px]
              w-[28px]
              items-center
              justify-center
              rounded-[8px]
              bg-[#FEFEFE]
              text-[#65676C]
              hover:bg-[#F0F0F0]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#856DF3]
            "
          >
            <Minus size={13} />
          </button>
        </div>
      </div>

     


      
      

      {/* Destination marker */}
      <div
        className="
          absolute
          right-[16px]
          top-[79px]
          flex
          h-[18px]
          w-[18px]
          items-center
          justify-center
          rounded-[20px]
          border
          border-[#E0E0E0]
          bg-[#FEFEFE]
          p-[2px]
          shadow-sm
        "
      >
        <span className="h-[8px] w-[8px] rounded-full bg-[#856DF3]" />
      </div>
    </div>
  );
}