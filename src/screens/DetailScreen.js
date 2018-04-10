import React from 'react';
import { View, Text } from 'react-native';

export default class DetailScreen extends React.Component {
  static navigationOptions = {
    headerTitle: '상세정보',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>DetailScreen</Text>
        <Text
          onPress={() => {
            this.props.navigation.navigate('Detail');
          }}
        >
          Go to another DetailScreen
        </Text>
        <Text
          onPress={() => {
            this.props.navigation.pop();
          }}
        >
          Go back
        </Text>
        <Text
          onPress={() => {
            this.props.navigation.popToTop();
          }}
        >
          Go back to tab navigator
        </Text>
      </View>
    );
  }
}
