import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { TopHeader } from "@/components/TopHeader";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <TopHeader />
          <main className="flex-1 bg-background">
            {children}
          </main>
          <footer className="h-12 bg-primary flex items-center justify-center">
            <p className="text-primary-foreground text-sm">
              © Copyright by BDeva 2025
            </p>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
};