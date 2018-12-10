import React from 'react';
import { View, Text, Button, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationScreenProps } from 'react-navigation';

export default class HomeScreen extends React.Component<NavigationScreenProps> {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon name={focused ? 'home' : 'home-outline'} size={26} style={{ color: tintColor }} />
      ),
      headerRight: (
        <TouchableHighlight underlayColor='transparent' onPress={() => navigation.navigate('Search')}>
          <Icon name="magnify" size={26} />
        </TouchableHighlight>
      ),
    };
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>HomeScreen</Text>
        <Text
          onPress={() => {
            this.props.navigation.navigate('Detail');
          }}
        >
          Go to DetailScreen
        </Text>
      </View>
    );
  }
}
