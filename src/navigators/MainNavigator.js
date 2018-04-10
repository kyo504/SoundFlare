import { StackNavigator } from 'react-navigation';

import TabNavigator from './TabNavigator';
import SearchScreen from '../screens/SearchScreen';
import DetailScreen from '../screens/DetailScreen';

export default StackNavigator({
  Tabs: TabNavigator,
  Search: SearchScreen,
  Detail: DetailScreen,
});
