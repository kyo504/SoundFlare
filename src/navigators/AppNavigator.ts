import { createSwitchNavigator } from 'react-navigation';

import LoadingScreen from '../screens/LoadingScreen';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';

export default createSwitchNavigator(
  {
    Loading: LoadingScreen,
    Main: MainNavigator,
    Auth: AuthNavigator,
  },
  {
    initialRouteName: 'Auth',
  },
);
