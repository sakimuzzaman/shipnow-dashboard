"use client"
import { Check } from "lucide-react";
import { useState } from "react";


export default function SidebarPromoBanner() {
  const [requested, setRequested] = useState(false);

  const handleGoPro = () => {
    if (requested) return;
    setRequested(true);
    window.dispatchEvent(
      new CustomEvent("app:toast", {
        detail: "Thanks! Our team will reach out about ShipNow Pro.",
      }),
    );
  };

  return (
    <section
      aria-label="Upgrade to ShipNow Pro"
      className="relative w-full shrink-0 overflow-hidden rounded-[12px] px-[16px] py-[24px]"
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, #333333, #333333)",
      }}
    >
      {/* Decorative skewed pattern — top right, clipped by the rounded frame */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="absolute -top-[1px] left-[141px] h-[37.62px] w-[34.38px] -skew-x-[18deg] bg-[#856DF3] opacity-40" />
        <span className="absolute left-[161.63px] top-[27.21px] h-[37.62px] w-[34.38px] -skew-x-[18deg] bg-[#856DF3] opacity-20" />
      </div>

      <div className="relative flex flex-col gap-[22px]">
        {/* Text block */}
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-[20px] font-extrabold leading-[130%] text-[#FEFEFE]">
            Loving ShipNow Free?
          </h3>
          <p className="text-[12px] font-normal leading-[130%] text-[#FEFEFE]/70">
            Go Pro to access priority support, real-time tracking, and full
            analytics.
          </p>
        </div>

        {/* CTA */}
        <button
          type="button"
          onClick={handleGoPro}
          disabled={requested}
          className={[
            "flex h-[36px] w-full items-center justify-center gap-[8px] rounded-[8px]",
            "px-[2px] text-[12px] font-bold tracking-[0.01em]",
            "transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#856DF3] focus-visible:ring-offset-2 focus-visible:ring-offset-[#292929]",
            requested
              ? "cursor-default bg-[#FEFEFE]/90 text-[#5F4CC4]"
              : "bg-[#FEFEFE] text-[#26262A] hover:bg-white active:translate-y-px",
          ].join(" ")}
        >
          {requested ? (
            <>
              <Check size={13} strokeWidth={2.4} />
              Request Sent
            </>
          ) : (
            "Go Pro Today"
          )}
        </button>
      </div>
    </section>
  );
}
