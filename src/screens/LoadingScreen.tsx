import React from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

export default class LoadingScreen extends React.Component<NavigationScreenProps> {
  static navigationOptions = {
    header: null,
  }

  componentDidMount() {
    setTimeout(() => {
      this._bootstrapAsync();
    }, 500);

  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      this.props.navigation.navigate(userToken ? 'Main' : 'Auth');
  
    } catch(e) {
      this.props.navigation.navigate('Auth');
    }
  }

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff"/>
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
