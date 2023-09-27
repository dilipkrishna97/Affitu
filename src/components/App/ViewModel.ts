import {useCallback, useEffect, useState} from 'react';
import {Appearance} from 'react-native';
import {ThemeContextType} from '@src/context/types';
import ThemeColors from 'lib/theme';
import {AppearancePreferences, ViewModelReturnType} from './types';

export default function ViewModel(): ViewModelReturnType {
  const switchTheme = useCallback(
    ({colorScheme}: AppearancePreferences): void => {
      if (colorScheme) {
        setTheme({
          type: colorScheme,
          color: ThemeColors[colorScheme],
          setTheme: switchTheme,
        });
      }
    },
    [],
  );
  const [theme, setTheme] = useState<ThemeContextType>({
    type: 'light',
    color: ThemeColors.light,
    setTheme: switchTheme,
  });

  useEffect(() => {
    const AppearanceListener = Appearance.addChangeListener(switchTheme);
    return () => {
      AppearanceListener.remove();
    };
  }, [switchTheme]);

  return {theme};
}
