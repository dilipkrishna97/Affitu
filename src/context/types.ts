import {colorType} from 'lib/theme/colors';
import {ColorSchemeName} from 'react-native';

export interface ThemeContextType {
  type: ColorSchemeName;
  color: colorType;
  setTheme: Function;
}
