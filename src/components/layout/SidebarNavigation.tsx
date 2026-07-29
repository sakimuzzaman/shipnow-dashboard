  
 import SidebarNavItem from "./SidebarNavItem";
  
  const mainMenu = [
    {
      label: "Dashboard",
      href: "/dashboard",
      iconSrc: "/dashboard-icon.png"
    },
    {
      label: "Analytics",
      href: "/analytics",
      iconSrc: "/analytics-icon.png"
    },
    {
      label: "Calendar",
      href: "/calendar",
      iconSrc: "/calender-icon.png"
    },
    {
      label: "Shipments",
      href: "/shipments",
      iconSrc: "/shipments-icon.png"
    },
    {
      label: "Tracking",
      href: "/tracking",
      iconSrc: "/tracking-icon.png"
    },
    {
      label: "Warehouse",
      href: "/warehouse",
      iconSrc: "/warehouse-icon.png"
    },
    {
      label: "Fleets",
      href: "/fleets",
      iconSrc: "/fleets-icon.png"
    },
    {
      label: "Drivers",
      href: "/drivers",
      iconSrc: "/drivers-icon.png"
    },
    {
      label: "Invoices & Billing",
      href: "/invoices",
      iconSrc: "/invoice-icon.png"
    },
  ];
  
  const secondaryMenu = [
    {
      label: "Message",
      href: "/messages",
      iconSrc: "/message-icon.png",
      badge: "10",
    },
    {
      label: "Notification",
      href: "/notifications",
      iconSrc: "/notification-icon.png",
      badge: "5",
    },
    {
      label: "Settings",
      href: "/settings",
      iconSrc: "/settings-icon.png"
    },
  ];
  
  export default function SidebarNavigation() {
    return (
      <nav
        aria-label="Dashboard navigation"
        className="flex min-h-0 flex-1 flex-col"
      >
        {/* Main menu */}
        <div className="flex flex-col gap-[8px]">
          {mainMenu.map((item) => (
            <SidebarNavItem
              key={item.label}
              {...item}
              active={item.href === "/dashboard"}
            />
          ))}
        </div>
  
        {/* Push secondary menu toward the bottom */}
        <div className=" flex flex-col gap-[8px]">
          {secondaryMenu.map((item) => (
            <SidebarNavItem
              key={item.label}
              {...item}
            />
          ))}
        </div>
      </nav>
    );
  }