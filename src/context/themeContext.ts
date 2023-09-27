import {createContext, useContext} from 'react';
import ThemeColors from 'lib/theme';
import {ThemeContextType} from './types';

export const ThemeContext = createContext<ThemeContextType>({
  type: 'light',
  color: ThemeColors.light,
  setTheme: () => {},
});

export function useThemeContext() {
  const context = useContext<ThemeContextType>(ThemeContext);

  if (context === undefined) {
    throw new Error('Theme not yet initialized');
  }

  return context;
}
