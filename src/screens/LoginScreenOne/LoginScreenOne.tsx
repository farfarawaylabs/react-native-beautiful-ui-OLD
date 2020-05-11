import React from 'react';
import { StyleSheet, ViewStyle, ImageSourcePropType } from 'react-native';
import { Col, Row, Alignment } from '@farfarawaylabs/react-native-layout';
import BackgroundImageView from '../../components/general/BackgroundImageView';

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
export {
  LoginScreenOneTitleContainer,
  LoginScreenOneButtonsContainer,
  LoginScreenOneLogoContainer,
};

interface LoginScreenOneProps {
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
const LoginScreenOne: React.FC<LoginScreenOneProps> = ({
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

export default LoginScreenOne;
