import React, { useRef, useEffect } from 'react';
import { StyleSheet, Animated } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { usePrevious } from '@farfarawaylabs/react-native-hooks';

const AnimatedBlur = Animated.createAnimatedComponent(BlurView);

type blurType =
  | 'xlight'
  | 'light'
  | 'dark'
  // iOS 13+ only
  | 'chromeMaterial'
  | 'material'
  | 'thickMaterial'
  | 'thinMaterial'
  | 'ultraThinMaterial'
  | 'chromeMaterialDark'
  | 'materialDark'
  | 'thickMaterialDark'
  | 'thinMaterialDark'
  | 'ultraThinMaterialDark'
  | 'chromeMaterialLight'
  | 'materialLight'
  | 'thickMaterialLight'
  | 'thinMaterialLight'
  | 'ultraThinMaterialLight'
  // tvOS and iOS 10+ only
  | 'regular'
  | 'prominent'
  // tvOS only
  | 'extraDark';

export interface OverlayProps {
  /** Controls if the overlay is visible or not */
  visible: boolean;

  /** The duration of the appear animation in miliseconds. Default to 500  */
  appearAnimationDuration?: number;

  /** The duration of the disappear animation in miliseconds. Default to 500  */
  disappearAnimationDuration?: number;

  /** The blur amount to use for the overlay. Default to 10 */
  blurAmount?: number;

  /** The blur types to use. See blurType type for possible values. dDefault to 'light' */
  blurType?: blurType;
}

const Overlay: React.FC<OverlayProps> = ({
  children,
  visible = false,
  appearAnimationDuration = 500,
  disappearAnimationDuration = 500,
  blurAmount = 10,
  blurType = 'light',
}) => {
  const previousVisible = usePrevious(visible);
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!previousVisible && visible) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: appearAnimationDuration,
        useNativeDriver: true,
      }).start();
    }

    if (previousVisible && !visible) {
      Animated.timing(opacity, {
        toValue: 0,
        duration: disappearAnimationDuration,
        useNativeDriver: true,
      }).start();
    }
  }, [
    opacity,
    visible,
    previousVisible,
    appearAnimationDuration,
    disappearAnimationDuration,
  ]);

  return (
    <AnimatedBlur
      style={[StyleSheet.absoluteFill, { opacity: opacity }]}
      blurType={blurType}
      blurAmount={blurAmount}
      reducedTransparencyFallbackColor="white"
    >
      {children}
    </AnimatedBlur>
  );
};

export default Overlay;
