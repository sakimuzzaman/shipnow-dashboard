import { MoreHorizontal } from "lucide-react";

import { recentActivities } from "@/data/dashboard";

import RecentActivityItem from "./RecentActivityItem";

export default function RecentActivity() {
  return (
    <section
      className="
        h-[404px]
        w-[299px]
        rounded-[12px]
        bg-[#FEFEFE]
        p-[16px]
      "
    >
      {/* Header */}
      <header
        className="
          flex
          h-[28px]
          w-[267px]
          items-center
          justify-between
        "
      >
        <div
          className="
            flex
            h-[19px]
            w-[113px]
            items-center
            gap-[4px]
          "
        >
          <h2
            className="
              text-[16px]
              font-bold
              leading-[120%]
              text-[#333333]
            "
          >
            Recent Activity
          </h2>
        </div>

        <button
          type="button"
          aria-label="Recent activity options"
          className="
            flex
            h-[22px]
            w-[22px]
            items-center
            justify-center
            rounded-[6px]
            bg-[#F0F0F0]
            text-[#757575]
            transition-colors
            hover:bg-[#E6E6E6]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#856DF3]
          "
        >
          <MoreHorizontal
            size={13}
            strokeWidth={1.5}
          />
        </button>
      </header>

      {/* Activity timeline */}
      <div
        className="
          mt-[20px]
          h-[324px]
          w-[267px]
        "
      >
        {recentActivities.map(
          (activity) => (
            <RecentActivityItem
              key={activity.id}
              activity={activity}
            />
          )
        )}
      </div>
    </section>
  );
}