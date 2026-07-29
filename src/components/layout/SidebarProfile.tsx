import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function SidebarProfile() {
  return (
    <button
      type="button"
      className="flex h-[49px] w-full items-center justify-between rounded-[8px] bg-[#F5F5F6] p-[8px] text-left transition hover:bg-[#EEEEF0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F5BD3]"
    >
      <div className="flex min-w-0 items-center gap-[8px]">
        {/* Temporary avatar */}
        <div className="relative overflow-hidden h-[32px] w-[32px] shrink-0  rounded-full  ">
          <Image 
                src="/profile-img.png" 
                alt="profile-img"
                fill
                className="object-cover"
                priority
          />

          
        </div>

        <div className="min-w-0">
          <p className="truncate text-[10px] font-medium leading-4 text-[#34363A]">
            John Doe
          </p>

          <p className="truncate text-[8px] leading-3 text-[#85878D]">
            Admin
          </p>
        </div>
      </div>

      <ChevronDown
        size={14}
        strokeWidth={1.7}
        className="shrink-0 text-[#8B8D93]"
      />
    </button>
  );
}