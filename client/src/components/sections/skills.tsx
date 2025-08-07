import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Server, Gavel } from "lucide-react";
import { SkillBar } from "../ui/skill-bar";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: [
      { skill: "React/Next.js", percentage: 90 },
      { skill: "TypeScript", percentage: 85 },
      { skill: "CSS/Tailwind", percentage: 95 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { skill: "Node.js", percentage: 88 },
      { skill: "Python", percentage: 82 },
      { skill: "PostgreSQL", percentage: 85 },
    ],
  },
  {
    title: "Tools",
    icon: Gavel,
    skills: [
      { skill: "Git/GitHub", percentage: 92 },
      { skill: "Docker", percentage: 78 },
      { skill: "AWS", percentage: 80 },
    ],
  },
];

export function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-accent"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="text-center p-6 rounded-lg bg-bg-secondary"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <div className="text-4xl mb-4 text-accent flex justify-center">
                <category.icon size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-6 text-text-primary">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.skill}
                    skill={skill.skill}
                    percentage={skill.percentage}
                    delay={(categoryIndex * 3 + skillIndex) * 100}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
