import DashboardSidebar from "@/components/layout/DashboardSidebar";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex min-h-screen bg-[#F7F7F8]">
        <DashboardSidebar />
  
        <main className="min-w-0 flex-1">
          {children}
        </main>
      </div>
    );
  }
