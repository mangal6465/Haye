import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    Image,
    KeyboardAvoidingView,
     ScrollView
} from "react-native";
import { themes } from '../../utils'
import { useDispatch } from 'react-redux'
import { Button, Popup, Input } from '../../components'
// import Gender from "../../components/Gender";
import Appicon from "../../components/Appicon";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function Login({ navigation }) {
    const dispatch = useDispatch()
    const [mobile, setMobile] = useState("");
    const [check, setCheck] = useState(false);


    function Signin() {

        dispatch({ type: 'LOGIN_REQUEST', payload: mobile })
    }

    return (
       
       
   
         
        
        <View style={styles.container}>
          <ScrollView >
            <View style = {{flex:1, height:"45%",backgroundColor:'#FDE8A5' , marginTop:0 , alignContent:'center' , alignItems:'center' , justifyContent:'center' , marginBottom:40}}>
            {/* <GenderComponent icon={require('../../assets/icons/activeM.png')} /> */}
            <Appicon icon={require("../../assets/icons/HayeLOGO.png")}/>
            </View>
            <Text style={styles.logintext}>LOGIN</Text>
            <Text style={styles.mobiletext}>Enter your mobile number to proceed</Text>
           
            <View style={{flex:1,  width: "80%", marginTop: 10, backgroundColor: '#fff', flexDirection: 'row', margin: "10%" , height:"10%" }}>
      
                <TextInput
                    style={styles.counterytext}
                    // onChangeText={text => onChangeText(text)}
                    placeholder={"+91"}
                    placeholderTextColor="#000"
                    editable={false}

                />
                <TextInput
                    style={styles.inputtext}
                    onChangeText={(mobile) => setMobile(mobile)}
                    placeholder={"Enter mobile number "}
                    paddingHorizontal={10}
                    keyboardType={'number-pad'}
                    placeholderTextColor="#000"
                    color={'black'}
                    returnKeyType='done'
                />
             
            </View>
            
            <View style = {{flex:1, marginBottom:"30%" }}>
                <Button
                    title={'Continue'}
                    onPress={Signin} />
            </View>
            </ScrollView>
        </View>

   
   
       
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: themes.color.button,
        // justifyContent: "center",
    },
    logintext: {
        marginBottom: 10,
        marginLeft: "10%",
        // textAlign: 'center',
        marginTop:10,
        color: '#0f0f0f',
        fontSize: 30,
        fontWeight: '700'
    },
    mobiletext: {
        marginBottom: 20,
        marginLeft: "10%",
        marginTop: "1%",
        // textAlign: 'center',
        color: '#B7B7B7',
        fontSize: 16,
        fontWeight: '600'
    },
    counterytext: {
        height: 40,
        width: "10%",
        borderColor: 'gray',
        borderWidth: 1

    },
    inputtext: {
        height: 40,
        width: "90%",
        borderColor: 'gray',
        borderWidth: 0.5
    },
    mainContainer: {
        width: 100,
        height: 100,
        // backgroundColor: 'red',
        borderColor: "#000",
        borderWidth: 2,
        borderRadius: 10,
    },
    checkContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'flex-end',
    },
    checkbox: {
        height: 15,
        width: 15,
        alignSelf: 'flex-end',
        marginRight: 5,
    },
    iconContainer: {
        flex: 3,
        justifyContent: 'center',
        alignContent: 'center',

    },
    icon: {
        width: 75,
        height: 75,
        alignSelf: 'center',
        marginBottom: 5,
    }
});