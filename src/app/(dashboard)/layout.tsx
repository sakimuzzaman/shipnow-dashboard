import DashboardHeader from "@/components/layout/DashboardHeader";
import DashboardSidebar from "@/components/layout/DashboardSidebar";


export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex min-h-screen bg-[#F7F7F8]">
        <DashboardSidebar />

        <div className="flex min-w-0 flex-1 flex-col">
            <DashboardHeader />
  
        <main className="min-w-0 flex-1">
          {children}
        </main>

        </div>
      </div>
    );
  }
