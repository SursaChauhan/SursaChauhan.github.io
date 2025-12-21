import { Minus, Square, X } from "lucide-react";

export default function IdeTopBar() {
  return (
    <header className="h-8 bg-topbar-bg flex items-center justify-between px-3 select-none border-b border-border">
      {/* Left - Menu items */}
      <div className="flex items-center gap-4 text-xs text-muted-foreground">
        <span className="font-medium text-foreground">Portfolio</span>
        <span className="hidden sm:inline hover:text-foreground cursor-default">File</span>
        <span className="hidden sm:inline hover:text-foreground cursor-default">Edit</span>
        <span className="hidden sm:inline hover:text-foreground cursor-default">View</span>
        <span className="hidden sm:inline hover:text-foreground cursor-default">Help</span>
      </div>

      {/* Center - Title */}
      <div className="absolute left-1/2 -translate-x-1/2 text-xs text-muted-foreground hidden md:block">
        developer-portfolio — VS Code
      </div>

      {/* Right - Window controls */}
      <div className="flex items-center gap-1">
        <button className="p-1.5 hover:bg-accent rounded-sm transition-colors">
          <Minus size={12} className="text-muted-foreground" />
        </button>
        <button className="p-1.5 hover:bg-accent rounded-sm transition-colors">
          <Square size={10} className="text-muted-foreground" />
        </button>
        <button className="p-1.5 hover:bg-destructive rounded-sm transition-colors group">
          <X size={12} className="text-muted-foreground group-hover:text-destructive-foreground" />
        </button>
      </div>
    </header>
  );
}
