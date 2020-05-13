import React, { useState, memo } from 'react';
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
      <CarouselBody
        height={height}
        width={carouselPageWidth}
        onSelectedIndexChanged={(newIndex) => setSelectedIndex(newIndex)}
      >
        {children}
      </CarouselBody>

      {showDots && (
        <NavigationalDots
          numberOfDots={React.Children.count(children)}
          selectedIndex={selectedIndex}
          dotColor={dotColor}
          activeDotColor={activeDotColor}
        />
      )}
    </View>
  );
};

const CarouselBody: React.FC<{
  onSelectedIndexChanged: (newIndex: number) => void;
  width: number | string;
  height: number | string;
}> = memo(({ onSelectedIndexChanged, width, height, children }) => {
  const moveToSelectedIndex = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;

    const newIndex = Math.floor(contentOffset.x / viewSize.width);

    onSelectedIndexChanged(newIndex);
  };

  return (
    <ScrollView
      horizontal
      pagingEnabled
      onMomentumScrollEnd={moveToSelectedIndex}
    >
      {React.Children.map(children, (currChild: any) => {
        return React.cloneElement(currChild, {
          style: [{ width: width, height: height }, currChild.props.style],
        });
      })}
    </ScrollView>
  );
});

const NavigationalDots: React.FC<{
  numberOfDots: number;
  selectedIndex: number;
  dotColor: string;
  activeDotColor: string;
}> = ({ numberOfDots, selectedIndex, dotColor, activeDotColor }) => {
  const dots = [];
  for (let index = 0; index < numberOfDots; index++) {
    const dotStyles: Array<any> = [styles.dot];
    if (index === selectedIndex) {
      dotStyles.push(styles.selectedDot);
      dotStyles.push({ backgroundColor: activeDotColor });
    } else {
      dotStyles.push({ backgroundColor: dotColor });
    }

    dots.push(<View style={dotStyles} key={`slide_c${index}`} />);
  }
  return <View style={styles.circleDiv}>{dots}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH,
    height: '100%',
  },
  circleDiv: {
    position: 'absolute',
    bottom: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 10,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    margin: 5,
  },
  selectedDot: {
    height: 14,
    width: 14,
    borderRadius: 7,
  },
});

export default Carousel;
