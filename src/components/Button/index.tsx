/**
 * @flow
 */
import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ActivityIndicator, StyleProp, ViewStyle, TextProps, TextStyle, GestureResponderEvent } from 'react-native';

import styles from './styles';

interface IProps {
  /**
   * button title (optional)
   */
  title: string,
  /**
   * add additional styling for title component (optional)
   */
  titleStyle?: StyleProp<ViewStyle>,
  /**
   * add additional props for Text component (optional)
   */
  titleProps?: TextProps,
  /**
   * add additional styling for button component (optional)
   */
  buttonStyle: StyleProp<ViewStyle>,
  /**
   * prop to display a loading spinner (optional)
   */
  loading: boolean,
  /**
   * add additional styling for loading component (optional)
   */
  loadingStyle?: StyleProp<ViewStyle>,
  /**
   * add additional props for ActivityIndicator component (optional)
   */
  loadingProps: { style?: StyleProp<ViewStyle>, color: string, size: 'small' | 'large' | number },
  /**
   * onPress method (optional)
   */
  onPress: (event: GestureResponderEvent) => void,
  /**
   * styling for Component container
   */
  containerStyle?: StyleProp<ViewStyle>,
  /**
   * displays a centered icon (when no title) or to the left (with text). (can be used along with iconRight as well)
   */
  icon?: Object,
  /**
   * styling for Icon Component container
   */
  iconContainerStyle?: StyleProp<ViewStyle>,
  /**
   * displays Icon to the right of title. Needs to be used along with icon prop
   */
  iconRight: boolean,
  /**
   * disables user interaction
   */
  disabled: boolean,
  /**
   * style of the button when disabled
   */
  disabledStyle?: StyleProp<ViewStyle>,
  /**
   * style of the title when disabled
   */
  disabledTitleStyle?: StyleProp<TextStyle>,
};

class Button extends Component<IProps> {
  static defaultProps = {
    title: '',
    iconRight: false,
    onPress: () => {},
    clear: false,
    loadingProps: {
      color: 'white',
      size: 'small',
    },
    buttonStyle: {
      borderRadius: 5,
    },
    loading: false,
    disabled: false,
  };

  render() {
    const {
      containerStyle,
      onPress,
      buttonStyle,
      loading,
      loadingStyle,
      loadingProps,
      title,
      titleStyle,
      titleProps,
      icon,
      iconContainerStyle,
      iconRight,
      disabled,
      disabledStyle,
      disabledTitleStyle,
      ...attributes
    } = this.props;

    return (
      <TouchableHighlight
        {...attributes}
        onPress={onPress}
        style={[
          styles.container,
          containerStyle,
          disabled && styles.disabled,
          disabled && disabledStyle,
        ]}
        disabled={disabled}
      >
        <View style={[styles.button, buttonStyle]}>
          {loading && (
            <ActivityIndicator
              animating
              style={loadingStyle}
              color={loadingProps.color}
              size={loadingProps.size}
              {...loadingProps}
            />
          )}
          {!loading &&
            icon &&
            !iconRight && <View style={[styles.iconContainer, iconContainerStyle]}>{icon}</View>}
          {!loading && (
            <Text
              style={[
                styles.title,
                titleStyle,
                disabled && styles.disabledTitle,
                disabled && disabledTitleStyle,
              ]}
              {...titleProps}
            >
              {title}
            </Text>
          )}
          {!loading &&
            icon &&
            iconRight && <View style={[styles.iconContainer, iconContainerStyle]}>{icon}</View>}
        </View>
      </TouchableHighlight>
    );
  }
}

export default Button;
