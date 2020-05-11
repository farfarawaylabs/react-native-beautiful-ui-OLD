import React from 'react';
import { StyleSheet, ViewStyle, StyleProp, TextStyle } from 'react-native';
import { Button } from 'react-native-elements';

interface CoverScreenOneButtonProps {
  /** The title of the button */
  title: string;

  /**
   * Additional styles or styles to override default style
   */
  style?: ViewStyle;

  /**
   * Title styling
   */
  titleStyle?: StyleProp<TextStyle>;
}

/**
 * The action button to be displayed inside a CoverScreenOne component
 */
const CoverScreenOneButton: React.FC<CoverScreenOneButtonProps> = ({
  style,
  title,
  titleStyle,
  ...rest
}) => {
  return (
    <Button
      buttonStyle={[styles.button, style]}
      titleStyle={[styles.title, titleStyle]}
      {...rest}
      title={title}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 41,
    paddingVertical: 17,
    backgroundColor: '#FFF',
    marginTop: 40,
  },
  title: {
    color: '#000',
  },
});

export default CoverScreenOneButton;
