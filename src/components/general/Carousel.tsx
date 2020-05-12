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
  ...rest
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollRef = useRef(null);

  const moveToSelectedIndex = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;

    const newIndex = Math.floor(contentOffset.x / viewSize.width);
    setSelectedIndex(newIndex);
  };

  return (
    <View style={[{ width: width, height: height }, style]} {...rest}>
      <ScrollView
        horizontal
        pagingEnabled
        onMomentumScrollEnd={moveToSelectedIndex}
        ref={scrollRef}
      >
        {React.Children.map(children, (currChild: any) => {
          return React.cloneElement(currChild, {
            style: { width: width, height: height },
          });
        })}
      </ScrollView>

      <View style={styles.circleDiv}>
        {React.Children.map(children, (_: any, index: number) => {
          const dotStyles: Array<any> = [styles.dot];
          if (index === selectedIndex) {
            dotStyles.push(styles.selectedDot);
          }
          return <View style={dotStyles} key={`slide_c${index}`} />;
        })}
      </View>
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
    backgroundColor: '#fff',
  },
  selectedDot: {
    backgroundColor: '#232323',
    height: 8,
    width: 8,
  },
});

export default Carousel;
