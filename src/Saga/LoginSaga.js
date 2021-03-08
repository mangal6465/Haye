import { takeLatest, call, put, delay } from 'redux-saga/effects'
import { saveToStorage, getItemFromStorage } from '../utils/AccessStorage'
import API from '../Api'
import { saveUserInfo } from '../utils/User'
import { Alert, Platform } from "react-native";
import { navigate, navigateScreen } from '../Tools/NavigationServices'

const api = API.create()


export function* SignInSaga(action) {
  
  let params = {}
  // api.setHeader('Content-Type', 'application/x-www-form-urlencoded')
    params["phone"] = action.payload;
    params["token"] = "23232323";
    navigate('Language')
  
  // const response = yield call(api.user_login, params)
  // if (response.status == 200) {
  //   if (response.data["status"] == "1") {
  //     response.data.data["phone"] = action.payload;
  //     yield put({
  //       type: 'LOGIN_DETAILS',
  //       payload: response.data.data
  //     })
  //     navigate('Otp')
  //   }
  //   else {
  //     alert(response.data.message)
  //   }
  // }
}



export function* OTPSaga(action) {
  let params = {}
  const { phone, navigation, otp } = action.payload
  // api.setContentType(api.applicationJson)
  params["phone"] = phone;
  params["otp"] = otp;
  // params["devicetoken"] = "34567890";
  const response = yield call(api.user_login_otp_verify, params)
 

  // navigateScreen(navigation, 'SignUpScreen')
  if (response.status == 200) {
    if (response.data["user"] == "Registered User") {
      if (response.data.data["name"] == "") {
         saveToStorage("PhoneNumber", phone)
        navigateScreen(navigation, 'SignUpScreen')
      }
      else {
        saveToStorage("PhoneNumber", phone)
        saveToStorage("User_info", JSON.stringify(response.data.data))
        navigateScreen(navigation, 'HomeScreen')
        yield put({
          type: 'USER_INFORMATION',
          payload: response.data.data
        })
      }
    }
    else {
      alert(response.data.message)
    }
  }
}



export function* Registration(action) {
  let params = {}
  const { Name, Date, Email, City, gender, navigation, phone } = action.payload

  // api.setContentType(api.applicationJson)
  params["phone"] = phone;
  params["full_name"] = Name;
  params["email"] = Email;
  params["dob"] = Date;
  params["city_id"] = City;
  params["gender"] = gender;
  params["devicetoken"] = "34567890";
  const response = yield call(api.user_profile_update, params)
 
  if (response.status == 200) {
    if (response.data["status"] == "1") {
      
      navigateScreen(navigation, 'HomeScreen')
      saveToStorage("User_info", JSON.stringify(response.data))
      yield put({
        type: 'USER_INFORMATION',
        payload: response.data
      })
    }
    else {
      alert(response.data.message)
    }
  }
}

export function* cityList(action) {
  debugger
  const response = yield call(api.City_name) 
  api.setContentType(api.applicationJson)

  if (response.data.message == "success") {
    if (response.data.message == "success") {
   
      saveToStorage("User_info", JSON.stringify(response.data.data))
      yield put({
        type: 'USER_INFORMATION',
        payload: response.data.data
      })
    }
    else {
      alert(response.data.statusMessage)
    }
  }
}

