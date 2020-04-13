import React from 'react';
import {View, Text} from 'react-native';

function Setting({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{textAlign: 'center'}}
        onPress={() => navigation.navigate('Home')}>
        Setting Screen.js
      </Text>
    </View>
  );
}

export default Setting;
