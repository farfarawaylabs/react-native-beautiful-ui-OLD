import React from 'react';
import { StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { Button, Icon } from 'react-native-elements';

interface FacebookLoginButtonProps {
  /** The button title. Defaults to "Login with Facebook" */
  title?: string;

  /**
   * Additional styles or styles to override default style
   */
  style?: StyleProp<ViewStyle>;

  /** The event handler for when the button is pressed */
  onPress: () => void;
}

/**
 * description
 */
const FacebookLoginButton: React.FC<FacebookLoginButtonProps> = ({
  title = 'Login with Facebook',
  style,
  onPress,
  ...rest
}) => {
  return (
    <Button
      icon={
        <Icon
          type="font-awesome"
          name="facebook-square"
          size={20}
          color="white"
        />
      }
      buttonStyle={[styles.button, style]}
      titleStyle={styles.title}
      title={title}
      onPress={onPress}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4460A0',
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 191,
    height: 46,
  },
  title: {
    marginLeft: 10,
    fontSize: 15,
  },
});

export default FacebookLoginButton;
