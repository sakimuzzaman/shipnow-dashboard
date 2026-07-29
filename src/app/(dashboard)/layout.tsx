import DashboardSidebar from "@/components/layout/DashboardSidebar";
import Header from "@/components/layout/Header";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex min-h-screen bg-[#F7F7F8]">
        <DashboardSidebar />

        <div className="flex min-w-0 flex-1 flex-col">
            <Header />
  
        <main className="min-w-0 flex-1">
          {children}
        </main>

        </div>
      </div>
    );
  }
