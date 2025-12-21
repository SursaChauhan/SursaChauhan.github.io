import { Home, User, Code2, Briefcase, Award, FolderKanban, Mail } from "lucide-react";

interface IdeSidebarProps {
  visible: boolean;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const sidebarItems = [
  { icon: Home, label: "Hello", tab: "hello" },
  { icon: User, label: "About", tab: "about" },
  { icon: Code2, label: "Skills", tab: "skills" },
  { icon: Briefcase, label: "Experience", tab: "experience" },
  { icon: Award, label: "Certifications", tab: "certs" },
  { icon: FolderKanban, label: "Projects", tab: "projects" },
  { icon: Mail, label: "Contact", tab: "contact" },
];

export default function IdeSidebar({ visible, activeTab, onTabChange }: IdeSidebarProps) {
  if (!visible) return null;

  return (
    <aside className="w-12 bg-sidebar-bg flex flex-col justify-between border-r border-border">
      {/* Navigation icons */}
      <div className="flex flex-col items-center py-2 gap-1">
        {sidebarItems.map((item) => (
          <button
            key={item.tab}
            onClick={() => onTabChange(item.tab)}
            className={`
              p-3 transition-colors relative
              ${activeTab === item.tab 
                ? "text-foreground before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-primary" 
                : "text-muted-foreground hover:text-foreground"
              }
            `}
            title={item.label}
          >
            <item.icon size={22} strokeWidth={1.5} />
          </button>
        ))}
      </div>
    </aside>
  );
}
