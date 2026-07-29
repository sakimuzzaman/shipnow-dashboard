import SidebarHeader from "./SidebarHeader";
import SidebarNavigation from "./SidebarNavigation";
import SidebarProfile from "./SidebarProfile";

export default function DashboardSidebar() {
    return (
      <aside
        className="
          sticky top-0
          flex h-screen w-[223px] shrink-0 flex-col
          gap-[20px]
          border-r border-[#ECECEF]
          bg-[#FEFEFE]
          px-[16px]
          py-[20px]
        "
      >
        <SidebarHeader />
  
        <SidebarProfile />
  
        <SidebarNavigation />
      </aside>
    );
  }
  
  