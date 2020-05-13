import React from 'react';
import { StyleSheet, ViewStyle, StyleProp } from 'react-native';
import Carousel from '../../components/general/Carousel/Carousel';
import IntroScreenSlide from './IntroScreenSlide';
import IntroScreenTitle from './IntroScreenTitle';
import IntroScreenSubtitle from './IntroScreenSubtitle';
import {
  IntroScreenImageSection,
  IntroScreenTitleSection,
  IntroScreenAdditionalContentSection,
} from './IntroScreenSections';
import CarouselNavigation from 'src/components/general/Carousel/CarouselNavigation';

interface IntroScreenProps {
  /** Should the screen display navigational dots on the bottom. Defautls to true */
  showDots?: boolean;

  /** The color of a dot represnting a slide. Defaults to '#FFF */
  dotColor?: string;

  /** The color of the active dot. Defaults to '#232323' */
  activeDotColor?: string;

  /**
   * Additional styles or styles to override default style
   */
  style?: StyleProp<ViewStyle>;
}

/**
 * description
 */
const Screen: React.FC<IntroScreenProps> = ({
  style,
  children,
  dotColor = '#FFF',
  activeDotColor = '#232323',
  ...rest
}) => {
  return (
    <Carousel.Container>
      <Carousel.Slides>{children}</Carousel.Slides>
      <Carousel.Navigation
        dotColor={dotColor}
        activeDotColor={activeDotColor}
      />
    </Carousel.Container>
  );
};

const styles = StyleSheet.create({});

const IntroScreen = {
  Screen: Screen,
  Slide: IntroScreenSlide,
  Title: IntroScreenTitle,
  Subtitle: IntroScreenSubtitle,
  ImageSection: IntroScreenImageSection,
  TitleSection: IntroScreenTitleSection,
  AdditionalContentSection: IntroScreenAdditionalContentSection,
};
export default IntroScreen;
