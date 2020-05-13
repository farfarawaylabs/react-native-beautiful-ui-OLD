import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

export interface SpinnerProps {
  /** Show or hide the spinner. Defaults to true */
  isVisible?: boolean;

  /** The color of the spinner */
  color: string;

  /** The size of the spinner. Defaults to 'small' */
  size?: 'small' | 'large';
}

/**
 * Simple spinner control
 */
const SpinnerControl: React.FC<SpinnerProps> = ({
  isVisible = true,
  color,
  size = 'small',
}) => {
  const getSpinnerElement = () => {
    return (
      <ActivityIndicator animating={isVisible} color={color} size={size} />
    );
  };
  return <View style={styles.container}>{getSpinnerElement()}</View>;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
});

export default SpinnerControl;
