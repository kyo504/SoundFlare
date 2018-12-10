import { createStackNavigator } from 'react-navigation';

import TabNavigator from './TabNavigator';
import SearchScreen from '../screens/SearchScreen';
import DetailScreen from '../screens/DetailScreen';

export default createStackNavigator({
  Tabs: TabNavigator,
  Search: SearchScreen,
  Detail: DetailScreen,
});
