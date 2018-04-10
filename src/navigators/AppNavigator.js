import { SwitchNavigator, StackNavigator } from 'react-navigation';

import LoadingScreen from '../screens/LoadingScreen';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';

export default SwitchNavigator(
  {
    Loading: LoadingScreen,
    Main: MainNavigator,
    Auth: AuthNavigator,
  },
  {
    initialRouteName: 'Loading',
  },
);
