import React from 'react';
import {
  Image,
  ViewStyle,
  ImageSourcePropType,
  StyleProp,
  ImageStyle,
} from 'react-native';
import ButtonContainer, { ButtonEffectType } from './ButtonContainer';

export interface ImageButtonProps {
  /** The image to display on the button */
  image: ImageSourcePropType;

  /** The button effect to use */
  effectType: ButtonEffectType;

  /** The event handler for the button */
  onPress: () => void;

  /**
   * Additional styles for the container of the image
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * Additional styles for the image
   */
  imageStyle?: StyleProp<ImageStyle>;
}

/**
 * An Image based button
 */
const ImageButton: React.FC<ImageButtonProps> = ({
  image,
  effectType,
  onPress,
  containerStyle,
  imageStyle,
  ...rest
}) => {
  return (
    <ButtonContainer
      effectType={effectType}
      onPress={onPress}
      style={containerStyle}
      {...rest}
    >
      <Image source={image} style={imageStyle} />
    </ButtonContainer>
  );
};

export default ImageButton;
