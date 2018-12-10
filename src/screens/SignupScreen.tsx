import React from 'react';
import { View, Button, AsyncStorage, StyleSheet, TextInput } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

export default class SignupScreen extends React.Component<NavigationScreenProps> {
  static navigationOptions = {
    title: 'Please sign up',
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder='Enter your email' />
        <TextInput placeholder='Enter your password' />
        <Button title="Sign up!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Main');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
