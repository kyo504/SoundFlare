import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.primary,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: colors.primary,
  },
  textInput: {
    fontSize: 20,
    color: colors.primary,
    height: 40,
    paddingVertical: 0,
  },
});
