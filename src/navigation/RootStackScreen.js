import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getItemFromStorage } from '../utils/AccessStorage'
import SplashScreen from '../screens/Splash/SplashScreen';
// import SignInScreen from '../screens/SignIn/SignInScreen';
import SignUpScreen from '../screens/SignUp/SignUpScreen';
import LoginScreen from '../screens/Login/Login'
import OTPScreen from '../screens/OTP/Otp'
import HomeScreen from '../screens/Home/Home';
import RaidingScreen from '../screens/Raiding/RaidingScreen'
import PaymentScreen from '../screens/Payment/Payment'

import Language from '../screens/Language/Language';



const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => {


    const [LoginStatus, setLoginStatus] = React.useState("")
    React.useEffect(() => {
        // Create an scoped async function in the hook
        async function anyNameFunction() {
            const GetDetails = await getItemFromStorage('PhoneNumber')
            if (!GetDetails) { }
            else { setLoginStatus(true) }

        }
        // Execute the created function directly
        anyNameFunction();
    }, []);

    return (
        <RootStack.Navigator>
            {/* {LoginStatus == "" && */}
                <>
                {/* <RootStack.Screen name="SignUpScreen" component={SignUpScreen} /> */}
                    <RootStack.Screen name="LoginScreen" component={LoginScreen}  options={{ headerShown: true ,title:"Login"  }}/>
                    <RootStack.Screen name="Otp" component={OTPScreen} options={{ headerShown: true , title:"Verification" }} />
                    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: true , title:"Registartion" }} />
                </>
            {/* } */}
            <RootStack.Screen name="HomeScreen" component={HomeScreen} />
            <RootStack.Screen name="RaidingScreen" component={RaidingScreen} />
            <RootStack.Screen name="PaymentScreen" component={PaymentScreen} />

            <RootStack.Screen name="SplashScreen" component={SplashScreen} />
            <RootStack.Screen name="Language" component={Language} />
            {/* <RootStack.Screen name="SignInScreen" component={SignInScreen} /> */}
            {/* <RootStack.Screen name="VerificationScreen" component={VerificationScreen}/> */}

        </RootStack.Navigator>
    )
};

export default RootStackScreen;