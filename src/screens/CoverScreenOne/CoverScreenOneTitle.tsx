import React from 'react';
import { Text, StyleSheet, ViewStyle } from 'react-native';

export interface CoverScreenOneTitleProps {
  /** The main text of the cover screen */
  title: string;

  /** Should the title be displayed in all caps. Defaults to true */
  allCaps?: boolean;

  /**
   * Additional styles or styles to override default style
   */
  style?: ViewStyle;
}

/**
 * The title component to be displayed inside a CoverScreenOne component
 */
const CoverScreenOneTitle: React.FC<CoverScreenOneTitleProps> = ({
  style,
  title,
  allCaps = true,
  ...rest
}) => {
  return (
    <Text style={[styles.title, style]} {...rest}>
      {allCaps ? title.toLocaleUpperCase() : title}
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

export default CoverScreenOneTitle;
