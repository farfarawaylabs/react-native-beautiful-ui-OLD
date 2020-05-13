import React, { createContext } from 'react';

export interface CarouselContextProps {
  selectedIndex?: number;
  numberOfSlides?: number;
  setNumberOfSlides?: (numberOfSlides: number) => void;
  setSelectedIndex?: (selectedIndex: number) => void;
  width?: number;
  height?: number | string;
}
const CarouselContext = createContext<CarouselContextProps>({});

export default CarouselContext;
