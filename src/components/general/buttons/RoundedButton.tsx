import React from 'react';
import {
  TouchableWithoutFeedback,
  StyleSheet,
  ViewStyle,
  Text,
  View,
  TextStyle,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

export enum ButtonEffectType {
  Native = 'native',
  Opacity = 'opacity',
  Highlite = 'highlite',
  None = 'none',
}

interface RoundedButtonProps {
  /** The button title */
  title: string;

  /** The event to run when the button is pressed */
  onPress: () => void;

  effectType?: ButtonEffectType;

  /** The width of the button if you want a fixed width button */
  width?: number | string;

  /** The height of the button. Defaults to 70 */
  height?: number | string;

  /** The button background color. Defaults to white */
  backgroundColor?: string;

  /** The button text color. defaults to black */
  textColor?: string;

  /** Additional styles or override default styles of the button */
  style?: ViewStyle;

  /** Additional styles or override the default button text styles */
  textStyle?: TextStyle;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({
  title,
  onPress,
  effectType = ButtonEffectType.Native,
  width,
  height = 70,
  backgroundColor = '#FFF',
  textColor = '#000',
  textStyle,
  style,
}) => {
  const buttonStyle = {
    width: width,
    height: height,
    backgroundColor: backgroundColor,
  };
  return (
    <ButtonContainer effectType={effectType} onPress={onPress}>
      <View style={[styles.buttonContainer, buttonStyle, style]}>
        <Text style={[styles.buttonTitle, { color: textColor }, textStyle]}>
          {title}
        </Text>
      </View>
    </ButtonContainer>
  );
};

interface ButtonContainerProps {
  effectType: ButtonEffectType;
  onPress: () => void;
}
const ButtonContainer: React.FC<ButtonContainerProps> = ({
  children,
  effectType,
  onPress,
}) => {
  switch (effectType) {
    case ButtonEffectType.None:
      return (
        <TouchableWithoutFeedback onPress={onPress}>
          {children}
        </TouchableWithoutFeedback>
      );

    case ButtonEffectType.Highlite:
      return (
        <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>
      );

    case ButtonEffectType.Opacity:
      return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;

    case ButtonEffectType.Native:
      return (
        <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>
      );

    case ButtonEffectType.Native:
      console.log(effectType);
      if (Platform.OS === 'android') {
        return (
          <TouchableNativeFeedback onPress={onPress}>
            {children}
          </TouchableNativeFeedback>
        );
      }

      return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
  }
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },

  buttonTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default RoundedButton;
