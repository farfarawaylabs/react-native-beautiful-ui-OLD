import React from 'react';
import { Text, StyleSheet, StyleProp, TextStyle } from 'react-native';

export interface IntroScreenSubitleProps {
  /** Subhe title text */
  subtitle: string;

  /**
   * Additional styles or styles to override default style
   */
  style?: StyleProp<TextStyle>;
}

/**
 * description
 */
const IntroScreenSubtitle: React.FC<IntroScreenSubitleProps> = ({
  subtitle,
  style,
  ...rest
}) => {
  return (
    <Text style={[styles.title, style]} {...rest}>
      {subtitle}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: '#161616',
  },
});

export default IntroScreenSubtitle;
