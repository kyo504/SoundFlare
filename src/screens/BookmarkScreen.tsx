import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class BookmarkScreen extends React.Component<NavigationScreenProps> {
  static navigationOptions = {
    headerTitle: 'Bookmark',
    tabBarIcon: ({ tintColor, focused }: { tintColor: string; focused: boolean; horizontal: boolean }): JSX.Element => (
      <Icon name={focused ? 'bookmark' : 'bookmark-outline'} size={26} style={{ color: tintColor }} />
    ),
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>BookmarkScreen</Text>
        <Text
          onPress={() => {
            this.props.navigation.pop();
          }}
        >
          Go back
        </Text>
      </View>
    );
  }
}
