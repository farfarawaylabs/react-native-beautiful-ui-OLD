import React from 'react';
import { Text, StyleSheet, ViewStyle } from 'react-native';

export interface LoginScreenOneTitleProps {
  /** The main text of the cover screen */
  title: string;

  /**
   * Additional styles or styles to override default style
   */
  style?: ViewStyle;
}

/**
 * The title component to be displayed inside a LoginScreenOne component
 */
const LoginScreenOneTitle: React.FC<LoginScreenOneTitleProps> = ({
  style,
  title,
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
    fontSize: 48,
    color: '#FFF',
    fontWeight: '400',
  },
});

export default LoginScreenOneTitle;
