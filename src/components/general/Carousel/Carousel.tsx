import React, { useState } from 'react';
import { View, Dimensions, StyleProp, ViewStyle } from 'react-native';
import CarouselBody from './CarouselBody';
import CarouselNavigation from './CarouselNavigation';
import CarouselContext from './CarouselContext';
const WINDOW_WIDTH = Dimensions.get('window').width;

export interface CarouselProps {
  /** The width of the carousel. This will also set the width for each of the child views */
  width?: number | string;

  /** The height of the carousel. This will also set the width for each of the child views */
  height?: number | string;

  /** The index of the slide to show in the Carousel (zero based). Defaults to 0 */
  selectedSlide?: number;

  /**
   * Additional styles or styles to override default style
   */
  style?: StyleProp<ViewStyle>;
}

/**
 * A Carousel component
 */
const CarouselComponent: React.FC<CarouselProps> = ({
  style,
  children,
  width = WINDOW_WIDTH,
  height = '100%',
  selectedSlide = 0,
  ...rest
}) => {
  const [selectedIndex, setSelectedIndex] = useState(selectedSlide);
  const [numberOfSlides, setNumberOfSlides] = useState(0);

  let carouselPageWidth: number;
  if (typeof width === 'string') {
    let widthPct = parseInt(width.replace('%', ''), 10);

    carouselPageWidth = (widthPct / 100) * WINDOW_WIDTH;
  } else {
    carouselPageWidth = width;
  }

  return (
    <View
      style={[{ width: carouselPageWidth, height: height }, style]}
      {...rest}
    >
      <CarouselContext.Provider
        value={{
          selectedIndex,
          numberOfSlides,
          setNumberOfSlides,
          setSelectedIndex,
          width: carouselPageWidth,
          height,
        }}
      >
        {children}
      </CarouselContext.Provider>
    </View>
  );
};

const Carousel = {
  Container: CarouselComponent,
  Slides: CarouselBody,
  Navigation: CarouselNavigation,
};

export default Carousel;
