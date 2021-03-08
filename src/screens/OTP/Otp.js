import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View, Dimensions,
    Modal,
    TextInput,
    Button,
    TouchableOpacity,
    Alert,
} from "react-native";
import { getStoreValue } from '../../Tools/StoreHandler'
import { useDispatch } from 'react-redux'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { ScrollView } from "react-native-gesture-handler";
import { navigate, navigateScreen } from '../../Tools/NavigationServices'
import { set } from "react-native-reanimated";



export default function Otp({ navigation }) {
    const dispatch = useDispatch();
    const getLogin = getStoreValue('SignIn');
    const [modalVisible, setModalVisible] = useState(false);
    const getPhoneNumber = getLogin["Login"]["phone"];
    const getOtp = getLogin["Login"]["login_otp"];
    const [mobile, setMobile] = useState(getPhoneNumber);
    const [otp, setOtp] = useState("");

 

    const resendOtp = () => {
        dispatch({ type: 'LOGIN_REQUEST', payload: mobile })
        // navigateScreen(navigation, 'LoginScreen')
    }

    function changePhoneNumer() {
        //  mobile = "",
        // setMobile(mobile = "")
     
        navigateScreen(navigation, 'LoginScreen')

    }
    function confirmOtp() {

        // Alert.alert(JSON.stringify(otp))

        
        // debugger
        var request = {
            "phone": mobile,
            "navigation": navigation,
            "otp": otp["otp"]
        }
        dispatch({ type: 'USER_LOGIN_OTP_VERIFY', payload: request })
    }

    return (
        <ScrollView> 
        <View style={styles.container}>

            <View style={{ marginBottom: 2, marginTop: "30%" }}>

                <Text style={[styles.logintext, { color: '#000000' }]}>We sent a verification code </Text>


            </View>
            <View style={{ flexDirection: 'row', marginBottom: 20 }}>

                <Text style={[styles.logintext, { color: '#000000' }]}> to +91 {mobile} </Text>
            </View>

            <View style={styles.SectionStyle}>
                <OTPInputView

                    // autoFocusOnLoad={true}
                    codeInputFieldStyle={styles.OTPInputView}
                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                    style={styles.TextInput}
                    pinCount={6}
                    // code={getOtp} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                    onCodeChanged={otp => { setOtp({ otp }) }}
                    onCodeFilled={(otp => {
                        { setOtp({ otp }) }
                    })
                    }

                   
                />

            </View>

            {/* navigation.navigate('HomeScreen') */}
            <TouchableOpacity style={styles.loginBtn} onPress={confirmOtp.bind(this)} >
                <Text style={styles.buttontext}>Verify Now</Text>
            </TouchableOpacity>
            <View style={{ marginTop: 100 , marginBottom:50 }}>
                <Text style={[styles.logintext, { color: '#FFFAE8', marginLeft: 20 }]}>I didn't receive code  </Text>
                <TouchableOpacity style={{ ...styles.loginBtn, backgroundColor: '#F6B035', marginLeft: 50, marginTop: 10 }} onPress={resendOtp.bind(this)} >
                    <Text style={styles.bottombuttonView}>Resend code</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    ...styles.loginBtn, backgroundColor
                        : "#F6B035"
                }} onPress={changePhoneNumer.bind(this)} >
                    <Text style={styles.bottombuttonView}>Change phone number</Text>
                </TouchableOpacity>
            </View>

        </View>
        </ScrollView>
       
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F6B035",
        alignItems: "center",
        justifyContent: "center",
        marginBottom:10
    },
    logintext: {
        fontSize: 16,
        // fontWeight: '800'
    },
    buttontext: {
        color: '#F6B035',
        fontSize: 16,
        // fontWeight: 'bold'
    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#fff',

        marginTop: 80,
        marginLeft: 25,
        marginRight: 25,
        height: 50,
    },
    underlineStyleHighLighted: {
        borderColor: "blue",
        // color:'red',
        fontWeight: "800",
        backgroundColor: "white"

    },
    TextInput: {
        flex: 1,
        paddingLeft: 10,
        // borderWidth: 20,
        // borderBottomWidth: 1,
    },
    loginBtn: {
        width: "90%",
        borderRadius: 5,
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        alignItems: "center",
        justifyContent: "center",
        textAlign: 'center',
        marginTop: 60,
        backgroundColor: "#0d0A36",
    },
    OTPInputView: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderColor: "gray",
        color: "#0D0A36",
        backgroundColor: "#EFE8D1",
        fontWeight: "bold"
    },

    bottombuttonView: {
        color: '#0D0A36',
        fontSize: 16,
        marginBottom:12
        // fontWeight: 'bold'
    },


});