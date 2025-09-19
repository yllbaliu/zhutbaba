import { Settings2 } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Settings2 className="h-8 w-8 text-primary" />
        <Settings2 className="h-8 w-8 text-muted-foreground absolute top-0 left-0 rotate-45" />
      </div>
      <span className="text-2xl font-bold text-foreground">INVENTUAL</span>
    </div>
  );
};