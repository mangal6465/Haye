import { takeLatest, call, put, delay, all } from 'redux-saga/effects'

import { SignInSaga,OTPSaga,Registration , cityList } from './LoginSaga'
// import { getRoomSaga } from './Getsaga'

// 
// import { getUsersRequest } from './webSocket'

const dataSaga = function* dataSaga() {
    yield all([
        yield takeLatest('LOGIN_REQUEST', SignInSaga),
        yield takeLatest('USER_LOGIN_OTP_VERIFY', OTPSaga),
        yield takeLatest('NEW_REGISTRATION', Registration),
        yield takeLatest('City_name', cityList),
        // yield takeLatest('WEB_SOCKET', getUsersRequest)


    ])
}



export default dataSaga