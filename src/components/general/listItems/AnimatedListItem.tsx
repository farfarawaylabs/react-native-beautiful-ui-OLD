import React, { useEffect, useRef } from 'react';
import { StyleSheet, Animated, StyleProp, ViewStyle } from 'react-native';

const ANIMATION_DURATION = 250;

const useListItemAnimation = (
  height: number,
  onRemoveAnimationEnded: () => void
) => {
  const _animated = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(_animated, {
      toValue: 1,
      duration: ANIMATION_DURATION,
      useNativeDriver: false,
    }).start();
    return () => {};
  }, [_animated]);

  const onRemove = () => {
    Animated.timing(_animated, {
      toValue: 0,
      duration: ANIMATION_DURATION,
      useNativeDriver: false,
    }).start(() => {
      if (onRemoveAnimationEnded) {
        onRemoveAnimationEnded();
      }
    });
  };

  const rowStyles = [
    { height: height },
    {
      height: _animated.interpolate({
        inputRange: [0, 1],
        outputRange: [0, height],
        extrapolate: 'clamp',
      }),
    },
    { opacity: _animated },
    {
      transform: [{ scale: _animated }],
    },
  ];

  return { rowStyles, onRemove };
};

export interface AnimatedListItemProps {
  /** Event handler to call after the remove animation ends.
  You will mostly use this to remove the current item from the state and the flatList */
  onRemoveAnimationEnded?: () => void;

  /** Set to true when you want this item to be removed and run the remove animation */
  isRemoved?: boolean;

  /** The style to apply to the list item container view */
  style?: StyleProp<ViewStyle>;
}
const AnimatedListItem: React.FC<AnimatedListItemProps> = ({
  isRemoved = false,
  onRemoveAnimationEnded,
  style,
  children,
  ...rest
}) => {
  const { rowStyles, onRemove } = useListItemAnimation(70, () => {
    if (onRemoveAnimationEnded) {
      onRemoveAnimationEnded();
    }
  });

  useEffect(() => {
    if (isRemoved) {
      onRemove();
    }
  }, [isRemoved, onRemove]);

  return (
    <Animated.View style={[rowStyles, style]} {...rest}>
      {children}
    </Animated.View>
  );
};

export default AnimatedListItem;
