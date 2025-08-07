import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "professional" | "cyberpunk" | "sunset" | "ocean";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("professional");

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("portfolio-theme") as Theme;
    if (savedTheme && ["professional", "cyberpunk", "sunset", "ocean"].includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Apply theme to document and save to localStorage
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
