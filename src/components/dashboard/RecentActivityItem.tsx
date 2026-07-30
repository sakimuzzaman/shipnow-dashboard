import type { RecentActivity } from "@/types/dashboard";

import ActivityIcon from "./ActivityIcon";

interface RecentActivityItemProps {
  activity: RecentActivity;
}

export default function RecentActivityItem({
  activity,
}: RecentActivityItemProps) {
  return (
    <article
      className="
        flex
        h-[69px]
        w-[267px]
        gap-[15px]
      "
    >
      {/* Timeline icon and connector */}
      <div
        className="
          flex
          h-[69px]
          w-[36px]
          shrink-0
          flex-col
          items-center
          gap-[4px]
          pb-[4px]
        "
      >
        <ActivityIcon
          type={activity.icon}
        />

        {activity.showConnector && (
          <div
            className="
              flex
              h-[25px]
              w-[20px]
              justify-center
              px-[10px]
            "
          >
            <span
              className="
                h-full
                w-px
                bg-[#E0E0E0]
              "
            />
          </div>
        )}
      </div>

      {/* Activity content */}
      <div
        className="
          flex
          h-[69px]
          w-[216px]
          flex-col
          gap-[8px]
          pb-[12px]
        "
      >
        <p
          className="
            line-clamp-2
            text-[14px]
            font-normal
            leading-[125%]
            text-[#55575C]
          "
        >
          {activity.description}{" "}

          <span
            className="
              font-semibold
              text-[#856DF3]
            "
          >
            {activity.highlightedText}
          </span>

          {activity.suffix && (
            <>
              {" "}
              {activity.suffix}
            </>
          )}
        </p>

        <time
          className="
            text-[10px]
            font-normal
            leading-[130%]
            text-[#757575]
          "
        >
          {activity.time}
        </time>
      </div>
    </article>
  );
}