import { NativeModules } from 'react-native';

type ReactNativeBeautifulUiType = {
  multiply(a: number, b: number): Promise<number>;
};

const { ReactNativeBeautifulUi } = NativeModules;

export default ReactNativeBeautifulUi as ReactNativeBeautifulUiType;
