import { useState } from "react";
import { projects } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ChevronRight } from "lucide-react";

export default function Projects() {
  const years = [...new Set(projects.map(p => p.year))].sort((a, b) => b.localeCompare(a));
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const filteredProjects = selectedYear 
    ? projects.filter(p => p.year === selectedYear)
    : projects;

  return (
    <div className="flex min-h-full">
      {/* Timeline Sidebar */}
      <motion.aside 
        className="hidden md:block w-40 lg:w-48 border-r border-border p-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="font-mono text-muted-foreground text-sm mb-4">Timeline</h3>
        <div className="space-y-2">
          <motion.button
            onClick={() => setSelectedYear(null)}
            className={`w-full flex items-center gap-2 px-3 py-2 rounded text-left font-mono text-sm transition-colors ${
              selectedYear === null 
                ? "bg-primary/20 text-primary" 
                : "text-muted-foreground hover:text-foreground hover:bg-accent"
            }`}
            whileHover={{ x: 4 }}
          >
            <ChevronRight size={14} className={selectedYear === null ? "text-primary" : ""} />
            All
          </motion.button>
          {years.map((year) => (
            <motion.button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded text-left font-mono text-sm transition-colors ${
                selectedYear === year 
                  ? "bg-primary/20 text-primary" 
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
              whileHover={{ x: 4 }}
            >
              <ChevronRight size={14} className={selectedYear === year ? "text-primary" : ""} />
              {year}
            </motion.button>
          ))}
        </div>
      </motion.aside>

      {/* Projects Content */}
      <div className="flex-1 py-6 px-4 md:px-8 overflow-auto">
        {/* Header */}
        <div className="mb-8">
          <motion.div 
            className="font-mono text-muted-foreground text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            // projects.js
          </motion.div>
          <motion.h1 
            className="text-2xl md:text-3xl font-bold mt-2 font-mono"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Projects
          </motion.h1>
        </div>

        {/* Mobile Year Filter */}
        <div className="md:hidden mb-6 flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setSelectedYear(null)}
            className={`px-3 py-1.5 rounded font-mono text-xs whitespace-nowrap ${
              selectedYear === null 
                ? "bg-primary text-primary-foreground" 
                : "bg-accent text-muted-foreground"
            }`}
          >
            All
          </button>
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-3 py-1.5 rounded font-mono text-xs whitespace-nowrap ${
                selectedYear === year 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-accent text-muted-foreground"
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedYear || "all"}
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors"
              >
                {/* Project Card */}
                <div className="bg-card border border-border rounded-lg p-4 md:p-6 hover-lift group">
                  {/* Header with GitHub icon */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-full bg-accent">
                      <Github size={20} className="text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-muted-foreground text-sm font-mono">
                        {project.period}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-3 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs font-mono text-muted-foreground"
                      >
                        {tech}.
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded border border-border text-sm font-mono text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                    >
                      <Github size={14} />
                      View Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded bg-primary text-primary-foreground text-sm font-mono hover:bg-primary/90 transition-colors"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
