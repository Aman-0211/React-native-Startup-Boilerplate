import React, {useState, useEffect, useReducer} from 'react';
import {
  View,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  NativeModules,
  Animated,
  Platform,
} from 'react-native';

import {
  TextInput,
  HelperText,
  Button,
  Avatar,
  TouchableRipple,
  Text,
} from 'react-native-paper';
import {DEVICE_WIDTH} from '../../../shared/store';
import {signUp} from './action';
import {
  GET_SIGNUP_REQUEST,
  GET_SIGNUP_REQUEST_SUCCESS,
  GET_SIGNUP_REQUEST_FAIL,
} from './constant';
import {initialState, reducer} from './reducer';

export const AVTAR_HEIGHT = DEVICE_WIDTH / 4;
export const AVTAR_HEIGHT_SMALL =
  DEVICE_WIDTH /
  Platform.select({
    ios: 5,
    android: 7,
  });

const imageHeight = new Animated.Value(AVTAR_HEIGHT);

function SignUp(props) {
  const [value, setValue] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    error: false,
  });

  const [state, dispatch] = useReducer(reducer, initialState);

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
      dispatch({
        type: GET_SIGNUP_REQUEST,
      });
      const registraction = await signUp(value);

      dispatch({
        type: GET_SIGNUP_REQUEST_SUCCESS,
        payload: registraction.data,
      });
      props.navigation.navigate('Login');
    } catch (error) {
      dispatch({
        type: GET_SIGNUP_REQUEST_FAIL,
      });
      setValue({...value, error: true});
      console.log(error);
    }
  };

  const _hasEmailErrors = () => {
    return !value.email.includes('@' && '.');
  };
  const _hasnameErrors = () => {
    return value.fname.length < 3;
  };

  const _hasePasswordErrors = () => {
    return value.password.length < 8;
  };

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
            label="First Name"
            placeholder="First name"
            mode="outlined"
            underlineColor="#CCC"
            value={value.fname}
            style={{marginVertical: 4}}
            onChangeText={text => setValue(value => ({...value, fname: text}))}
          />
          <HelperText type="error" visible={_hasnameErrors()}>
            Name should contain @t least 3 character
          </HelperText>
          <TextInput
            label="Last Name"
            placeholder="Last Name"
            mode="outlined"
            underlineColor="#CCC"
            value={value.lname}
            style={{marginVertical: 4}}
            onChangeText={text => setValue(value => ({...value, lname: text}))}
          />
          <TextInput
            label="Email"
            placeholder="eg : admin@example.com"
            mode="outlined"
            underlineColor="#CCC"
            value={value.email}
            style={{marginVertical: 4}}
            onChangeText={text => setValue(value => ({...value, email: text}))}
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
            secureTextEntry={false}
            style={{marginVertical: 4}}
          />
          <HelperText type="error" visible={_hasePasswordErrors()}>
            Password must contain atleast 8 character!
          </HelperText>
          <Button
            icon={!state.isLoading ? 'login' : 'loading'}
            mode="contained"
            disabled={state.isLoading}
            onPress={() => {
              onSubmit();
              Keyboard.dismiss();
            }}
            style={styles.loginButton}>
            Submit
          </Button>
          <TouchableRipple
            onPress={() => props.navigation.navigate('Login')}
            style={{marginVertical: 20, alignItems: 'center'}}
            rippleColor="#000">
            <Text>Login here !</Text>
          </TouchableRipple>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default SignUp;

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
  inputForm: {flex: 4},
});
