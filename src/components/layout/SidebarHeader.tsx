import Image from "next/image";

export default function SidebarHeader() {
    return (
      <div className="flex h-10 w-full items-center gap-[10px]">
        {/* Temporary logo icon */}
        <div
          aria-hidden="true"
          className="h-5 w-3 -skew-x-12"
        >
            <Image
                src="/form-logo.png" 
                alt="form-logo"
                fill
                className="object-cover"
                priority
      />
            </div>
  
        {/* Temporary text logo */}
        <span className="text-[14px] font-[800] uppercase tracking-[0.02em] text-[#34363A]">
          ShipNow
        </span>
      </div>
    );
  }