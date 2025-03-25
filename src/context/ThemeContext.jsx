import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('app-theme') || 'light'
  );

  const toggleTheme = (newTheme) => {
    console.log('New theme is:', newTheme); //Remove this later
    if (newTheme === theme) return;
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.classList.remove('dark-mode', 'violet-mode');

    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else if (theme === 'violet') {
      document.body.classList.add('violet-mode');
    }
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
