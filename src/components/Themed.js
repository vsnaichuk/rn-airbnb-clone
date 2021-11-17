import * as React from 'react';
import {
  Text as DefaultText,
  useColorScheme,
  View as DefaultView,
  TextInput as DefaultTextInput,
} from 'react-native';

import Colors from '../constants/Colors';

export function useThemeColor(props, colorName) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function Text(props) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor(
    { light: lightColor, dark: darkColor },
    'text',
  );
  const defaultStyle = {
    fontFamily: 'Raleway-Regular',
  };

  return (
    <DefaultText
      style={[{ color }, defaultStyle, style]}
      {...otherProps}
    />
  );
}

export function TextInput(props) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background',
  );
  const color = useThemeColor(
    { light: lightColor, dark: darkColor },
    'text',
  );
  const defaultStyle = {
    fontFamily: 'Raleway-Regular',
  };

  return (
    <DefaultTextInput
      style={[{ color, backgroundColor }, defaultStyle, style]}
      placeholderTextColor={color}
      {...otherProps}
    />
  );
}

export function View(props) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background',
  );

  return (
    <DefaultView
      style={[{ backgroundColor }, style]}
      {...otherProps}
    />
  );
}
