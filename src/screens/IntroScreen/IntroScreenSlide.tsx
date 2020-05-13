import React from 'react';
import { StyleSheet, ViewStyle, StyleProp, SafeAreaView } from 'react-native';
import { Col } from '@farfarawaylabs/react-native-layout';

export interface IntroScreenSlideProps {
  /** Determine if the slide should be displayed inside a SafeAreaView. If true, remember to set the slide
   * background color as well. Defaults to false.
   */
  shouldUseSafeAreaView?: boolean;

  /** The background color of the slide */
  backgroundColor?: string;

  /**
   * Additional styles or styles to override default style
   */
  style?: StyleProp<ViewStyle>;
}

/**
 * description
 */
const IntroScreenSlide: React.FC<IntroScreenSlideProps> = ({
  shouldUseSafeAreaView = false,
  backgroundColor,
  style,
  children,
  ...rest
}) => {
  if (shouldUseSafeAreaView) {
    return (
      <SafeAreaView style={{ backgroundColor: backgroundColor }}>
        <Col style={[style]} {...rest}>
          {children}
        </Col>
      </SafeAreaView>
    );
  } else {
    return (
      <Col style={[{ backgroundColor: backgroundColor }, style]} {...rest}>
        {children}
      </Col>
    );
  }
};

const styles = StyleSheet.create({});

export default IntroScreenSlide;
