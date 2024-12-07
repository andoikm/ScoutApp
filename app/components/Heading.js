import { StyleSheet, View, Text } from 'react-native';
import { Colors, defaultFont, HeadingSizes } from '../styles';

export const sizes = { small: 'small', medium: 'medium', default: 'default', large: 'large' };

export const themes = {danger: 'danger', primary: 'primary', info: 'info', default: 'default', secondary: 'secondary'}

const Heading = ({ size = sizes.medium, theme, bold, viewStyles = {}, styles = {}, children }) => {
  const getStyle = () => [
    baseStyles.text,
    baseStyles[size],
    baseStyles[theme],
    bold && baseStyles.bold,
    styles
  ];

  return (
    <View style={[baseStyles.view, viewStyles]}>
      <Text style={getStyle()}>{children}</Text>
    </View>
  );
};

export default Heading;

const baseStyles = StyleSheet.create({
  text: {
    ...defaultFont,
    color: Colors.primaryLightTextColor,
    fontSize: HeadingSizes.defaultFontSize,
  },
  bold: {
    fontWeight: '600'
  },
  [themes.default]: {
    color: Colors.primaryLightTextColor,
  },
  [themes.danger]: {
    color: Colors.dangerDarkColor,
  },
  [themes.info]: {
    color: Colors.infoColor,
  },
  [themes.primary]: {
    color: Colors.primaryTextColor,
  },
  [themes.secondary]: {
    color: Colors.secondaryTextColor,
  },
  [sizes.small]: {
    fontSize: HeadingSizes.smallFontSize,
    color: Colors.secondaryTextColor,
  },
  [sizes.medium]: {
    fontSize: HeadingSizes.mediumFontSize,
    color: Colors.primaryTextColor,
  },
  [sizes.default]: {
    fontSize: HeadingSizes.defaultFontSize,
    color: Colors.primaryLightTextColor,
  },
  [sizes.large]: {
    fontSize: HeadingSizes.largeFontSize,
    color: Colors.primaryTextColor,
  }
});
