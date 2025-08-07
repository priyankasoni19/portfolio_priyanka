import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SkillBarProps {
  skill: string;
  percentage: number;
  delay?: number;
}

export function SkillBar({ skill, percentage, delay = 0 }: SkillBarProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setWidth(percentage);
      }, delay);
    }
  }, [inView, percentage, delay]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between">
        <span className="text-text-primary">{skill}</span>
        <span className="text-accent">{percentage}%</span>
      </div>
      <div className="h-2 bg-bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, var(--accent), transparent)",
          }}
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
