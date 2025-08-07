import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTheme } from "../ui/theme-provider";
import { Button } from "../ui/button";

const themes = [
  { key: "professional" as const, name: "Dark Professional", class: "bg-gradient-to-br from-black to-gray-800" },
  { key: "cyberpunk" as const, name: "Cyberpunk", class: "bg-gradient-to-br from-gray-900 to-gray-700" },
  { key: "sunset" as const, name: "Sunset", class: "bg-gradient-to-br from-orange-900 to-red-900" },
  { key: "ocean" as const, name: "Ocean Deep", class: "bg-gradient-to-br from-slate-900 to-blue-900" },
];

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-black/80" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold text-accent"
            whileHover={{ scale: 1.05 }}
          >
            Priyanka Soni
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="nav-link relative text-text-secondary hover:text-accent transition-colors duration-300"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Theme Switcher */}
          <div className="hidden md:flex space-x-2">
            {themes.map((themeOption, index) => (
              <motion.button
                key={themeOption.key}
                onClick={() => setTheme(themeOption.key)}
                className={`w-10 h-10 rounded-full border-2 transition-all duration-300 ${themeOption.class} ${
                  theme === themeOption.key
                    ? "border-accent shadow-glow"
                    : "border-transparent hover:border-accent/50"
                }`}
                title={themeOption.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-accent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden py-4 border-t border-gray-700"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-text-secondary hover:text-accent transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="flex space-x-2 mt-4">
              {themes.map((themeOption) => (
                <button
                  key={themeOption.key}
                  onClick={() => setTheme(themeOption.key)}
                  className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${themeOption.class} ${
                    theme === themeOption.key
                      ? "border-accent shadow-glow"
                      : "border-transparent"
                  }`}
                  title={themeOption.name}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
