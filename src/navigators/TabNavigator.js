import { TabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import BookmarkScreen from '../screens/BookmarkScreen';
import NotificationScreen from '../screens/NotificationScreen';
import UserScreen from '../screens/UserScreen';

export default TabNavigator({
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
