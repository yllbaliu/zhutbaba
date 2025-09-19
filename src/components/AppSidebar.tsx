import { 
  BarChart3, 
  Package, 
  ArrowRightLeft, 
  Receipt, 
  Users, 
  UserPlus, 
  ArrowUpDown, 
  FileText, 
  Warehouse, 
  Settings,
  Home
} from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Logo } from "./Logo";

const navigation = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { 
    title: "Products", 
    url: "/products", 
    icon: Package,
    submenu: [
      { title: "Add Product", url: "/products/add" },
      { title: "Product List", url: "/products/list" },
      { title: "Category", url: "/products/category" },
      { title: "Brand", url: "/products/brand" },
      { title: "Unit/Value", url: "/products/unit" },
      { title: "Generate Barcode", url: "/products/barcode" },
      { title: "Add Adjustment", url: "/products/adjustment" },
      { title: "Adjustment", url: "/products/adjustments" },
    ]
  },
  {
    title: "Trading",
    url: "/trading",
    icon: ArrowRightLeft,
    submenu: [
      { title: "Add Purchase", url: "/trading/purchase" },
    ]
  },
  {
    title: "Expense",
    url: "/expense",
    icon: Receipt,
  },
  {
    title: "People",
    url: "/people",
    icon: Users,
  },
  {
    title: "User Management",
    url: "/users",
    icon: UserPlus,
    submenu: [
      { title: "Add User", url: "/users/add" },
      { title: "User List", url: "/users/list" },
      { title: "Create Role", url: "/users/roles" },
    ]
  },
  {
    title: "Transfer",
    url: "/transfer",
    icon: ArrowUpDown,
    submenu: [
      { title: "Add Transfer", url: "/transfer/add" },
      { title: "Transfer List", url: "/transfer/list" },
    ]
  },
  {
    title: "Reports",
    url: "/reports",
    icon: FileText,
  },
  {
    title: "Warehouse",
    url: "/warehouse",
    icon: Warehouse,
  },
  {
    title: "Administrative Tools",
    url: "/admin",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-border">
      <SidebarHeader className="p-4 border-b">
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url}
                      className={({ isActive }) => 
                        `flex items-center gap-3 p-3 rounded-md transition-colors ${
                          isActive 
                            ? "bg-primary text-primary-foreground" 
                            : "text-sidebar-foreground hover:bg-sidebar-accent"
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                  {item.submenu && (
                    <div className="ml-8 mt-1 space-y-1">
                      {item.submenu.map((subitem) => (
                        <SidebarMenuButton key={subitem.title} asChild>
                          <NavLink
                            to={subitem.url}
                            className={({ isActive }) =>
                              `block p-2 text-sm rounded-md transition-colors ${
                                isActive
                                  ? "bg-primary text-primary-foreground"
                                  : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground"
                              }`
                            }
                          >
                            {subitem.title}
                          </NavLink>
                        </SidebarMenuButton>
                      ))}
                    </div>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}