import React, { useState } from 'react'
import {
  View,
  Button, Text,
  TextInput, TouchableOpacity,
  StyleSheet, Image
} from 'react-native'
import { getStoreValue } from '../../Tools/StoreHandler'
import { useDispatch } from 'react-redux'
import { getItemFromStorage } from '../../utils/AccessStorage'
import { Images } from '../../utils'
import GenderComponent from "../../components/GenderComponent";
import { Alert } from 'react-native'

export default function signUp({ navigation }) {
  const dispatch = useDispatch();

  const [Name, setName] = useState("")
  const [Date, setDate] = useState("")
  const [Email, setEmail] = useState("")
  const [City, setCity] = useState("")
  const [Gender, setGender] = useState("")
  const [Phone, SetPhone] = useState("")
  const [gendercheckbox, setgendercheckbox] = useState(false)

  React.useEffect(() => {
    // Create an scoped async function in the hook
    async function anyNameFunction() {
      const GetDetails = await getItemFromStorage('PhoneNumber')
      if (!GetDetails) { }
      else { SetPhone(GetDetails) }

    }
    // Execute the created function directly
    anyNameFunction();
  }, []);

  var toplabelmessage = "Give us some basic information for creating more about \nyour experinces."

  function _signUp() {
    var request = {
      "Name": Name,
      "Date": Date,
      "Email": Email,
      "City": City,
      // "gender": Gender,
      "phone": Phone,
      "navigation": navigation
    }
    dispatch({ type: 'NEW_REGISTRATION', payload: request })
  }


  function selectGender(Status) {
    Alert.alert(Status)

    // setGender(Status)

    // if (status == "Male") {
    //   setgendercheckbox(true)
    //   setGender(Status)
    // }
    // else {
    //   setgendercheckbox(false)
    //   return
    // }

    // if (status == "Female") {
    //   setgendercheckbox(true)
    //   setGender(Status)


    // }
    // else {
    //   setgendercheckbox(false)
    //   return
    // }


  }



  return (
    <View style={{ flex: 1, backgroundColor: "#F6B035", }}>
      {/* <View style={{ flex: 0.2,alignItems:'flex-start',justifyContent:'flex-start'}}>
        <Image style={{top:0}} resizeMode="contain" source={Images["LeftDesign"]} />
      </View> */}
      <View style={styles.container}>
        <View style={{ textAlign: 'left' }}>
          <Text style={[styles.logintext, { color: '#000000' }]}>{toplabelmessage}</Text>
          <View style={{ marginTop: 20 }}>
            <TextInput
              style={styles.input}
              placeholder='Name'
              autoCapitalize="none"
              fontSize={18}
              backgroundColor='white'
              placeholderTextColor="#AFAFAF"
              onChangeText={(mobile) => setName(mobile)}
            />
            <TextInput
              style={styles.input}
              placeholder='DOB'
              autoCapitalize="none"
              fontSize={18}
              backgroundColor='white'
              placeholderTextColor="#AFAFAF"
              onChangeText={(mobile) => setDate(mobile)}
            />
            <TextInput
              style={styles.input}
              placeholder='Email Address'
              autoCapitalize="none"
              fontSize={18}
              backgroundColor='white'
              placeholderTextColor="#AFAFAF"
              onChangeText={(mobile) => setEmail(mobile)}
            />
            <TextInput
              style={styles.input}
              placeholder='City'
              autoCapitalize="none"
              fontSize={18}
              backgroundColor='white'
              placeholderTextColor="#AFAFAF"
              onChangeText={(mobile) => setCity(mobile)}
            />
            {/* <View style={{
              flexDirection: 'row', marginTop: 10, padding: 5,
              marginLeft: 15,
            }}>
              <Text style={{ textAlign: 'center', paddingTop: 5 }}>Gender</Text>
              <TouchableOpacity style={{ backgroundColor: "#d2d2d2", width: 50, marginLeft: 20, borderRadius: 3 }}
              >
                <Text style={styles.buttongender}>Male</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ backgroundColor: "#d2d2d2", marginLeft: 10, width: 50, borderRadius: 3 }}
                onPress={selectGender.bind(this, "Female")}
              >
                <Text style={styles.buttongender}>Female</Text>
              </TouchableOpacity>

            </View> */}




            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingLeft: 20, paddingRight: 20, }}>
              <TouchableOpacity onPress={selectGender.bind(this, "Male")}>
                
                <GenderComponent icon={require('../../assets/icons/male.png')} check={require('../../assets/icons/success.png')} gender={"Male"} />
              </TouchableOpacity>

              <TouchableOpacity onPress={selectGender.bind(this, "Female")}>
                <GenderComponent icon={require("../../assets/icons/female.png")} check={require("../../assets/icons/success.png")} gender={"Female"} />
              </TouchableOpacity>
            </View>



            {/* <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingLeft: 20, paddingRight: 20, }}>
              <TouchableOpacity onPress={selectGender.bind(this, "Male")}>
                <GenderComponent icon={require('../../assets/icons/male.png')} check={require('../../assets/icons/success.png')} gender={"Male"} />
              </TouchableOpacity>

              <TouchableOpacity onPress={selectGender.bind(this, "Female")}>
                <GenderComponent icon={require("../../assets/icons/female.png")} check={require("../../assets/icons/success.png")} gender={"Female"} />
              </TouchableOpacity>
            </View> */}

            <TouchableOpacity style={styles.loginBtn} onPress={() => _signUp()}>
              <Text style={styles.buttontext}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
      {/* <View style={{ flex: 0.3,alignItems:'flex-end',justifyContent:'flex-end' }}>
        <Image style={{bottom:0}} resizeMode="contain" source={Images["RightDesign"]} />
      </View> */}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: 350,
    height: 40,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 20,
    padding: 10,
    color: '#000',
    fontSize: 16,
    borderColor: "#d9d9d9",
    borderWidth: 0,
    borderRadius: 10
  },
  logintext: {
    padding: 5,
    marginLeft: 10,
    color: '#000000',
    fontSize: 14,

  },
  period: {
    borderRadius: 5,
    borderColor: '#fff',
    borderWidth: 1,

    marginHorizontal: 5,
  },
  periodActive: {
    backgroundColor: '#333',
  },

  loginBtn: {
    borderRadius: 5,
    height: 35,
    marginLeft: 15,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 50,
    backgroundColor: "#0d0A36",
  },
  buttontext: {
    color: '#F6B035',
    fontSize: 16,
    // fontWeight: 'bold'
  },
  // buttongender: {
  //   color: '#fff',
  //   // padding:20,
  //   paddingTop: 5,
  //   paddingBottom: 5,
  //   fontSize: 12, textAlign: 'center', fontWeight: 'bold'
  // },
})