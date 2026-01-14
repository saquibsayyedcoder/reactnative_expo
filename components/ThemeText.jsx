import React from "react";
import { Text, useColorScheme } from "react-native";
import Colors from "../constant/Color";

const ThemeText = ({ style, children, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <Text
      {...props}
      style={[
        { color: theme.text },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default ThemeText;
