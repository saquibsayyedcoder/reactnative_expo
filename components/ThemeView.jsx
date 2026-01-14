import {  View, useColorScheme } from 'react-native';
import Colors from '../constant/Color';

import React from 'react'

const ThemeView = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

  return (
    <View style={[{
        backgroundColor: theme.background

    }, ]}>
    </View>
  )
}

export default ThemeView

const styles = StyleSheet.create({})