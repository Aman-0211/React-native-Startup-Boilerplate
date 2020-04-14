import React from 'react';
import {View, Text} from 'react-native';
import {withTheme} from 'react-native-paper';

function App({navigation, theme, ...rest}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: !theme.dark
          ? theme.lightTheme.background
          : theme.lightTheme.background,
      }}>
      <Text
        style={{textAlign: 'center'}}
        onPress={() => {
          navigation.navigate('Setting');
        }}>
        App.js
      </Text>
    </View>
  );
}

export default withTheme(App);
