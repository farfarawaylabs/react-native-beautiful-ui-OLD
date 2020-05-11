import React from 'react';
import {
  StyleSheet,
  ViewStyle,
  ImageSourcePropType,
  StyleProp,
  TextStyle,
  Text,
  TouchableOpacity,
} from 'react-native';
import BackgroundImageView from '../../components/general/BackgroundImageView';
import { Col, Alignment, Center } from '@farfarawaylabs/react-native-layout';
import { Button } from 'react-native-elements';

interface CoverScreenTwoProps {
  /** The image to use as the background of the cover screen */
  image: ImageSourcePropType;

  /** The title of the cover screen */
  title: string;

  /** The subtitle of the cover screen */
  subtitle?: string;

  /** The title of the action button of the screen */
  buttonTitle: string;

  /** The event handler to run when the button is pressed */
  onPress: () => void;

  /** Should the title be displayed in all caps. Defaults to true */
  allCaps?: boolean;

  /** Additional styles for the title or override default styles */
  titleStyle?: StyleProp<TextStyle>;

  /** Additional styles for the subtitle or override default styles */
  subtitleStyle?: StyleProp<TextStyle>;

  /**
   * Additional styles or styles to override default style
   */
  style?: ViewStyle;
}

/**
 * This compoenent represent a fully design cover screen.
 */
const CoverScreenTwo: React.FC<CoverScreenTwoProps> = ({
  image,
  title,
  buttonTitle,
  onPress,
  allCaps = true,
  subtitle,
  titleStyle,
  subtitleStyle,
  style,
}) => {
  return (
    <BackgroundImageView
      style={[styles.container, style ? style : {}]}
      image={image}
    >
      <Center vertical horizontal>
        <Text style={[styles.title, titleStyle]}>
          {allCaps ? title.toLocaleUpperCase() : title}
        </Text>
        <Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>
      </Center>
      <Button
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
        title={buttonTitle}
        onPress={onPress}
      />
    </BackgroundImageView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 23,
  },
  title: {
    color: '#fff',
    fontSize: 32,
    marginBottom: 16,
  },
  subtitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '200',
  },
  button: {
    marginBottom: 46,
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  buttonTitle: {
    fontWeight: '300',
  },
});

export default CoverScreenTwo;
