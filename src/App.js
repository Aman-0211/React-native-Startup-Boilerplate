import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Provider} from 'react-redux';
import {DefaultTheme, Provider as ThemeProvider} from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import {configureStore, getUserInfo} from '../src/shared/store';
import RootStack from '../src/Routes';
import AsyncStorage from '@react-native-community/async-storage';
import {UserInfoProvider} from './framework';

export const store = configureStore(axios, {});

function App(props) {
  const [state, setState] = useState({
    isauthenticate: false,
    userInfo: {},
  });

  const theme = {
    ...DefaultTheme,
    dark: true,
    lightTheme: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      accent: 'black',
      background: '#fff',
    },
    darkTheme: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      accent: 'black',
      background: '#2b2a2a',
      text: '#fff',
      onBackground: '#fff',
    },
  };

  const isUserAuthenticated = () => {
    return new Promise(async resolve => {
      const keepMeLoggedin = JSON.parse(
        await AsyncStorage.getItem('keepLoggedIn'),
      );

      const userInfo = await getUserInfo();
      console.log('keepMeLoggedin', userInfo, keepMeLoggedin);
      if (userInfo && userInfo.token !== null) {
        if (!keepMeLoggedin) {
          return resolve({
            isauthenticate: false,
            userInfo: {},
          });
        } else {
          return resolve({
            isAuthenticated: true,
            userInfo,
          });
        }
      } else {
        return resolve({
          isAuthenticated: false,
          userInfo: {},
        });
      }
    });
  };

  const fetchUser = async () => {
    try {
      const {isAuthenticated, userInfo} = await isUserAuthenticated();
      if (!isAuthenticated) {
        await AsyncStorage.clear();
      } else {
        setState({
          ...state,
          isauthenticate: true,
          userInfo,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
    SplashScreen.hide();
  }, []);

  const {userInfo} = state;

  return (
    <UserInfoProvider value={userInfo}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <RootStack {...state} />
        </Provider>
      </ThemeProvider>
    </UserInfoProvider>
  );
}

export default App;
