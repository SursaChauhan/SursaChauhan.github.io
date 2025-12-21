import { X } from "lucide-react";
import { motion } from "framer-motion";

type Tab = {
  id: string;
  label: string;
  icon: string;
};

const tabs: Tab[] = [
  { id: "hello", label: "hello.html", icon: "🔶" },
  { id: "about", label: "about.css", icon: "🎨" },
  { id: "skills", label: "skills.ts", icon: "⚡" },
  { id: "experience", label: "experience.md", icon: "📖" },
  { id: "projects", label: "projects.js", icon: "📜" },
  { id: "certifications", label: "certs.json", icon: "🏆" },
  { id: "contact", label: "contact.json", icon: "📋" },
];

interface FileTabsProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export default function FileTabs({ activeTab, onTabChange }: FileTabsProps) {
  return (
    <div className="bg-tab-bg border-b border-border flex overflow-x-auto scrollbar-thin">
      {tabs.map((tab) => (
        <motion.button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          whileHover={{ backgroundColor: "hsl(var(--accent))" }}
          whileTap={{ scale: 0.98 }}
          className={`
            flex items-center gap-2 px-4 py-2 text-sm font-sans border-r border-border
            transition-colors min-w-max relative
            ${activeTab === tab.id 
              ? "bg-background text-foreground" 
              : "text-muted-foreground hover:text-foreground"
            }
          `}
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute top-0 left-0 right-0 h-0.5 bg-primary"
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="text-xs">{tab.icon}</span>
          <span>{tab.label}</span>
          <X 
            size={14} 
            className="ml-2 opacity-0 hover:opacity-100 hover:bg-accent rounded transition-opacity"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.button>
      ))}
    </div>
  );
}
