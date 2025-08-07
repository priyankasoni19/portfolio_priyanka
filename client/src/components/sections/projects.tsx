import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
// import cloudAcademy from "/public/images/cloudAcademy.png"

const projects = [
  {
    id: "1",
    title: "Cloud Academy",
    description: "A comprehensive analytics dashboard for e-commerce businesses with real-time data visualization.",
    image: "/public/images/cloudAcademy.jpeg",
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
  },
{
    id: "2",
    title: "mediLab",
    description: "Results-driven ReactJS developer with expertise in crafting responsive, scalable, and user-friendly web applications using Bootstrap CSS. Proficient in delivering high-quality solutions with a focus on performance, accessibility, and seamless user experiences.",
    image: "/public/images/medilab.png",
    technologies: ["React", "Node.js", "MongoDB"],
    // githubUrl: "https://github.com",
    demoUrl: "https://medilab-orpin.vercel.app/",
  },

{
    id: "3",
    title: "Comfy Store",
    description: "A modern e-commerce application built with React, showcasing a wide range of products and a user-friendly interface.",
    image: "/public/images/comfy.png",
    technologies: ["React", "Node.js", "MongoDB"],
  
    demoUrl: "https://react-e-commerce-comfy-store-app-master.vercel.app/",
  },

  {
    id: "3",
    title: "Coching App",
    description: "A comprehensive coaching application that connects users with professional coaches, featuring booking and scheduling functionalities.",
    image: "/public/images/ntiApp.png",
    technologies: ["React", "Node.js", "Firebase"],
  
    demoUrl: "https://nticochingapp.vercel.app/",
  },



  
];

export function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 px-4 bg-bg-secondary">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-accent"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="bg-bg-secondary border border-transparent hover:border-accent transition-all duration-300 hover:shadow-glow hover:-translate-y-2 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-accent text-accent hover:bg-accent hover:text-bg-primary"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github size={16} className="mr-1" />
                          Code
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-accent text-accent hover:bg-accent hover:text-bg-primary"
                        asChild
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-1" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-text-primary">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-text-secondary text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-accent text-bg-primary text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
