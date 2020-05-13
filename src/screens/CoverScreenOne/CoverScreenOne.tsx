import React from 'react';
import { StyleSheet, ViewStyle, ImageSourcePropType } from 'react-native';
import BackgroundImageView from '../../components/general/BackgroundImageView';
import { Col, Alignment } from '@farfarawaylabs/react-native-layout';

export interface CoverScreenOneProps {
  /** The image to use as the background of the cover screen */
  image: ImageSourcePropType;

  /**
   * Additional styles or styles to override default style
   */
  style?: ViewStyle;
}

/**
 * This compoenent represent a fully design cover screen.
 */
const CoverScreenOne: React.FC<CoverScreenOneProps> = ({
  style,
  image,
  children,
  ...rest
}) => {
  return (
    <BackgroundImageView
      style={[styles.container, style ? style : {}]}
      {...rest}
      image={image}
    >
      <Col verticalAlign={Alignment.End}>{children}</Col>
    </BackgroundImageView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingBottom: 46,
  },
});

export default CoverScreenOne;
