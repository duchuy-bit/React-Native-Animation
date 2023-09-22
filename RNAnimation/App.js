import { View, Text, LogBox, TextInput } from 'react-native'
import React from 'react'

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import MainNavigation from './src/navigation/MainNavigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// import 'react-native-gesture-handler';
// 
// import 'react-native-gesture-handler';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFF',
    
  },
};

LogBox.ignoreAllLogs();


export default function App() {

  // Text.defaultProps.style = {color: 'white'}
  // TextInput.defaultProps.style = {color: 'blue'}

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer theme={MyTheme}>
        <MainNavigation/>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}