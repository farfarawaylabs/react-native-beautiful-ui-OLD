import React from 'react';
import {
  Image,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
  ImageStyle,
  TextStyle,
} from 'react-native';
import IntroScreen from './IntroScreen';

export interface IntroScreenRegularSlideProps {
  /** The slide image */
  image: ImageSourcePropType;

  /** The slide title */
  title?: string;

  /** The slide subtitle */
  subtitle?: string;

  /** The background color of the slide */
  backgroundColor?: string;

  /**
   * Additional styles or styles to override default style
   */
  style?: StyleProp<ViewStyle>;

  /** Additional styles or override default image styles */
  imageStyle?: StyleProp<ImageStyle>;

  /** Additional styles or override default title styles */
  titleStyle?: StyleProp<TextStyle>;

  /** Additional styles or override default suntitle styles */
  subtitleStyle?: StyleProp<TextStyle>;
}

/**
 * description
 */
const IntroScreenRegularSlide: React.FC<IntroScreenRegularSlideProps> = ({
  style,
  imageStyle,
  titleStyle,
  subtitleStyle,
  image,
  title = '',
  subtitle = '',
  backgroundColor,
  children,
}) => {
  return (
    <IntroScreen.Slide style={style}>
      <IntroScreen.ImageSection
        backgroundColor={backgroundColor}
        style={styles.imageContainer}
      >
        <Image source={image} style={[styles.image, imageStyle]} />
      </IntroScreen.ImageSection>
      <IntroScreen.TitleSection backgroundColor={backgroundColor}>
        <IntroScreen.Title title={title} style={titleStyle} />
        <IntroScreen.Subtitle subtitle={subtitle} style={subtitleStyle} />
      </IntroScreen.TitleSection>
      <IntroScreen.AdditionalContentSection backgroundColor={backgroundColor}>
        {children}
      </IntroScreen.AdditionalContentSection>
    </IntroScreen.Slide>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    paddingTop: 40,
  },

  image: {
    width: '80%',
    height: '100%',
  },
});

export default IntroScreenRegularSlide;
