import {Dimensions} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;

export function setUserInfo(data) {
  try {
    return Promise.all(
      AsyncStorage.multiSet([
        ['access_token', data.token || ''],
        ['userId', data.user._id || ''],
        ['email', data.user.email || ''],
        ['firstName', data.user.name || ''],
        ['lastName', data.user.lastname || ''],
      ]),
    );
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export function getUserInfo() {
  return Promise.all([
    AsyncStorage.getItem('access_token'),
    AsyncStorage.getItem('userId'),
    AsyncStorage.getItem('email'),
    AsyncStorage.getItem('firstName'),
    AsyncStorage.getItem('lastName'),
    AsyncStorage.getItem('keep_me_logged_in'),
  ]).then(info => ({
    token: info[0],
    userid: info[1],
    email: info[2],
    firstName: info[3],
    lastName: info[4],
    keep_me_logged_in: info[5],
  }));
}
