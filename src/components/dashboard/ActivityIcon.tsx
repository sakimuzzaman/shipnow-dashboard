import {
    Check,
    Clock3,
    Copy,
    Tag,
  } from "lucide-react";
  
  import type { ActivityIconType } from "@/types/dashboard";
  
  interface ActivityIconProps {
    type: ActivityIconType;
  }
  
  export default function ActivityIcon({
    type,
  }: ActivityIconProps) {
    const iconClassName =
      "h-[16px] w-[16px]";
  
    const icons: Record<
      ActivityIconType,
      React.ReactNode
    > = {
      copy: (
        <Copy
          className={iconClassName}
          strokeWidth={1.5}
        />
      ),
  
      tag: (
        <Tag
          className={iconClassName}
          strokeWidth={1.5}
        />
      ),
  
      clock: (
        <Clock3
          className={iconClassName}
          strokeWidth={1.5}
        />
      ),
  
      check: (
        <Check
          className={iconClassName}
          strokeWidth={1.5}
        />
      ),
    };
  
    return (
      <div
        className="
          flex
          h-[36px]
          w-[36px]
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#E3DDFF]
          p-[9px]
          text-[#6E59C9]
        "
      >
        {icons[type]}
      </div>
    );
  }