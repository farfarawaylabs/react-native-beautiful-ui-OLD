import React from 'react';
import { StyleSheet, ViewStyle, Text, View, TextStyle } from 'react-native';
import ButtonContainer, { ButtonEffectType } from './ButtonContainer';

export interface RoundedButtonProps {
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
