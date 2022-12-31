import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar, LogBox } from 'react-native';

import ContextProvider from './src/hooks/context';

import Routes from './src/routes';
import { theme } from './src/global/styles/global';

LogBox.ignoreLogs(['Remote debugger']);

export default function App() {
  return (
    <ContextProvider>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.white_grey}
        translucent
      />
      <Routes />
    </ContextProvider>
  );
}
