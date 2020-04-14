import React, {Component} from 'react';
import axios from 'axios';
import {Provider} from 'react-redux';
import {DefaultTheme, Provider as ThemeProvider} from 'react-native-paper';
import {configureStore} from '../src/shared/store';
import RootStack from '../src/Routes';

export const store = configureStore(axios, {});

function App() {
  const theme = {
    ...DefaultTheme,
    dark: true,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      accent: 'black',
      background: 'black',
    },
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RootStack />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
