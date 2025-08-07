import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "mailto:john@developer.com", icon: Mail, label: "Email" },
];

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold text-accent mb-4 md:mb-0"
            whileHover={{ scale: 1.05 }}
          >
            Priyanka soni
          </motion.div>

          {/* Social Links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="w-10 h-10 rounded-full bg-bg-secondary text-accent flex items-center justify-center transition-all duration-300 hover:shadow-glow"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.p
            className="text-text-secondary text-sm text-center md:text-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            © 2024 Priyanka Soni. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
