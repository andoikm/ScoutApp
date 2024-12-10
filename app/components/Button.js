import React from 'react';
import { ButtonSizes, Colors, defaultFont } from '../styles';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icons from "./Icons";

export const shapes = { circle: 'circle', round: 'round' };
export const themes = {
  danger: 'danger',
  default: 'default',
  filled: 'filled',
  primary: 'primary',
  primaryOutline: 'primaryOutline',
  dangerOutline: 'dangerOutline',
  dangerOutlineText: 'dangerOutlineText',
  primaryFilled: 'primaryFilled',
  dangerFilled: 'dangerFilled',
};
const size = { small: 'small', medium: 'medium', large: 'large' };

const Button = ({
  title,
  onPress,
  flex,
  icon,
  disabled,
  vertical = false,
  theme = "default",
  size = "medium",
  shape = "round",
  styles = {},
  textStyles = {},
  children
}) => {
  const getButtonStyle = () => [
    baseStyles.button,
    baseStyles[theme],
    baseStyles[size],
    baseStyles[shape],
    vertical && baseStyles.vertical,
    disabled && baseStyles.disabled,
    flex && { flex },

    styles
  ];

  const textStyle = [
    baseStyles.text,
    baseStyles[`${theme}Text`],
    baseStyles[`${size}Text`],
    disabled && baseStyles.disabled,
    textStyles
  ];

  const iconStyle = [
    baseStyles.icon,
    baseStyles[`${theme}Text`],
  ]

  return (
    <TouchableOpacity style={getButtonStyle()} onPress={onPress} disabled={disabled}>
      {icon && <Icons icon={icon} style={iconStyle} />}
      {(title || children) && <Text style={textStyle}>{title}{children}</Text>}
    </TouchableOpacity>
  );
};

const baseStyles = StyleSheet.create({
  button: {
    gap: 6,
    display: 'flex',
    borderWidth: 1,
    borderStyle: 'solid',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    color: Colors.primaryTextColor,
    backgroundColor: Colors.lightBackgroundColor,
  },
  vertical: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    gap: 2,
    borderWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
    height: "auto",
  },
  text: {
    ...defaultFont,
    color: Colors.primaryTextColor,
    fontSize: ButtonSizes.mediumFontSize,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 22
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: Colors.primaryTextColor,
    fontSize: ButtonSizes.mediumFontSize + 3,
  },
  disabled: {
    opacity: 0.5,
    cursor: 'not-allowed'
  },
  default: {
    borderColor: Colors.primaryTextColor,
    backgroundColor: Colors.lightBackgroundColor,
  },
  defaultText: {
    color: Colors.primaryTextColor,
  },
  primary: {
    borderColor: Colors.primaryBackgroundColor,
    backgroundColor: Colors.primaryBackgroundColor,
  },
  primaryText: {
    color: Colors.lightTextColor,
  },
  filled: {
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: Colors.lightTextColor,
  },
  filledText: {
    color: Colors.primaryTextColor,
  },
  primaryOutline: {
    borderColor: Colors.primaryBackgroundColor,
    backgroundColor: Colors.lightBackgroundColor,
  },
  primaryOutlineText: {
    color: Colors.primaryBackgroundColor,
  },
  primaryFilled: {
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: Colors.primaryBackgroundColor + '33',
  },
  primaryFilledText: {
    color: Colors.primaryBackgroundColor,
  },
  danger: {
    borderColor: Colors.dangerColor,
    backgroundColor: Colors.dangerColor,
  },
  dangerText: {
    color: Colors.lightTextColor,
  },
  dangerOutline: {
    borderColor: Colors.dangerColor,
    backgroundColor: Colors.lightBackgroundColor,
  },
  dangerOutlineText: {
    color: Colors.dangerColor,
  },
  dangerFilled: {
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: Colors.dangerColor + '33',
  },
  dangerFilledText: {
    color: Colors.dangerColor,
  },
  [shapes.round]: {
    borderRadius: 8,
  },
  [shapes.circle]: {
    borderRadius: '50%',
    height: 40,
    width: 40,
    borderWidth: 0,
  },
  small: {
    height: ButtonSizes.smallHeight,
    padding: ButtonSizes.smallPadding,
  },
  smallText: {
    fontSize: ButtonSizes.smallFontSize
  },
  medium: {
    height: ButtonSizes.mediumHeight,
    padding: ButtonSizes.mediumPadding,
  },
  mediumText: {
    fontSize: ButtonSizes.mediumFontSize
  },
  large: {
    height: ButtonSizes.largeHeight,
    padding: ButtonSizes.largePadding,
  },
  largeText: {
    fontSize: ButtonSizes.largeFontSize
  },

});

export default Button;
