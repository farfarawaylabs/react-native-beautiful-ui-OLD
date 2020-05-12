import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  Dimensions,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;

interface CarouselProps {
  /** The width of the carousel. This will also set the width for each of the child views */
  width?: number | string;

  /** The height of the carousel. This will also set the width for each of the child views */
  height?: number | string;

  /** The index of the slide to show in the Carousel (zero based). Defaults to 0 */
  selectedSlide?: number;

  /** Should the carousel display navigational dots on the bottom. Defautls to true */
  showDots?: boolean;

  /** The color of a dot represnting a slide. Defaults to '#FFF */
  dotColor?: string;

  /** The color of the active dot. Defaults to '#232323' */
  activeDotColor?: string;

  /**
   * Additional styles or styles to override default style
   */
  style?: ViewStyle;
}

/**
 * A Carousel component
 */
const Carousel: React.FC<CarouselProps> = ({
  style,
  children,
  width = WINDOW_WIDTH,
  height = '100%',
  selectedSlide = 0,
  dotColor = '#FFF',
  activeDotColor = '#232323',
  showDots = true,
  ...rest
}) => {
  const [selectedIndex, setSelectedIndex] = useState(selectedSlide);

  const moveToSelectedIndex = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;

    const newIndex = Math.floor(contentOffset.x / viewSize.width);
    setSelectedIndex(newIndex);
  };

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
      <ScrollView
        horizontal
        pagingEnabled
        onMomentumScrollEnd={moveToSelectedIndex}
      >
        {React.Children.map(children, (currChild: any) => {
          return React.cloneElement(currChild, {
            style: [
              { width: carouselPageWidth, height: height },
              currChild.props.style,
            ],
          });
        })}
      </ScrollView>

      {showDots && (
        <View style={styles.circleDiv}>
          {React.Children.map(children, (_: any, index: number) => {
            const dotStyles: Array<any> = [styles.dot];
            if (index === selectedIndex) {
              dotStyles.push(styles.selectedDot);
              dotStyles.push({ backgroundColor: activeDotColor });
            } else {
              dotStyles.push({ backgroundColor: dotColor });
            }
            return <View style={dotStyles} key={`slide_c${index}`} />;
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH,
    height: '100%',
  },
  circleDiv: {
    position: 'absolute',
    bottom: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 10,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 5,
  },
  selectedDot: {
    height: 8,
    width: 8,
  },
});

export default Carousel;
