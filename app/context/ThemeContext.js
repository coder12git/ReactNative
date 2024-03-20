import { createContext, useState } from 'react';

const themes = {
  light: {
    backgroundColor: '#EFECEC',
    textColor: '#000000',
    placeholderTextColor: 'grey',
    headColor: '#f1f8ff',
  },
  dark: {
    backgroundColor: '#000000',
    textColor: '#FFFFFF',
    placeholderTextColor: '#FFF0F5',
    headColor: 'grey',
  },
};

const ThemeContext = createContext(themes.light);

export const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;