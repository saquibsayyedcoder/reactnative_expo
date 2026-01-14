import React from "react";
import { View, useColorScheme } from "react-native";
import Colors from "../constant/Color";

const ThemeCard = ({ style, children, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View
      {...props}
      style={[
        {
          backgroundColor: theme.card,
          padding: 16,
          borderRadius: 12,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 6,
          elevation: 4,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default ThemeCard;
