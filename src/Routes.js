import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import {DrawerContent} from '../src/container/common';
import {HeaderView} from '../src/component';
import {Apps, Setting, SignIn, SignUp} from './container';
import {withUserInfo} from './framework';

const AuthStack = createStackNavigator();
function Auth() {
  return (
    <AuthStack.Navigator initialRouteName="SignIn">
      <AuthStack.Screen
        name="Login"
        component={SignIn}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="Registration"
        component={SignUp}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
}

const MainStack = createStackNavigator();
function DashBoard() {
  return (
    <MainStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: HeaderView,
      }}>
      <MainStack.Screen name="Home" component={Apps} />
    </MainStack.Navigator>
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

const RootStack = ({isauthenticate, userInfo, ...rest}) => {
  console.log('isAuthenticated', isauthenticate);

  return (
    <NavigationContainer>
      {isauthenticate ? <MyDrawer /> : <Auth />}
    </NavigationContainer>
  );
};

const mapStateToProps = store => ({
  authenticatedata: store.userAuthencation,
});
export default compose(
  connect(mapStateToProps),
  withUserInfo,
)(RootStack);
