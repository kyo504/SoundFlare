import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationScreenProps } from "react-navigation";

export default class NotificationScreen extends React.Component<
  NavigationScreenProps
> {
  static navigationOptions = {
    headerTitle: "Notification",
    tabBarIcon: ({
      tintColor,
      focused
    }: {
      tintColor: string;
      focused: boolean;
      horizontal: boolean;
    }): JSX.Element => (
      <Icon
        name={focused ? "bell" : "bell-outline"}
        size={26}
        style={{ color: tintColor }}
      />
    )
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>NotificationScreen</Text>
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
