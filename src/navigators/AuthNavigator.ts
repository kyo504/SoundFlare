import { createStackNavigator } from 'react-navigation';

import LandingScreen from '../screens/LandingScreen';
import SignupScreen from '../screens/SignupScreen';
import SigninScreen from '../screens/SigninScreen';

export default createStackNavigator({
  Landing: LandingScreen,
  Signin: SigninScreen,
  Signup: SignupScreen,
});
