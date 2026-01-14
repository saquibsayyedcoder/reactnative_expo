import React from "react";
import { Text, useColorScheme } from "react-native";
import Colors from "../constant/Color";

const ThemeLogo = ({ style, children = "MyApp", ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <Text
      {...props}
      style={[
        {
          fontSize: 28,
          fontWeight: "bold",
          color: theme.primary,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default ThemeLogo;
