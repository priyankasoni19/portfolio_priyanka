import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download } from "lucide-react";
import { Button } from "../ui/button";

const experiences = [
  {
    title: "Mern Stack Developer",
    company: "NTI TECHNOLOGIES.pvt Ltd",
    period: "2025 - Present",
    description: "Led development of scalable web applications serving 100k+ users. Mentored junior developers and implemented CI/CD practices.",
  },
  {
    title: "Techno Functional",
    company: "VTS Technologies pvt Ltd",
    period: "2024",
    description: "Collaborated with cross-functional teams to implement feature upgrades in a ReactJS and Node.js-based ERP system, reducing internal ticket resolution time by 20%. Additionally, developed automation scripts using JavaScript and MongoDB Aggregation for reporting modules, significantly minimizing manual effort and improving report generation speed by 40%.",
  },
  {
    title: "Software Developer (Internship)",
    company: "Coder solutions pvt Ltd",
    period: "2023",
    description: "Innovated user-centric features, including brand editing and automated invoice number generation, which enhanced system efficiency by 30% and reduced user drop-off by 15%. Maintained high coding standards and utilized Git/GitLab for version control, resulting in a 30% improvement in code quality and a 25% reduction in deployment errors.",
  },
];

const education = [
  {
    title: "Master Of Technology in Computer Science",
    company: "Awadhesh Pratap Singh University",
    period: "2021",
    description: "Specialized in web development and software engineering principles.",
  },
];

const certifications = [
  "AWS Certified Developer Associate",
  "Google Cloud Professional Developer",
  "MongoDB Certified Developer",
];

export function Resume() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const handleDownload = () => {
    // In a real application, this would trigger an actual PDF download
    alert("Resume download functionality would be implemented here!");
  };

  return (
    <section id="resume" className="py-20 px-4">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-accent"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Resume
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-accent">Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="border-l-2 border-accent pl-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <h4 className="font-semibold text-text-primary">{exp.title}</h4>
                  <p className="text-accent font-medium">{exp.company} • {exp.period}</p>
                  <p className="text-text-secondary mt-2">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-accent">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="border-l-2 border-accent pl-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <h4 className="font-semibold text-text-primary">{edu.title}</h4>
                  <p className="text-accent font-medium">{edu.company} • {edu.period}</p>
                  <p className="text-text-secondary mt-2">{edu.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-accent mb-4">Certifications</h4>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <motion.li
                    key={index}
                    className="text-text-secondary"
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  >
                    • {cert}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Download Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Button
            onClick={handleDownload}
            size="lg"
            className="px-8 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-bg-primary transition-all duration-300 hover:shadow-glow inline-flex items-center"
            variant="outline"
          >
            <Download size={20} className="mr-2" />
            Download Resume PDF
            
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
