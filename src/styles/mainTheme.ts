import { StyleSheet, Platform } from 'react-native';
import { calculateFontSize } from './calculateFontSize';

const MainTheme = StyleSheet.create({
  screenTitle: {
    fontSize: calculateFontSize(5),
    fontWeight: Platform.OS === 'android' ? 'bold' : '800',
  },

  title: {
    fontSize: calculateFontSize(4),
    fontWeight: Platform.OS === 'android' ? 'bold' : '600',
    marginVertical: 4,
  },

  subTitle: {
    fontSize: calculateFontSize(3),
    fontWeight: '500',
    marginVertical: 4,
  },

  paragraph: {
    fontSize: calculateFontSize(2),
  },

  screenHeader: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },

  defaultScreenHorizontalMargin: {
    marginHorizontal: 15,
  },
});

export default MainTheme;
