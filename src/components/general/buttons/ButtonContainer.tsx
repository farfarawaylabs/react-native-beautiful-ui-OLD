import React from 'react';
import {
  TouchableHighlight,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  StyleProp,
  ViewStyle,
} from 'react-native';

export enum ButtonEffectType {
  Native = 'native',
  Opacity = 'opacity',
  Highlite = 'highlite',
  None = 'none',
}

export interface ButtonContainerProps {
  effectType: ButtonEffectType;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({
  children,
  effectType,
  onPress,
  ...rest
}) => {
  switch (effectType) {
    case ButtonEffectType.None:
      return (
        <TouchableWithoutFeedback onPress={onPress} {...rest}>
          {children}
        </TouchableWithoutFeedback>
      );

    case ButtonEffectType.Highlite:
      return (
        <TouchableHighlight onPress={onPress} {...rest}>
          {children}
        </TouchableHighlight>
      );

    case ButtonEffectType.Opacity:
      return (
        <TouchableOpacity onPress={onPress} {...rest}>
          {children}
        </TouchableOpacity>
      );

    case ButtonEffectType.Native:
      return (
        <TouchableHighlight onPress={onPress} {...rest}>
          {children}
        </TouchableHighlight>
      );

    case ButtonEffectType.Native:
      if (Platform.OS === 'android') {
        return (
          <TouchableNativeFeedback onPress={onPress} {...rest}>
            {children}
          </TouchableNativeFeedback>
        );
      }

      return (
        <TouchableOpacity onPress={onPress} {...rest}>
          {children}
        </TouchableOpacity>
      );
  }
};

export default ButtonContainer;
