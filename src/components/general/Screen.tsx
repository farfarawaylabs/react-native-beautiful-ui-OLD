import React, { useEffect } from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  ViewProps,
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export interface ScreenInterface extends ViewProps {
  /* The name of the screen. Can be used after that to report to analytics **/
  name?: string;

  /** Should the screen use safe area. Defautls to true */
  shouldUseSafeArea?: boolean;

  /** Image to use as background image for the all screen. Image will strech all the way to the top even if you set shoulduseSafeArea to true */
  backgroundImage?: ImageSourcePropType;

  /** The background color of the sceeen */
  backgroundColor?: string;

  /** If you are using React Navigation, this prop will be passed automatically to the screen by React Navigation */
  navigation?: any;

  /** Event handler to be called when screen gets into focus. Can be used to report a screen view event to analytics services.
   *  Works just if you are using React Navigation library */
  onFocus?: (screenName: string | undefined) => void;

  /** Any additional style you want to use to add to or override the default style */
  style?: StyleProp<ViewStyle>;
}

/**
 * Simple control that encapsulate common beahvior for all screens such as analytics reporting
 */
const Screen: React.FC<ScreenInterface> = ({
  shouldUseSafeArea = true,
  backgroundImage,
  backgroundColor,
  children,
  style,
  navigation,
  name,
  onFocus,
  ...rest
}) => {
  useEffect(() => {
    if (navigation) {
      return navigation.addListener('focus', () => {
        if (onFocus) {
          onFocus(name);
        }
      });
    }
  }, [navigation, name, onFocus]);

  const insets = useSafeAreaInsets();

  const paddingTop =
    shouldUseSafeArea && !backgroundImage
      ? { paddingTop: insets.top }
      : { paddingTop: 0 };

  const backgroundImagePaddingTop = shouldUseSafeArea
    ? { paddingTop: insets.top }
    : { paddingTop: 0 };

  return (
    <View
      style={[
        paddingTop,
        styles.container,
        { backgroundColor: backgroundColor },
        style,
      ]}
      {...rest}
    >
      {backgroundImage ? (
        <ImageBackground
          style={[styles.backgroundImage, backgroundImagePaddingTop]}
          source={backgroundImage}
        >
          {children}
        </ImageBackground>
      ) : (
        children
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default Screen;
