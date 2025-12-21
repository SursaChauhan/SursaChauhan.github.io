import { useState, useEffect } from "react";
import IdeTopBar from "@/components/IdeTopBar";
import FileTabs from "@/components/FileTabs";
import IdeSidebar from "@/components/IdeSidebar";
import SocialFooter from "@/components/SocialFooter";
import Hello from "@/pages/Hello";
import About from "@/pages/About";
import Skills from "@/pages/Skills";
import Experience from "@/pages/Experience";
import Projects from "@/pages/Projects";
import Certifications from "@/pages/Certifications";
import Contact from "@/pages/Contact";

const App = () => {
  const [activeTab, setActiveTab] = useState("hello");

  // Listen for tab change events from Hello page
  useEffect(() => {
    const handleTabChange = (e: CustomEvent<string>) => {
      setActiveTab(e.detail);
    };
    window.addEventListener('changeTab', handleTabChange as EventListener);
    return () => window.removeEventListener('changeTab', handleTabChange as EventListener);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "hello":
        return <Hello />;
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "experience":
        return <Experience />;
      case "projects":
        return <Projects />;
      case "certifications":
        return <Certifications />;
      case "contact":
        return <Contact />;
      default:
        return <Hello />;
    }
  };

  const getFileType = () => {
    switch (activeTab) {
      case "hello": return "HTML";
      case "about": return "CSS";
      case "skills": return "TypeScript";
      case "experience": return "Markdown";
      case "projects": return "JavaScript";
      case "certifications": return "JSON";
      case "contact": return "JSON";
      default: return "HTML";
    }
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden pb-10">
      <IdeTopBar />
      <FileTabs activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="flex-1 flex overflow-hidden">
        <div className="hidden md:block">
          <IdeSidebar visible={true} activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
        
        <main className="flex-1 overflow-auto bg-background">
          {renderContent()}
        </main>
      </div>

      <footer className="h-6 bg-primary flex items-center justify-between px-3 text-xs text-primary-foreground fixed bottom-10 left-0 right-0">
        <div className="flex items-center gap-4">
          <span>🔌 Connected</span>
          <span className="hidden sm:inline">main</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">UTF-8</span>
          <span className="hidden sm:inline">{getFileType()}</span>
          <span>Ln 1, Col 1</span>
        </div>
      </footer>

      <SocialFooter />
    </div>
  );
};

export default App;
