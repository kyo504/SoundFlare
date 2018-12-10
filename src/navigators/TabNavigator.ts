import { createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import BookmarkScreen from '../screens/BookmarkScreen';
import NotificationScreen from '../screens/NotificationScreen';
import UserScreen from '../screens/UserScreen';

export default createBottomTabNavigator({
  Home: HomeScreen,
  Bookmark: BookmarkScreen,
  Notification: NotificationScreen,
  User: UserScreen,
}, {
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
});
