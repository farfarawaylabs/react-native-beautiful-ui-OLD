import React from 'react';
import { Text, ViewStyle, TextProps, StyleProp } from 'react-native';
import Styles from '../../styles/';

interface TypographyProps extends TextProps {
  /**
   * Additional styles or styles to override default style
   */
  style?: StyleProp<ViewStyle>;
}

/**
 * Text compoenent styles for screen title element
 */
const ScreenTitle: React.FC<TypographyProps> = ({
  style,
  children,
  ...rest
}) => {
  return (
    <Text style={[Styles.MainTheme.screenTitle, style]} {...rest}>
      {children}
    </Text>
  );
};

/**
 * Text compoenent styles for a title element
 */
const Title: React.FC<TypographyProps> = ({ style, children, ...rest }) => {
  return (
    <Text style={[Styles.MainTheme.title, style]} {...rest}>
      {children}
    </Text>
  );
};

/**
 * Text compoenent styles for a subtitle element
 */
const Subtitle: React.FC<TypographyProps> = ({ style, children, ...rest }) => {
  return (
    <Text style={[Styles.MainTheme.subTitle, style]} {...rest}>
      {children}
    </Text>
  );
};

/**
 * Text compoenent styles for a paragraph element
 */
const Paragraph: React.FC<TypographyProps> = ({ style, children, ...rest }) => {
  return (
    <Text style={[Styles.MainTheme.paragraph, style]} {...rest}>
      {children}
    </Text>
  );
};

const Typography = {
  ScreenTitle: ScreenTitle,
  Title: Title,
  Subtitle: Subtitle,
  Paragraph: Paragraph,
};

export default Typography;
