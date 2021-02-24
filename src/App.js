/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider as StoreProvider } from 'react-redux'
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme
} from 'react-native-paper';

import store from '../src/Container/store';
import MainTabNavigator from './navigation/DrawerScreen'
const Drawer = createDrawerNavigator();

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  }

  //   useEffect(() => {
  //     LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  // }, [])

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  return (

    <PaperProvider theme={theme}>
      <StatusBar backgroundColor='#009387' barStyle="light-content" />
      <StoreProvider store={store}>
        {/* <SafeAreaView style={{ flex: 1 }}> */}
          <MainTabNavigator />
        {/* </SafeArea  View> */}
      </StoreProvider>
    </PaperProvider>

  );
}

export default App;
