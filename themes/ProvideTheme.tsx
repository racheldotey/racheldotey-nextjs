import { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { getTheme } from '.';

const SAVED_THEME = 'appTheme';
const DEFAULT_THEME = 'light';

const ThemeContext = createContext({
  currentTheme: DEFAULT_THEME,
  setTheme: (t: string) => {},
});

export const ProvideTheme = (props: React.PropsWithChildren) => {
  const { children } = props;

  // State to hold the selected theme name
  const [selectedTheme, setSelectedTheme] = useState(DEFAULT_THEME);

  // Get the theme selected by the user that is saved in local storage
  useEffect(() => {
    // Perform localStorage action
    const savedTheme = localStorage.getItem(SAVED_THEME);
    if (savedTheme) {
      setSelectedTheme(savedTheme);
    }
  }, []);

  // Retrieve the theme object by theme name
  const theme = getTheme(selectedTheme);

  // function to handle user theme selection on click and save it to local storage
  const handleThemeChange = (theme: string) => {
    setSelectedTheme(theme);
    localStorage.setItem(SAVED_THEME, theme);
  };

  const contextValue = {
    currentTheme: selectedTheme,
    setTheme: handleThemeChange,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ProvideTheme;
