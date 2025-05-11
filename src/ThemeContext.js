import React, { createContext, useState, useContext, useEffect, useMemo } from "react";

const ThemeContext = createContext(undefined);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Try to get theme from localStorage first
    const savedTheme = window.localStorage.getItem("chesscon-theme");
    if (savedTheme) return savedTheme;
    
    // If no saved theme, check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return "dark";
    }
    
    // Default to light theme
    return "light";
  });

  useEffect(() => {
    // Update body attribute and localStorage when theme changes
    document.body.setAttribute("data-theme", theme);
    window.localStorage.setItem("chesscon-theme", theme);
    
    // Remove any lingering mobile-menu-open class when theme changes
    document.body.classList.remove('mobile-menu-open');
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      const savedTheme = window.localStorage.getItem("chesscon-theme");
      // Only auto-switch if user hasn't manually set a theme
      if (!savedTheme) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
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