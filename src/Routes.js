import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import {DrawerContent} from '../src/container/common';
import {HeaderView} from '../src/component';

import {Apps, Setting} from './container';

const Stack = createStackNavigator();

function DashBoard() {
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

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <DrawerContent {...props} />}>
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
