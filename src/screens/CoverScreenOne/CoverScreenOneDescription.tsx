import React from 'react';
import { Text, StyleSheet, ViewStyle } from 'react-native';

export interface CoverScreenOneDescriptionProps {
  /** The description text of the cover screen */
  description: string;

  /**
   * Additional styles or styles to override default style
   */
  style?: ViewStyle;
}

/**
 * The description text component to be displayed inside a CoverScreenOne component
 */
const CoverScreenOneDescription: React.FC<CoverScreenOneDescriptionProps> = ({
  style,
  description,
  ...rest
}) => {
  return (
    <Text style={[styles.description, style]} {...rest}>
      {description}
    </Text>
  );
};

const styles = StyleSheet.create({
  description: {
    fontSize: 24,
    color: '#FFF',
    marginVertical: 20,
    fontWeight: '200',
  },
});

export default CoverScreenOneDescription;
