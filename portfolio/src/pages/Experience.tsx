import { profile } from "@/data/profile";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <motion.div 
      className="py-6 px-4 md:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header */}
      <div className="mb-8">
        <motion.div 
          className="font-mono text-muted-foreground text-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          # experience.md
        </motion.div>
        <motion.h1 
          className="text-2xl md:text-3xl font-bold mt-2 font-mono text-foreground"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          ## Work Experience
        </motion.h1>
      </div>

      {/* Timeline */}
      <div className="relative pl-8 md:pl-12 space-y-8">
        {/* Vertical timeline line */}
        <div className="absolute left-3 md:left-5 top-0 bottom-0 w-px bg-border" />

        {profile.experience.map((exp, index) => (
          <motion.div
            key={exp.company}
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.15 }}
          >
            {/* Timeline dot */}
            <motion.div 
              className="absolute -left-5 md:-left-7 top-1 w-4 h-4 rounded-full bg-primary border-4 border-background"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 + index * 0.15, type: "spring" }}
            />

            {/* Experience card */}
            <motion.div 
              className="bg-card border border-border rounded-lg p-4 md:p-6 hover-lift"
              whileHover={{ borderColor: "hsl(var(--primary))" }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground flex items-center gap-2">
                    <Briefcase size={18} className="text-primary" />
                    {exp.role}
                  </h3>
                  <p className="text-secondary font-mono text-sm md:text-base">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm font-mono">
                  <Calendar size={14} />
                  {exp.period}
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.div 
        className="mt-12 font-mono text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        ---
        <br />
        <span className="text-foreground">📍 Currently based in {profile.location}</span>
      </motion.div>
    </motion.div>
  );
}
