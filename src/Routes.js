import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HeaderView} from '../src/component';

import {Apps, Setting} from './container';

const Stack = createStackNavigator();

function DashBoard(props) {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: HeaderView,
      }}>
      <Stack.Screen name="Home" component={Apps} />
    </Stack.Navigator>
  );
}

function SettingSrack() {
  return (
    <Stack.Navigator
      initialRouteName="Setting"
      screenOptions={{
        header: HeaderView,
      }}>
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer(props) {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerStyle={{
        backgroundColor: '#c6cbef',
        width: 240,
      }}>
      <Drawer.Screen name="Home" component={DashBoard} />
      <Drawer.Screen name="Setting" component={SettingSrack} />
    </Drawer.Navigator>
  );
}

const RootStack = () => (
  <NavigationContainer>
    <MyDrawer />
  </NavigationContainer>
);

export default RootStack;
