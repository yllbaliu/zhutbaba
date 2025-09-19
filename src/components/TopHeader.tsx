import { Bell, Mail, Menu, Globe, Plus, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";

export const TopHeader = () => {
  return (
    <header className="flex items-center justify-between h-16 px-6 bg-background border-b border-border">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <Button variant="ghost" size="icon">
          <Menu className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Plus className="h-4 w-4" />
        </Button>
        
        <Button variant="ghost" size="icon">
          <Bell className="h-4 w-4" />
        </Button>
        
        <Button variant="ghost" size="icon">
          <Mail className="h-4 w-4" />
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Globe className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>ENG</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <Button variant="ghost" size="icon">
          <Settings className="h-4 w-4" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-2 cursor-pointer">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>SW</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <div className="font-medium">Shane Watson</div>
                <div className="text-muted-foreground text-xs">Admin User</div>
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};