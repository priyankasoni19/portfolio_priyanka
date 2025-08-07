import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SkillBar } from "../ui/skill-bar";

const softSkills = [
  { skill: "Problem Solving", percentage: 95 },
  { skill: "Team Collaboration", percentage: 90 },
  { skill: "Learning Agility", percentage: 98 },
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-4 bg-bg-secondary">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-accent"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg mb-6 text-text-secondary">
              I'm a passionate full-stack developer with 2+ years of experience creating digital experiences 
              that combine beautiful design with robust functionality. I specialize in modern web technologies 
              and love turning complex problems into simple, elegant solutions.
            </p>
            <p className="text-lg text-text-secondary">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, 
              or sharing knowledge with the developer community through blog posts and mentoring.
            </p>
          </motion.div>
          
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {softSkills.map((item, index) => (
              <SkillBar
                key={item.skill}
                skill={item.skill}
                percentage={item.percentage}
                delay={index * 200}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
