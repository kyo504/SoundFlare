import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor, focused }: { tintColor: string; focused: boolean; horizontal: boolean }): JSX.Element => (
      <Ionicons
        name={focused ? 'ios-settings' : 'ios-settings-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>SearchScreen</Text>
      </View>
    );
  }
}
