import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {configureStore, getUserInfo} from '../src/shared/store';
import RootStack from '../src/Routes';
import AsyncStorage from '@react-native-community/async-storage';
import {UserInfoProvider, ThemeProvider} from './framework';

export const store = configureStore(axios, {});

function App() {
  const [state, setState] = useState({
    isauthenticate: false,
    userInfo: {},
  });

  const theme = [
    {
      key: 'LIGHT_THEME',
      backgroundColor: '#ffffff',
      color: '#000000',
      fontSize: 14,
      fontColor: '#000000',
    },
    {
      key: 'DARK_THEME',
      backgroundColor: '#2b2a2a',
      color: '#ffffff',
      fontSize: 14,
      fontColor: '#ffffff',
    },
  ];
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
  }, []);

  useEffect(() => {
    SplashScreen.hide();
  });

  const {userInfo} = state;

  return (
    <UserInfoProvider value={userInfo}>
      <ThemeProvider>
        <Provider store={store}>
          <RootStack {...state} />
        </Provider>
      </ThemeProvider>
    </UserInfoProvider>
  );
}

export default App;
