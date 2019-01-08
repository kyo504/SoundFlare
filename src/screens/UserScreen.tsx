import React, { ReactNode } from 'react';
import { View, Text, AsyncStorage, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationScreenProps, NavigationEventSubscription } from 'react-navigation';

export default class UserScreen extends React.Component<NavigationScreenProps> {
  private willFocusSubscription: NavigationEventSubscription;
  private willBlurSubscription: NavigationEventSubscription;

  static navigationOptions = {
    headerTitle: 'You',
    tabBarIcon: ({ tintColor, focused }: { tintColor: string; focused: boolean; horizontal: boolean }): JSX.Element => (
      <Icon name={focused ? 'account' : 'account-outline'} size={26} style={{ color: tintColor }} />
    ),
  };

  constructor(props: NavigationScreenProps) {
    super(props);

    this.willFocusSubscription = this.props.navigation.addListener('willFocus', payload => {
      console.log(payload);
    });
    this.willBlurSubscription = this.props.navigation.addListener('willBlur', payload => {
      console.log(payload);
    });
  }

  componentWillUnount(): void {
    this.willFocusSubscription.remove();
    this.willBlurSubscription.remove();
  }

  render(): ReactNode {
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
