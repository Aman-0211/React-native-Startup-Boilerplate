import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
        name="Login"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Registration"
        component={SignUp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
