/**
 * @flow
 */
import { StyleSheet } from 'react-native';

import colors from '../../config/colors';

export default StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  disabled: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
  disabledTitle: {
    color: colors.white,
    fontSize: 18,
    textAlign: 'center',
    padding: 8,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    textAlign: 'center',
    padding: 8,
  },
  iconContainer: {
    marginHorizontal: 5,
  },
});
