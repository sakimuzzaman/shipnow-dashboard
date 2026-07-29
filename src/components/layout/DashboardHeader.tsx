import { Plus, Search } from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="flex h-[64px] w-full items-center justify-between gap-6 border-b border-[#ECECEF] bg-[#FEFEFE] px-6">
      {/* Greeting */}
      <div className="shrink-0">
        <p className="text-[9px] leading-[11px] text-[#8A8D94]">
          Hello John!
        </p>

        <h1 className="mt-[2px] text-[16px] font-semibold leading-[21px] text-[#34363A]">
          Good Morning
        </h1>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative w-[220px]">
          <Search
            size={14}
            strokeWidth={1.5}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#7E8188]"
          />

          <input
            type="search"
            aria-label="Search"
            placeholder="Search anything"
            className="
              h-[32px]
              w-full
              rounded-[6px]
              border
              border-[#ECECEF]
              bg-[#F7F7F8]
              py-2
              pl-9
              pr-3
              text-[9px]
              text-[#34363A]
              outline-none
              transition
              placeholder:text-[#9A9CA2]
              focus:border-[#7563CF]
              focus:ring-2
              focus:ring-[#7563CF]/15
            "
          />
        </div>

        {/* Add shipment */}
        <button
          type="button"
          className="
            flex
            h-[32px]
            items-center
            justify-center
            gap-2
            rounded-[5px]
            bg-[#34363A]
            px-4
            text-[9px]
            font-medium
            text-white
            transition-colors
            hover:bg-[#242528]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#7563CF]
            focus-visible:ring-offset-2
          "
        >
          <Plus
            size={12}
            strokeWidth={1.8}
          />

          Add New Shipping
        </button>
      </div>
    </header>
  );
}