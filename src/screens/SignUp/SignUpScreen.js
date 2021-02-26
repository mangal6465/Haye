import React, { useState } from 'react'
import {
  View,
  Button, Text,
  TextInput, TouchableOpacity,
  StyleSheet, Image,
  Alert,
} from 'react-native'
import { getStoreValue } from '../../Tools/StoreHandler'
import { useDispatch } from 'react-redux'
import { getItemFromStorage } from '../../utils/AccessStorage'
import { Images } from '../../utils'
import GenderComponent from "../../components/GenderComponent";
import CheckBox from '@react-native-community/checkbox';
import DatePicker from 'react-native-datepicker'
import { ScrollView } from 'react-native-gesture-handler'



export default function signUp({ navigation }) {
  const dispatch = useDispatch();

  const [Name, setName] = useState("")
  const [Date, setDate] = useState("")
  const [Email, setEmail] = useState("")
  const [City, setCity] = useState("")
  const [Gender, setGender] = useState("")
  const [Phone, SetPhone] = useState("")
  const [mGenderCheckbox, setmGenderCheckbox] = useState(false)
  const [fGenderCheckbox, setfGenderCheckbox] = useState(false)
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

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
      "gender": Gender,
      "phone": Phone,
      "navigation": navigation
    }

    

  
    dispatch({ type: 'NEW_REGISTRATION', payload: request })
  }


  function selectGender(Status) {
    // Alert.alert(Status)

    // setGender(Status)

    if (Status == "Male") {
      if (mGenderCheckbox == true) {
        setmGenderCheckbox(false)
        
      } else {
        setmGenderCheckbox(true)
        setGender(Status)
      }

      if (fGenderCheckbox == true) {
        setfGenderCheckbox(false);
      }

      // setGender(Status)
    }

    if (Status == "Female") {
      if (fGenderCheckbox == true) {
        setfGenderCheckbox(false)
      } else {
        setfGenderCheckbox(true)
        setGender(Status)
      }

      if (mGenderCheckbox == true) {
        setmGenderCheckbox(false)
      }

      // setGender(Status)
    }


  }



  return (
    <View style={{ flex: 1, backgroundColor: "#F6B035", }}>
      {/* <View style={{ flex: 0.2,alignItems:'flex-start',justifyContent:'flex-start'}}>
        <Image style={{top:0}} resizeMode="contain" source={Images["LeftDesign"]} />
      </View> */}
      <ScrollView>
      <View style={styles.container}>
        <View style={{ textAlign: 'left' }}>
          <Text style={[styles.logintext, { color: '#000000' }]}>{toplabelmessage}</Text>
          <View style={{ marginTop: 40 }}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingLeft: 20, paddingRight: 20, marginBottom:30 }}>
              {mGenderCheckbox == true ?
                <TouchableOpacity onPress={selectGender.bind(this, "Male")}>
                  <GenderComponent icon={require('../../assets/icons/activeM.png')} check={require('../../assets/icons/success.png')} gender={"Male"} />
                </TouchableOpacity>
                :

                <TouchableOpacity onPress={selectGender.bind(this, "Male")}>
                  <GenderComponent icon={require('../../assets/icons/male.png')} gender={"Male"} />
                </TouchableOpacity>
              }

              {fGenderCheckbox == true ?
                <TouchableOpacity onPress={selectGender.bind(this, "Female")}>
                  <GenderComponent icon={require("../../assets/icons/activeF.png")} check={require("../../assets/icons/success.png")} gender={"Female"} />
                </TouchableOpacity>
                :

                <TouchableOpacity onPress={selectGender.bind(this, "Female")}>
                  <GenderComponent icon={require("../../assets/icons/female.png")} gender={"Female"} />
                </TouchableOpacity>
              }
            </View>
            <TextInput
              style={styles.input}
              placeholder='Name'
              autoCapitalize="none"
              fontSize={18}
              backgroundColor='white'
              placeholderTextColor="#AFAFAF"
               autoCapitalize="none"
              onChangeText={(mobile) => setName(mobile)}
            />
            <DatePicker
              style={styles.input}
              placeholder='DOB'
              date={Date}
              mode="date"
              format="YYYY-MM-DD"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              disabled={false}
             
              autoCapitalize="none"
              fontSize={18}
              customStyles={{
                dateIcon: {
                  position: 'relative',
                  marginLeft: 0,
                  marginBottom:18
                },
                dateInput: {
                  marginEnd:200,
                  borderWidth: 0,
                  fontSize:18,
                  // alignItems: 'center',
                  marginBottom:18
                },
                placeholderText: {
                  fontSize: 17,
                  color: "#AFAFAF",
                  marginStart:-50
                  // marginLeft:100,
                  
                },
              }}
              onDateChange={(mobile) => setDate(mobile)}
              // onChangeText={(mobile) => setDate(mobile)}
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
            

            <View style={styles.checkboxView}>
              <CheckBox style = {{height:20 , marginLeft:10 }}
                 tintColor={'white'}
                height={"70"}
                disabled={false}
                value={toggleCheckBox}
                boxType= "square"
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
              />
              <Text style = {{color:'#FFFAE8'}}>I agree to the</Text>
              <Text style = {{color:'#0190DB'}}> Terms & conditions</Text>
              <Text style = {{color:'#FFFAE8'}}> and</Text>
              <Text style = {{color:'#0190DB'}}> Privacy Policy</Text>
            </View>


            <TouchableOpacity style={styles.loginBtn} onPress={() => _signUp()}>
              <Text style={styles.buttontext}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
      </ScrollView>
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
    borderRadius: 10,
    backgroundColor:'white',
    
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
  checkboxView: {

    flexDirection: 'row',
    height: 100,
    marginTop:30


  }
  // buttongender: {
  //   color: '#fff',
  //   // padding:20,
  //   paddingTop: 5,
  //   paddingBottom: 5,
  //   fontSize: 12, textAlign: 'center', fontWeight: 'bold'
  // },
})