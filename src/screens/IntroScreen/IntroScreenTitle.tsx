import React from 'react';
import { Text, StyleSheet, TextStyle, StyleProp } from 'react-native';

interface IntroScreenTitleProps {
  /** The title text */
  title: string;

  /**
   * Additional styles or styles to override default style
   */
  style?: StyleProp<TextStyle>;
}

/**
 * description
 */
const IntroScreenTitle: React.FC<IntroScreenTitleProps> = ({
  title,
  style,
  ...rest
}) => {
  return (
    <Text style={[styles.title, style]} {...rest}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    marginBottom: 40,
    textAlign: 'center',
  },
});

export default IntroScreenTitle;
