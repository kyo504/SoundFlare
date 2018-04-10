import React from 'react';
import { View, Text, Button } from 'react-native';

export default class LandingScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>LandingScreen</Text>
        <Button title='Sign In' onPress={() => this.props.navigation.navigate('Signin')}/>
        <Button title='Sign Up' onPress={() => this.props.navigation.navigate('Signup')}/>
      </View>
    );
  }
}
