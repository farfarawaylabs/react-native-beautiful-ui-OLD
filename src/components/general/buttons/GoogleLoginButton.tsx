import React from 'react';
import { StyleSheet, StyleProp, ImageStyle } from 'react-native';
import ImageButton from './ImageButton';
import { ButtonEffectType } from './ButtonContainer';

export interface GoogleLoginButtonProps {
  /**
   * Additional styles or styles to override default style
   */
  style?: StyleProp<ImageStyle>;

  /** The event handler for when the button is pressed */
  onPress: () => void;
}

/**
 * description
 */
const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({
  style,
  onPress,
}) => {
  const img = require('../../../resources/images/btn_google_signin_dark_normal_web.png');
  return (
    <ImageButton
      onPress={onPress}
      effectType={ButtonEffectType.Opacity}
      image={img}
      imageStyle={[styles.image]}
      containerStyle={[styles.container, style]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: 196,
    height: 46,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {},
});

export default GoogleLoginButton;
