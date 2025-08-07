import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";

export function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center max-w-4xl mx-auto px-4">
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 text-accent"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Priyanka Soni
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl mb-8 text-text-secondary"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Full Stack Developer & UI/UX Designer
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Button
            onClick={scrollToProjects}
            variant="outline"
            size="lg"
            className="px-8 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-bg-primary transition-all duration-300 hover:shadow-glow"
          >
            View My Work
          </Button>
        </motion.div>
        
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="text-accent" size={24} />
        </motion.div>
      </div>
    </section>
  );
}
