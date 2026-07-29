import Image from "next/image";
import Link from "next/link";


interface SidebarNavItemProps {
  label: string;
  href: string;
  iconSrc: string;
  active?: boolean;
  badge?: string;
}

export default function SidebarNavItem({
  label,
  href,
  iconSrc,
  active = false,
  badge,
}: SidebarNavItemProps) {
  return (
    <Link
      href={href}
      className={[
        "flex h-[32px] w-full items-center gap-[10px] rounded-[4px] px-[8px]",
        "text-[10px] transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6F5BD3]",
        active
          ? "bg-[#E9E5FA] font-medium text-[#5F4CC4]"
          : "text-[#6E7076] hover:bg-[#F4F3F7]",
      ].join(" ")}
    >
      
        <div className="relative h-[14px] w-[14px] shrink-0">
        <Image
          src={iconSrc}
          alt={`${label} icon`}
          fill
          className="object-contain"
        />
      </div>


      <span className="min-w-0 flex-1 truncate">
        {label}
      </span>

      {badge && (
        <span className="flex h-[14px] min-w-[14px] items-center justify-center rounded-[3px] bg-[#7563CF] px-1 text-[7px] font-medium text-white">
          {badge}
        </span>
      )}
    </Link>
  );
}