import {
    FileText,
    MapPin,
    MessageCircle,
  } from "lucide-react";
  
  import type { ShipmentAlert } from "@/types/dashboard";
  
  interface ShipmentAlertIconProps {
    type: ShipmentAlert["icon"];
  }
  
  export default function ShipmentAlertIcon({
    type,
  }: ShipmentAlertIconProps) {
    const iconClassName = "h-[14px] w-[14px]";
  
    const icons = {
      document: (
        <FileText
          className={iconClassName}
          strokeWidth={1.5}
        />
      ),
  
      location: (
        <MapPin
          className={iconClassName}
          strokeWidth={1.5}
        />
      ),
  
      message: (
        <MessageCircle
          className={iconClassName}
          strokeWidth={1.5}
        />
      ),
    };
  
    return (
      <div
        className="
          flex
          h-[34px]
          w-[34px]
          shrink-0
          items-center
          justify-center
          rounded-[8px]
          bg-[#F0F0F0]
          p-[8px]
          text-[#757575]
        "
      >
        {icons[type]}
      </div>
    );
  }