import { createContext, useContext } from 'react';
import { useColorScheme } from 'react-native';
import { theme } from './theme';

const ThemeContext = createContext(theme.dark);

export function ThemeProvider({ children }) {
  const scheme = useColorScheme();
  const value = scheme === 'dark' ? theme.dark : theme.light;
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}