import React from 'react';
import { StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { Row, Col, Alignment } from '@farfarawaylabs/react-native-layout';

export interface IntroScreenSectionProps {
  /** Additional styles or a way to override default styles */
  style?: StyleProp<ViewStyle>;

  /** The background color of the section */
  backgroundColor?: string;
}

export const IntroScreenImageSection: React.FC<IntroScreenSectionProps> = ({
  backgroundColor,
  style,
  children,
}) => {
  return (
    <Row
      verticalAlign={Alignment.Center}
      horizontalAlign={Alignment.Center}
      style={[
        styles.imageContainer,
        { backgroundColor: backgroundColor },
        style,
      ]}
    >
      {children}
    </Row>
  );
};

export const IntroScreenTitleSection: React.FC<IntroScreenSectionProps> = ({
  style,
  backgroundColor,
  children,
}) => {
  return (
    <Row
      style={[
        styles.titleContainer,
        { backgroundColor: backgroundColor },
        style,
      ]}
    >
      <Col horizontalAlign={Alignment.Center}>{children}</Col>
    </Row>
  );
};

export const IntroScreenAdditionalContentSection: React.FC<IntroScreenSectionProps> = ({
  backgroundColor,
  style,
  children,
}) => {
  return (
    <Row>
      <Col
        style={[
          { backgroundColor: backgroundColor },
          styles.additionalContainer,
          style,
        ]}
      >
        {children}
      </Col>
    </Row>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    paddingHorizontal: 12,
  },

  titleContainer: {
    paddingHorizontal: 12,
  },

  additionalContainer: {
    height: '100%',
    width: '100%',
  },
});
