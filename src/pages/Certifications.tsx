import { profile } from "@/data/profile";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

export default function Certifications() {
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
          {"{"} // certs.json
        </motion.div>
        <motion.h1 
          className="text-2xl md:text-3xl font-bold mt-2 font-mono"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="syntax-property">"certifications"</span>
          <span className="text-foreground">: [</span>
        </motion.h1>
      </div>

      {/* Certifications Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {profile.certifications.map((cert, index) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="bg-card border border-border rounded-lg p-4 md:p-6 hover-lift group"
            whileHover={{ borderColor: "hsl(var(--primary))" }}
          >
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Award size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground text-sm md:text-base mb-1">
                  {cert.name}
                </h3>
                <p className="text-muted-foreground text-sm font-mono">
                  {cert.issuer}
                </p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs font-mono text-primary">{cert.year}</span>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-primary transition-colors flex items-center gap-1 text-xs"
                  >
                    View credential
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.div 
        className="mt-8 font-mono text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <span className="text-foreground">]</span>
        <span className="text-foreground">{"}"}</span>
      </motion.div>
    </motion.div>
  );
}
