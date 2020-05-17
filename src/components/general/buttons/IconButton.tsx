import React from 'react';
import { ViewStyle, StyleProp } from 'react-native';
import ButtonContainer, { ButtonEffectType } from './ButtonContainer';
import { Icon, IconProps } from 'react-native-elements';

export interface IconButtonProps extends IconProps {
  /** The button effect to use. Defaults to Opacity */
  effectType: ButtonEffectType;

  /** The event handler for the button */
  onPress: () => void;

  /**
   * Additional styles for the container of the image
   */
  buttonContainerStyle?: StyleProp<ViewStyle>;
}

/**
 * An Icon based button
 */
const IconButton: React.FC<IconButtonProps> = ({
  effectType = ButtonEffectType.Opacity,
  onPress,
  buttonContainerStyle,
  size,
  type,
  color,
  name,
  ...rest
}) => {
  return (
    <ButtonContainer
      effectType={effectType}
      onPress={onPress}
      style={buttonContainerStyle}
    >
      <Icon type={type} size={size} name={name} color={color} {...rest} />
    </ButtonContainer>
  );
};

export default IconButton;
