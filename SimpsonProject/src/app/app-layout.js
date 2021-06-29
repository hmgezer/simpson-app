import React from 'react';
import {StatusBar} from 'react-native';
import AppNavigator from '../navigators';
import {ThemeProvider} from 'styled-components';
import {themeStyle} from '../utils/theme';
const AppLayout = () => {
  return (
    <ThemeProvider theme={themeStyle}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <AppNavigator />
    </ThemeProvider>
  );
};

export default AppLayout;
