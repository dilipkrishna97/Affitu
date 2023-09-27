import {ColorSchemeName} from 'react-native';
import {ThemeContextType} from '@src/context/types';

export type AppearancePreferences = {
  colorScheme: ColorSchemeName;
};

export type ViewModelReturnType = {
  theme: ThemeContextType;
};
