import React from 'react';
import {View, Text} from 'react-native';

function App({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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

export default App;
