import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

/** Calculate font size based on device screen height or width for landscape mode */
export function calculateFontSize(percantageOfScreen: number) {
  if (height > width) {
    return Math.round((percantageOfScreen * height) / 100);
  } else {
    return Math.round((percantageOfScreen * width) / 100);
  }
}
