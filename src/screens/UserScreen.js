import React from 'react';
import { View, Text, AsyncStorage, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class UserScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'You',
    tabBarIcon: ({ tintColor, focused }) => (
      <Icon name={focused ? 'account' : 'account-outline'} size={26} style={{ color: tintColor }} />
    ),
  };

  componentWillMount() {
    this.willFocusSubscription = this.props.navigation.addListener('willFocus', payload => {
      console.log(payload);
    });
    this.willBlurSubscription = this.props.navigation.addListener('willBlur', payload => {
      console.log(payload);
    });
  }

  componentWillUnount() {
    this.willFocusSubscription.remvoe();
    this.willBlurSubscription.remove();
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>UserScreen</Text>
        <Button
          title="Sign Out"
          onPress={() => {
            AsyncStorage.clear();
            this.props.navigation.navigate('Auth');
          }}
        />
      </View>
    );
  }
}
