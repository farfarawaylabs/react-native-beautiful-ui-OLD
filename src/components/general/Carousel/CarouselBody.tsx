import React, { memo, useContext, useEffect } from 'react';
import {
  NativeSyntheticEvent,
  NativeScrollEvent,
  ScrollView,
} from 'react-native';
import CarouselContext from './CarouselContext';

export interface CarouselBodyProps {
  /** event handler to be called when the selected slide changes */
  onSelectedSlideChanged?: (newIndex: number) => void;
}

const CarouselBody: React.FC<CarouselBodyProps> = memo(
  ({ onSelectedSlideChanged, children }) => {
    const { setNumberOfSlides, setSelectedIndex, width, height } = useContext(
      CarouselContext
    );

    useEffect(() => {
      setNumberOfSlides!(React.Children.count(children));
    }, [children, setNumberOfSlides]);

    const moveToSelectedIndex = (
      event: NativeSyntheticEvent<NativeScrollEvent>
    ) => {
      const contentOffset = event.nativeEvent.contentOffset;
      const viewSize = event.nativeEvent.layoutMeasurement;

      const newIndex = Math.floor(contentOffset.x / viewSize.width);

      if (onSelectedSlideChanged) {
        onSelectedSlideChanged(newIndex);
      }
      setSelectedIndex!(newIndex);
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
  }
);

export default CarouselBody;
