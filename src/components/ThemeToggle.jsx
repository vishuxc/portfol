import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('portfolioTheme');
    if (saved === 'light') {
      applyLightMode();
    } else {
      applyDarkMode();
    }
  }, []);

  const applyDarkMode = () => {
    setIsDark(true);
    localStorage.setItem('portfolioTheme', 'dark');
    const root = document.documentElement;
    root.setAttribute('data-theme', 'cyan');
    root.classList.remove('light');
    root.classList.add('dark');
  };

  const applyLightMode = () => {
    setIsDark(false);
    localStorage.setItem('portfolioTheme', 'light');
    const root = document.documentElement;
    root.setAttribute('data-theme', 'light');
    root.classList.remove('dark');
    root.classList.add('light');
  };

  const toggleTheme = () => {
    if (isDark) {
      applyLightMode();
    } else {
      applyDarkMode();
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="px-3.5 py-2 rounded-full glass-panel border border-cyan-500/30 hover:border-cyan-400 text-slate-200 hover:text-cyan-300 font-bold text-xs flex items-center gap-2 shadow-lg transition-all"
      aria-label="Toggle Theme: Cyber Cyan Dark vs Light Glass"
      title={isDark ? "Switch to Light Glass Mode" : "Switch to Cyber Cyan Dark"}
    >
      {isDark ? (
        <>
          <Moon className="w-4 h-4 text-cyan-400" />
          <span className="hidden sm:inline">Cyber Cyan Dark</span>
        </>
      ) : (
        <>
          <Sun className="w-4 h-4 text-amber-500" />
          <span className="hidden sm:inline">Light Glass</span>
        </>
      )}
    </motion.button>
  );
}
