import React from 'react';
import {
  ImageBackground,
  View,
  StyleSheet,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';

interface BackgroundImageViewProps {
  /** The image to display in the background of the view */
  image: ImageSourcePropType;

  /**Additional styles or styles to override default style */
  style?: ViewStyle;
}

/**
 * An image to be displayed on the background of containing view
 */
const BackgroundImageView: React.FC<BackgroundImageViewProps> = ({
  style,
  image,
  children,
  ...rest
}) => {
  return (
    <ImageBackground source={image} style={[styles.image, style]} {...rest}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default BackgroundImageView;
