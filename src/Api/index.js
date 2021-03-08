import apisauce from 'apisauce'
import { Alert } from 'react-native';
const applicationJson = 'application/json';

const create = (baseURL = 'https://www.haye.in/haye3010/service/') => {
    const api = apisauce.create({
        baseURL,
        method: 'POST',

        headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        timeout: 30000
    })

    const setHeader = (name, value) => api.setHeader(name, value)
    const deleteHeader = (name) => api.deleteHeader(name)
    const setToken = (token) => {
        return api.setHeader('Token', token)
    }
    const setContentType = (contentType) => api.setHeader('Content-Type', contentType)
    const user_login = (params) => {

        const logindata = new FormData();
        logindata.append('phone', params.phone)
        logindata.append('usertoken', params.token)
        return api.post('userlogin', logindata)
    }
    const user_login_otp_verify = (params) =>{

        const otpverifiydata = new FormData();
        otpverifiydata.append('phone', params.phone)
        otpverifiydata.append('otp', params.otp)
        return api.post('userloginverifyotp', otpverifiydata)}

    const user_profile_update = (params) => {
        const signupdata = new FormData();
        signupdata.append("name",params.full_name)
        signupdata.append("phone",params.phone)
        signupdata.append("email",params.email)
        signupdata.append("gender",params.gender)
        signupdata.append("dob",params.dob)
        return api.post('register', signupdata)}

    const City_name = (params) => api.post('getCities', params)


    return {
        setContentType,
        setHeader,
        deleteHeader,
        user_login,
        user_login_otp_verify,
        user_profile_update,
        City_name,
    }
}

export default {
    create
    // createTest
}
