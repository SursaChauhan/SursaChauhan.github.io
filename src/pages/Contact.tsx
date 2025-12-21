import { profile } from "@/data/profile";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, Twitter } from "lucide-react";
import emailjs from "@emailjs/browser";

interface LineProps {
  number: number;
  children: React.ReactNode;
  indent?: number;
}

function Line({ number, children, indent = 0 }: LineProps) {
  return (
    <div className="flex hover:bg-accent/30 transition-colors">
      <span className="line-number px-4 py-0.5 text-sm">{number}</span>
      <span className="py-0.5 font-mono text-sm" style={{ paddingLeft: `${indent * 1}rem` }}>
        {children}
      </span>
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", formData);
  //   // Add your form submission logic here
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );

      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      console.error("Email error:", error);
      alert("Failed to send message. Try again.");
    }
  };

  let lineNum = 0;
  const nextLine = () => ++lineNum;

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
          {"{"} // contact.json
        </motion.div>
        <motion.h1
          className="text-2xl md:text-3xl font-bold mt-2 font-mono"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="syntax-property">"contact"</span>
          <span className="text-foreground">:</span>
        </motion.h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="font-mono text-lg text-foreground mb-4">// Connect with me</h2>
          <div className="space-y-4">
            <motion.a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover-lift group"
              whileHover={{ borderColor: "hsl(var(--primary))" }}
            >
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <div className="text-foreground group-hover:text-primary transition-colors">
                  {profile.email}
                </div>
              </div>
            </motion.a>

            <motion.a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover-lift group"
              whileHover={{ borderColor: "hsl(var(--primary))" }}
            >
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Github size={20} />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">GitHub</div>
                <div className="text-foreground group-hover:text-primary transition-colors">
                  github.com
                </div>
              </div>
            </motion.a>

            <motion.a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover-lift group"
              whileHover={{ borderColor: "hsl(var(--primary))" }}
            >
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Linkedin size={20} />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">LinkedIn</div>
                <div className="text-foreground group-hover:text-primary transition-colors">
                  linkedin.com
                </div>
              </div>
            </motion.a>

            <motion.a
              href={profile.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover-lift group"
              whileHover={{ borderColor: "hsl(var(--primary))" }}
            >
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Twitter size={20} />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Twitter</div>
                <div className="text-foreground group-hover:text-primary transition-colors">
                  twitter.com
                </div>
              </div>
            </motion.a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="font-mono text-lg text-foreground mb-4">// Send a message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-mono text-muted-foreground mb-2">
                <span className="syntax-property">"name"</span>:
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                className="w-full px-4 py-3 bg-card border border-border rounded-lg font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-mono text-muted-foreground mb-2">
                <span className="syntax-property">"email"</span>:
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-card border border-border rounded-lg font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-mono text-muted-foreground mb-2">
                <span className="syntax-property">"message"</span>:
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Your message..."
                rows={4}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                required
              />
            </div>

            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground font-mono rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send size={18} />
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}
