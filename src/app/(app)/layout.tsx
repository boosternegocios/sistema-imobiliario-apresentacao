import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Sidebar />
      <Topbar />
      <main className="ml-72 pt-20 p-8 min-h-screen">
        {children}
      </main>
    </div>
  );
}
