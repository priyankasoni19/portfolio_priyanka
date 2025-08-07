import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function Particles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className = "absolute rounded-full pointer-events-none animate-float opacity-10";
      particle.style.background = "var(--accent)";
      
      const size = Math.random() * 4 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      particle.style.left = `${Math.random() * window.innerWidth}px`;
      particle.style.top = `${Math.random() * window.innerHeight}px`;
      
      particle.style.animationDuration = `${Math.random() * 4 + 4}s`;
      particle.style.animationDelay = `${Math.random() * 2}s`;
      
      container.appendChild(particle);
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 8000);
    };

    const interval = setInterval(createParticle, 300);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ zIndex: -1 }}
    />
  );
}
