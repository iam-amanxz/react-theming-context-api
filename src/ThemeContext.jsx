import { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

const themes = {
  light: {
    background: '#eee',
    color: '#333',
  },
  dark: {
    background: '#111',
    color: '#fff',
  },
  dim: {
    background: '#15202b',
    color: '#f9f8fe',
  },
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const saveThemeToLocalStorage = (key) => {
    localStorage.setItem('appTheme', key);
  };

  const changeTheme = (key) => {
    setTheme(themes[key]);
    saveThemeToLocalStorage(key);
  };

  useEffect(() => {
    const localThemeKey = localStorage.getItem('appTheme');
    if (localThemeKey && themes[localThemeKey]) {
      setTheme(themes[localThemeKey]);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { themes, useTheme };
export default ThemeProvider;
