import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  NativeModules,
  Animated,
  Platform,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {
  TextInput,
  HelperText,
  Button,
  Text,
  Avatar,
  TouchableRipple,
} from 'react-native-paper';
import {CheckBox} from 'react-native-elements';

import {compose} from 'redux';
import {connect} from 'react-redux';
import {
  DEVICE_WIDTH,
  signIn,
  setUserInfo,
  getUserInfo,
} from '../../../shared/store';
import {
  GET_USER_AUTHENTICATION_REQUEST,
  GET_USER_AUTHENTICATION,
  GET_USER_AUTHENTICATION_FAIL,
} from '../../../shared/store/constants';

export const AVTAR_HEIGHT = DEVICE_WIDTH / 4;
export const AVTAR_HEIGHT_SMALL =
  DEVICE_WIDTH /
  Platform.select({
    ios: 5,
    android: 7,
  });

const imageHeight = new Animated.Value(AVTAR_HEIGHT);

function SignIn(props) {
  const [value, setValue] = useState({
    username: '',
    password: '',
    checked: false,
    error: false,
  });

  useEffect(() => {
    const keyboardWillShowSub = Keyboard.addListener(
      Platform.select({
        ios: 'keyboardWillShow',
        android: 'keyboardDidShow',
      }),
      onKeyboardWillShow,
    );
    const keyboardWillHideSub = Keyboard.addListener(
      Platform.select({
        ios: 'keyboardWillHide',
        android: 'keyboardDidHide',
      }),
      onKeyboardWillHide,
    );

    return () => {
      keyboardWillShowSub.remove();
      keyboardWillHideSub.remove();
    };
  }, []);

  const KeepedmeLogin = async () => {
    const value = await getUserInfo();
    if (value.keep_me_logged_in === 'true') {
      props.dispatch({
        type: GET_USER_AUTHENTICATION,
        payload: value,
      });
    }
  };

  useEffect(() => {
    KeepedmeLogin();
  }, []);

  function onKeyboardWillShow(event) {
    Animated.timing(imageHeight, {
      duration: Platform.OS === 'ios' ? event.duration : 0,
      toValue: AVTAR_HEIGHT_SMALL,
    }).start();
  }

  function onKeyboardWillHide(event) {
    Animated.timing(imageHeight, {
      duration: Platform.OS === 'ios' ? event.duration : 0,
      toValue: AVTAR_HEIGHT,
    }).start();
  }

  const onSubmit = async () => {
    try {
      props.dispatch({
        type: GET_USER_AUTHENTICATION_REQUEST,
      });
      const userInfo = await signIn(value);
      await setUserInfo(userInfo.data, value.checked);
      const user = await getUserInfo();
      console.log('use3r', user);

      props.dispatch({
        type: GET_USER_AUTHENTICATION,
        payload: userInfo.data,
      });
    } catch (error) {
      props.dispatch({
        type: GET_USER_AUTHENTICATION_FAIL,
      });
      errorMessage();
      setValue({...value, error: true});
      console.log(error);
    }

    signIn(value);
  };

  const _hasEmailErrors = () => {
    return !value.username.includes('@' && '.');
  };

  const _hasePasswordErrors = () => {
    return value.password.length < 8;
  };

  const errorMessage = () => Alert.alert('Invalid email or password');

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={-(16 * 5.5)}
      behavior={Platform.select({ios: 'padding', android: 'height'})}
      style={styles.container}>
      <View style={styles.loginContainer}>
        <View style={styles.avatar}>
          <Avatar.Icon size={100} icon="account" />
        </View>
        <View style={styles.inputForm}>
          <TextInput
            label="Email"
            placeholder="email"
            mode="outlined"
            underlineColor="#CCC"
            value={value.username}
            style={{marginVertical: 20}}
            onChangeText={text =>
              setValue(value => ({...value, username: text}))
            }
          />
          <HelperText type="error" visible={_hasEmailErrors()}>
            Email address is invalid!
          </HelperText>
          <TextInput
            label="Password"
            placeholder="Password"
            value={value.password}
            mode="outlined"
            onChangeText={text =>
              setValue(value => ({...value, password: text}))
            }
            secureTextEntry
            style={{marginVertical: 20}}
          />
          <HelperText type="error" visible={_hasePasswordErrors()}>
            Password must contain atleast 8 character!
          </HelperText>

          <CheckBox
            title="Keeped me login  "
            checked={value.checked}
            containerStyle={{
              borderWidth: 0,
              backgroundColor: '#fff',
              marginLeft: 0,
            }}
            checkedColor="#5D3EFF"
            textStyle={{fontWeight: '400', color: '#000'}}
            onPress={() =>
              setValue(value => ({...value, checked: !value.checked}))
            }
          />
          <Button
            icon={!props.authenticatedata.isLoading ? 'login' : 'loading'}
            mode="contained"
            disabled={props.authenticatedata.isLoading}
            onPress={() => {
              onSubmit();
              Keyboard.dismiss();
            }}
            style={styles.loginButton}>
            Login
          </Button>
          <TouchableRipple
            onPress={() => props.navigation.navigate('Registration')}
            style={{marginVertical: 20, alignItems: 'center'}}
            rippleColor="#000">
            <Text>Registration</Text>
          </TouchableRipple>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const mapStateToProps = store => ({
  authenticatedata: store.userAuthencation,
});

export default compose(connect(mapStateToProps))(SignIn);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  loginContainer: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignContent: 'center',
  },
  loginButton: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {alignItems: 'center', flex: 1, marginTop: '18%'},
  inputForm: {flex: 2},
});
