/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import {
    NavigationContainer,
    DefaultTheme as NavigationDefaultTheme,
    DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useSelector, useDispatch } from 'react-redux'
import {
    DefaultTheme as PaperDefaultTheme,
    DarkTheme as PaperDarkTheme
} from 'react-native-paper';
import { DrawerContent } from './DrawerContent';
import MainTabScreen from './MainTabScreen';
import SupportScreen from '../screens/SupportScreen';
import SettingsScreen from '../screens/SettingsScreen';
import BookmarkScreen from '../screens/BookmarkScreen';
import RootStackScreen from './RootStackScreen';
import DashboardScreen from '../screens/DashboardScreen'

import { navigationRef } from '../Tools/NavigationServices';

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
    var Status = useSelector(state => state['SignIn']);


    // const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    // const initialLoginState = {
    //     isLoading: true,
    //     userName: null,
    //     userToken: null,
    // };

    // const CustomDefaultTheme = {
    //     ...NavigationDefaultTheme,
    //     ...PaperDefaultTheme,
    //     colors: {
    //         ...NavigationDefaultTheme.colors,
    //         ...PaperDefaultTheme.colors,
    //         background: '#ffffff',
    //         text: '#333333'
    //     }
    // }

    // const CustomDarkTheme = {
    //     ...NavigationDarkTheme,
    //     ...PaperDarkTheme,
    //     colors: {
    //         ...NavigationDarkTheme.colors,
    //         ...PaperDarkTheme.colors,
    //         background: '#333333',
    //         text: '#ffffff'
    //     }
    // }

    // const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

    // const loginReducer = (prevState, action) => {
    //     switch (action.type) {
    //         case 'RETRIEVE_TOKEN':
    //             return {
    //                 ...prevState,
    //                 userToken: action.token,
    //                 isLoading: false,
    //             };
    //         case 'LOGIN':
    //             return {
    //                 ...prevState,
    //                 userName: action.id,
    //                 userToken: action.token,
    //                 isLoading: false,
    //             };
    //         case 'LOGOUT':
    //             return {
    //                 ...prevState,
    //                 userName: null,
    //                 userToken: null,
    //                 isLoading: false,
    //             };
    //         case 'REGISTER':
    //             return {
    //                 ...prevState,
    //                 userName: action.id,
    //                 userToken: action.token,
    //                 isLoading: false,
    //             };
    //     }
    // };

    // const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);


    // useEffect(() => {
    //     setTimeout(async () => {
    //         // setIsLoading(false);
    //         let userToken;
    //         userToken = null;
    //         try {
    //             userToken = await AsyncStorage.getItem('userToken');
    //         } catch (e) {
    //             console.log(e);
    //         }
    //         // console.log('user token: ', userToken);
    //         dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    //     }, 1000);
    // }, []);

    // if (loginState.isLoading) {
    //     return (
    //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //             <ActivityIndicator size="large" />
    //         </View>
    //     );
    // }

    return (


        <NavigationContainer ref={navigationRef}>
            {/* drawerContent={props => <DrawerContent {...props} />} */}
            {console.log(Status.SignStatus)}
            {Status.SignStatus ? (
                <Drawer.Navigator >
                    {/* <Drawer.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} /> */}
                    <Drawer.Screen name="HomeDrawer" component={MainTabScreen} options={{ headerShown: false }} />
                    <Drawer.Screen name="SupportScreen" component={SupportScreen} />
                    <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
                    <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
                </Drawer.Navigator>
            )
                :
                <RootStackScreen />
            }
        </NavigationContainer>


    );
}

export default DrawerScreen;
