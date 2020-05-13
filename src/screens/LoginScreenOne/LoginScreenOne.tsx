import React from 'react';
import { StyleSheet, ViewStyle, ImageSourcePropType } from 'react-native';
import { Col, Alignment } from '@farfarawaylabs/react-native-layout';
import BackgroundImageView from '../../components/general/BackgroundImageView';
import LoginScreenOneTitle from './LoginScreenOneTitle';
import LoginScreenOneDescription from './LoginScreenOneDescription';

const LoginScreenOneLogoContainer: React.FC = ({ children, ...rest }) => {
  return (
    <Col
      verticalAlign={Alignment.Center}
      horizontalAlign={Alignment.Center}
      {...rest}
    >
      {children}
    </Col>
  );
};

const LoginScreenOneTitleContainer: React.FC = ({ children, ...rest }) => {
  return (
    <Col
      verticalAlign={Alignment.Center}
      horizontalAlign={Alignment.Center}
      {...rest}
    >
      {children}
    </Col>
  );
};

const LoginScreenOneButtonsContainer: React.FC = ({ children, ...rest }) => {
  return (
    <Col
      verticalAlign={Alignment.End}
      horizontalAlign={Alignment.Center}
      {...rest}
    >
      {React.Children.map(children, (currChild: any) => {
        return React.cloneElement(currChild, {
          style: { marginBottom: 20, width: 290 },
        });
      })}
    </Col>
  );
};

export interface LoginScreenOneProps {
  /** The image to use as the background of the cover screen */
  backgroundImage: ImageSourcePropType;
  /**
   * Additional styles or styles to override default style
   */
  style?: ViewStyle;
}

/**
 * description
 */
const LoginScreen: React.FC<LoginScreenOneProps> = ({
  backgroundImage,
  style,
  children,
  ...rest
}) => {
  return (
    <BackgroundImageView
      style={[styles.container, style ? style : {}]}
      {...rest}
      image={backgroundImage}
    >
      {children}
    </BackgroundImageView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingBottom: 46,
  },
});

const LoginScreenOne = {
  Screen: LoginScreen,
  TitleContainer: LoginScreenOneTitleContainer,
  Title: LoginScreenOneTitle,
  Description: LoginScreenOneDescription,
  ButtonsContainer: LoginScreenOneButtonsContainer,
  LogoContainer: LoginScreenOneLogoContainer,
};

export default LoginScreenOne;
