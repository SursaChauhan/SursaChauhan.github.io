import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { profile } from "@/data/profile";

export default function SocialFooter() {
  const socialLinks = [
    { icon: Github, href: profile.github, label: "GitHub" },
    { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: profile.twitter, label: "Twitter" },
    { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 h-10 bg-topbar-bg border-t border-border flex items-center px-4 z-50">
      <span className="text-muted-foreground text-sm mr-4 hidden sm:inline">Connect with me:</span>
      <div className="flex items-center gap-4">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link text-muted-foreground hover:text-primary"
            title={social.label}
          >
            <social.icon size={20} strokeWidth={1.5} />
          </a>
        ))}
      </div>
    </footer>
  );
}
