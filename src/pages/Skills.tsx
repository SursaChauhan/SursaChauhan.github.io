import { profile } from "@/data/profile";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    { name: "Languages", items: profile.skills.languages, color: "syntax-keyword" },
    { name: "Frameworks", items: profile.skills.frameworks, color: "syntax-function" },
    { name: "Databases", items: profile.skills.databases, color: "syntax-string" },
    { name: "Tools", items: profile.skills.tools, color: "syntax-property" },
    { name: "Concepts", items: profile.skills.concepts, color: "syntax-tag" },
  ];

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
          // skills.ts
        </motion.div>
        <motion.h1 
          className="text-2xl md:text-3xl font-bold mt-2 font-mono"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="syntax-keyword">type</span>{" "}
          <span className="text-foreground">TechStack</span>{" "}
          <span className="text-foreground">=</span>{" "}
          <span className="syntax-string">"Backend"</span>
        </motion.h1>
      </div>

      {/* Skills Grid */}
      <div className="space-y-8">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + catIndex * 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-muted-foreground">//</span>
              <h2 className={`font-mono text-lg ${category.color}`}>{category.name}</h2>
            </div>
            
            <div className="flex flex-wrap gap-2 pl-6">
              {category.items.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  className="skill-badge cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + catIndex * 0.1 + skillIndex * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Export statement */}
      <motion.div 
        className="mt-12 font-mono text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <span className="syntax-keyword">export default</span>{" "}
        <span className="syntax-function">TechStack</span>
        <span className="text-foreground">;</span>
      </motion.div>
    </motion.div>
  );
}
