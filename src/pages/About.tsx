import { profile } from "@/data/profile";
import { motion } from "framer-motion";
import {projects} from "@/data/projects";
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

export default function About() {
  let lineNum = 0;
  const nextLine = () => ++lineNum;

  return (
    <motion.div 
      className="py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Line number={nextLine()}>
        <span className="syntax-comment">/* ================================</span>
      </Line>
      <Line number={nextLine()}>
        <span className="syntax-comment">   About Me - Developer Profile</span>
      </Line>
      <Line number={nextLine()}>
        <span className="syntax-comment">   ================================ */</span>
      </Line>
      <Line number={nextLine()}><span></span></Line>
      
      {/* Bio Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Line number={nextLine()}>
          <span className="syntax-keyword">.bio</span>
          <span className="text-foreground"> {"{"}</span>
        </Line>
        <Line number={nextLine()} indent={1}>
          <span className="syntax-property">content</span>
          <span className="text-foreground">: </span>
          <span className="syntax-string">"{profile.bio}"</span>
          <span className="text-foreground">;</span>
        </Line>
        <Line number={nextLine()}>
          <span className="text-foreground">{"}"}</span>
        </Line>
      </motion.div>
      <Line number={nextLine()}><span></span></Line>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Line number={nextLine()}>
          <span className="syntax-comment">/* Quick Stats */</span>
        </Line>
        <Line number={nextLine()}>
          <span className="syntax-keyword">.stats</span>
          <span className="text-foreground"> {"{"}</span>
        </Line>
        <Line number={nextLine()} indent={1}>
          <span className="syntax-property">--years-experience</span>
          <span className="text-foreground">: </span>
          <span className="syntax-function">{profile.stats[0]}</span>
          <span className="text-foreground">;</span>
        </Line>
        <Line number={nextLine()} indent={1}>
          <span className="syntax-property">--projects-completed</span>
          <span className="text-foreground">: </span>
          <span className="syntax-function">{projects?.length}</span>
          <span className="text-foreground">;</span>
        </Line>
        <Line number={nextLine()} indent={1}>
          <span className="syntax-property">--certifications</span>
          <span className="text-foreground">: </span>
          <span className="syntax-function">{profile.certifications.length}</span>
          <span className="text-foreground">;</span>
        </Line>
        <Line number={nextLine()}>
          <span className="text-foreground">{"}"}</span>
        </Line>
      </motion.div>
      <Line number={nextLine()}><span></span></Line>

      {/* Location */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Line number={nextLine()}>
          <span className="syntax-keyword">.location</span>
          <span className="text-foreground"> {"{"}</span>
        </Line>
        <Line number={nextLine()} indent={1}>
          <span className="syntax-property">city</span>
          <span className="text-foreground">: </span>
          <span className="syntax-string">"{profile.location}"</span>
          <span className="text-foreground">;</span>
        </Line>
        <Line number={nextLine()} indent={1}>
          <span className="syntax-property">remote</span>
          <span className="text-foreground">: </span>
          <span className="syntax-function">available</span>
          <span className="text-foreground">;</span>
        </Line>
        <Line number={nextLine()}>
          <span className="text-foreground">{"}"}</span>
        </Line>
      </motion.div>
    </motion.div>
  );
}
