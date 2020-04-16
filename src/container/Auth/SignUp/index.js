import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import environments from '../../../environments';

function SignUp({navigation}) {
  console.log(environments.BASE_URL);

  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate('Login')}>
        Registration Screen
      </Text>
    </View>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
