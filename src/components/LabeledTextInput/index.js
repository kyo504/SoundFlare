/**
 * @flow
 */
import React, { PureComponent } from 'react';
import { Text, View, TextInput, ViewPropTypes } from 'react-native';

import styles from './style';

type Props = {
  checkValidity: Function,
  value?: string,
  label: string,
  errorLabel?: string,
  style?: StyleObj,
  onChangeText?: Function,
  onBlur?: Function,
  onFocus?: Function,
  color?: string,
};

type State = {
  statusColor: string,
  isValid: boolean | null,
  isFocused: boolean,
};

class LabeledTextInput extends PureComponent<Props, State> {
  textInputRef: TextInput;

  static defaultProps = {
    checkValidity: () => true,
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      isValid: null,
      statusColor: ColorSet.textDefault.color,
      isFocused: false,
    };
  }

  /**
   * focus 일 경우에 label 색상을 변경한다.
   */
  onFocusInput() {
    const { onFocus } = this.props;
    this.setState({
      statusColor: ColorSet.textActive.color,
      isFocused: true,
    });
    if (onFocus) {
      onFocus();
    }
  }

  /**
   * blur 일 경우에 label 색상을 변경한다
   */
  onBlurInput() {
    const { onBlur, checkValidity, value } = this.props;
    const isValid = checkValidity(value);
    this.setState({
      statusColor: isValid ? ColorSet.textDefault.color : ColorSet.textDanger.color,
      isFocused: false,
      isValid,
    });
    if (onBlur) {
      onBlur();
    }
  }

  /**
   * 입력된 값과 valid 값을 parent 에게 넘겨 준다.
   * @param {*} text
   */
  onChangeText(text: string) {
    const { onChangeText, checkValidity } = this.props;
    const isValid = checkValidity(text);
    this.setState({ isValid });
    if (onChangeText) {
      onChangeText(text, isValid);
    }
  }

  /**
   * TextInput 의 함수를 구현
   */
  blur() {
    this.textInputRef.blur();
  }
  /**
   * TextInput 의 함수를 구현
   */
  focus() {
    this.textInputRef.focus();
  }

  getLabel() {
    const { label, errorLabel } = this.props;
    const { isValid, isFocused } = this.state;

    if (isFocused) {
      return label;
    }

    if (typeof isValid !== 'boolean') {
      return label;
    }

    return isValid ? label : errorLabel;
  }

  render() {
    const {
      style,
      label,
      errorLabel,
      onChangeText,
      onFocus,
      onBlur,
      color,
      ...textInputProps
    } = this.props;
    const { statusColor } = this.state;

    return (
      <View
        style={[
          styles.container,
          style,
          { borderBottomColor: color || statusColor },
        ]}
      >
        <Text style={[styles.label, { color: color || statusColor }]}>
          {this.getLabel()}
        </Text>
        <TextInput
          ref={c => {
            this.textInputRef = c;
          }}
          style={[styles.textInput]}
          onFocus={() => this.onFocusInput()}
          onBlur={() => this.onBlurInput()}
          underlineColorAndroid="transparent"
          onChangeText={text => this.onChangeText(text)}
          {...textInputProps}
        />
      </View>
    );
  }
}

export default LabeledTextInput;
