import React, { ReactElement } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  ViewProps,
  ImageSourcePropType,
  TextStyle,
  StyleProp,
} from 'react-native';
import { Button } from 'react-native-elements';
import { Col, Row, Alignment } from '@farfarawaylabs/react-native-layout';
import Screen from '../../components/general/Screen';
import RoundedButton from '../../components/general/buttons/RoundedButton';

export interface AskPermissionsScreenProps extends ViewProps {
  /** The image to display on top of the screen */
  image: ImageSourcePropType;

  /** The title of the screen */
  title: string;

  /** The longer description of the screen */
  description: string;

  /** Additional styles or override default styles of the title of the screen */
  titleStyle?: StyleProp<TextStyle>;

  /** Additional styles or override default styles of the description of the screen */
  descriptionStyle?: StyleProp<TextStyle>;

  /** The title of the approve permission button. Defaults to "Let's do it" */
  approveButtonTitle?: string;

  /** The title of the reject permission button. Defaults to "Maybe next time" */
  rejectButtonTitle?: string;

  /** A way to provide your own custom approve button */
  approveButton?: ReactElement;

  /** A way to provide your own custom reject button */
  rejectButton?: ReactElement;

  /** The background color of the screen */
  backgroundColor?: string;

  /** Event handler to call if the user presses the approve button */
  onApprove: () => {};

  /** Event handler to call if the user presses the reject button */
  onReject: () => {};
}

/**
 * description
 */
const AskPermissionsScreen: React.FC<AskPermissionsScreenProps> = ({
  image,
  title,
  description,
  backgroundColor,
  style,
  titleStyle,
  descriptionStyle,
  approveButton,
  approveButtonTitle = "Let's do it",
  rejectButton,
  rejectButtonTitle = 'Maybe next time',
  onApprove,
  onReject,
  ...rest
}) => {
  const getApproveButton = () => {
    if (approveButton) return approveButton;

    return (
      <RoundedButton
        title={approveButtonTitle}
        backgroundColor="#4187d3"
        textColor="#FFF"
        width={300}
        onPress={onApprove}
      />
    );
  };

  const getRejectButton = () => {
    if (rejectButton) return rejectButton;

    return (
      <Button
        title={rejectButtonTitle}
        type="clear"
        buttonStyle={[styles.rejectButton]}
        onPress={onReject}
      />
    );
  };

  return (
    <Screen>
      <Col {...rest} style={[{ backgroundColor: backgroundColor }, style]}>
        <Row
          verticalAlign={Alignment.Center}
          horizontalAlign={Alignment.Center}
          style={styles.imageContainer}
        >
          <Image source={image} style={styles.image} />
        </Row>
        <Row width="100%">
          <Col horizontalAlign={Alignment.Center}>
            <Text style={[styles.title, titleStyle]}>{title}</Text>
            <Text style={[styles.description, descriptionStyle]}>
              {description}
            </Text>
          </Col>
        </Row>

        <Row>
          <Col
            horizontalAlign={Alignment.Center}
            verticalAlign={Alignment.End}
            height="100%"
            style={styles.buttonsContainer}
          >
            {getApproveButton()}
            {getRejectButton()}
          </Col>
        </Row>
      </Col>
    </Screen>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    paddingHorizontal: 12,
  },

  image: {
    flex: 1,
    height: '90%',
    resizeMode: 'contain',
  },

  title: {
    marginVertical: 30,
    fontSize: 36,
  },

  description: {
    paddingHorizontal: 12,
    fontSize: 22,
  },
  buttonsContainer: {
    paddingBottom: 50,
  },
  approveButton: {},
  rejectButton: {},
});

export default AskPermissionsScreen;
