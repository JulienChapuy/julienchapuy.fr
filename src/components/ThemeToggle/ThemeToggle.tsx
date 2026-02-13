import React, { useEffect, useState } from 'react';
import styles from './ThemeToggle.module.scss';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Read directly from DOM to sync state on mount if script already ran
    const currentTheme = document.documentElement.getAttribute('data-theme') as
      | 'light'
      | 'dark';
    if (currentTheme) {
      setTheme(currentTheme);
    } else {
      // Fallback checks similar to init script
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';
      setTheme(savedTheme || systemTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      className={styles['theme-toggle']}
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <i
        className={
          theme === 'dark' ? 'ion-ios-sunny-outline' : 'ion-ios-moon-outline'
        }
      ></i>
    </button>
  );
};

export default ThemeToggle;
