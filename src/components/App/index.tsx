/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {API_URL, ENV} from 'react-native-config';
import {useTranslation} from 'react-i18next';
import {colorType} from 'lib/theme/colors';
import {ThemeContext} from '@src/context/themeContext';
import ViewModel from './ViewModel';
import {ViewModelReturnType} from './types';

function App(): JSX.Element {
  const {t} = useTranslation();

  const {theme}: ViewModelReturnType = ViewModel();
  const styleClass = style(theme.color);

  return (
    <ThemeContext.Provider value={theme}>
      <View style={styleClass.mainContainerStyle}>
        <Text onPress={() => theme.setTheme()}>{`${API_URL} -  ${ENV}  ${t(
          'welcome',
        )}`}</Text>
      </View>
    </ThemeContext.Provider>
  );
}

export default App;

const style = (theme: colorType) =>
  StyleSheet.create({
    mainContainerStyle: {
      flex: 1,
      width: '100%',
      backgroundColor: theme.black,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
