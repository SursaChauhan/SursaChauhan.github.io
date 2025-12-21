import { profile } from "@/data/profile";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

interface TechCarouselProps {
  items: string[];
}

function TechCarousel({ items }: TechCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [items.length]);

  const visibleItems = [...items, ...items, ...items];
  
  return (
    <div className="relative overflow-hidden py-6">
      <div className="flex items-center justify-center gap-2 md:gap-4">
        <button 
          onClick={() => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)}
          className="p-2 hover:bg-accent rounded-full transition-colors text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft size={20} />
        </button>
        
        <div className="flex gap-3 md:gap-6 overflow-hidden max-w-[280px] sm:max-w-lg md:max-w-2xl lg:max-w-4xl">
          <motion.div 
            className="flex gap-6 md:gap-10"
            animate={{ x: -currentIndex * 120 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {visibleItems.map((tech, index) => (
              <motion.span
                key={`${tech}-${index}`}
                className="text-muted-foreground font-mono text-sm md:text-base whitespace-nowrap px-3 py-2 rounded border border-border/50 hover:border-primary hover:text-primary transition-all cursor-default min-w-[100px] text-center"
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
        
        <button 
          onClick={() => setCurrentIndex((prev) => (prev + 1) % items.length)}
          className="p-2 hover:bg-accent rounded-full transition-colors text-muted-foreground hover:text-foreground"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default function Hello() {
  return (
    <div className="min-h-full flex flex-col">
      {/* Mobile: Avatar first, then content */}
      <div className="flex-1 flex flex-col px-6 md:px-12 lg:px-20 py-8 md:py-12">
        
        {/* Mobile Avatar - shown only on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="md:hidden flex justify-center mb-8"
        >
          <div className="relative">
            <div className="absolute w-40 h-40 rounded-full border-4 border-primary/30 -inset-2" />
            {profile.avatar ? (
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-36 h-36 object-cover rounded-full border-4 border-border shadow-2xl"
              />
            ) : (
              <div className="w-36 h-36 rounded-full border-4 border-border bg-card flex items-center justify-center">
                <span className="text-4xl font-mono text-primary">
                  {profile.name.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Desktop: Side by side layout */}
        <div className="flex-1 flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left content - Text */}
          <div className="flex-1 max-w-xl lg:max-w-2xl z-10 text-center md:text-left">
            {/* Hello text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                Hello
              </span>
              <span className="text-primary text-4xl md:text-5xl lg:text-6xl font-bold">.</span>
            </motion.div>

            {/* Name with accent line */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-4 mb-4 justify-center md:justify-start"
            >
              <div className="w-8 md:w-12 h-0.5 bg-primary" />
              <span className="font-mono text-xl md:text-2xl lg:text-3xl text-foreground/80 italic">
                I'm {profile.name.split(' ')[0]}
              </span>
            </motion.div>

            {/* Role */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="font-mono text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8"
            >
              {profile.role}
            </motion.h1>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-row gap-4 justify-center md:justify-start"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent('changeTab', { detail: 'projects' }));
                }}
                className="group flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-all hover-lift text-sm md:text-base"
              >
                View Projects?
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href={profile.resumeUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 border border-primary text-primary font-medium rounded hover:bg-primary/10 transition-all hover-lift text-sm md:text-base"
              >
                <Download size={16} />
                My resume
              </a>
            </motion.div>
          </div>

          {/* Right side - Avatar (Desktop only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:flex items-center justify-center flex-shrink-0 relative"
          >
            {/* Decorative circle */}
            <div className="absolute w-64 h-64 lg:w-80 lg:h-80 rounded-full border-4 border-primary/30" />
            <div className="absolute w-72 h-72 lg:w-96 lg:h-96 rounded-full border-2 border-primary/20 rotate-45" />
            
            {/* Decorative brackets */}
            <motion.div 
              className="absolute -left-8 top-1/2 -translate-y-1/2 text-primary/40 text-6xl lg:text-8xl font-thin"
              animate={{ x: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {"<"}
            </motion.div>
            <motion.div 
              className="absolute -right-8 top-1/2 -translate-y-1/2 text-primary/40 text-6xl lg:text-8xl font-thin"
              animate={{ x: [5, -5, 5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {"/>"}
            </motion.div>

            {/* Avatar image */}
            <div className="relative z-10">
              {profile.avatar ? (
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-48 h-48 lg:w-64 lg:h-64 object-cover rounded-full border-4 border-border shadow-2xl"
                />
              ) : (
                <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full border-4 border-border bg-card flex items-center justify-center">
                  <span className="text-6xl lg:text-8xl font-mono text-primary">
                    {profile.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tech stack carousel at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="border-t border-border bg-card/50 py-4"
      >
        <TechCarousel items={profile.techStack} />
      </motion.div>
    </div>
  );
}
