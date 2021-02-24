
export const SIGN_IN = 'LOGIN_DETAILS'
export const USER_INFORMATION = 'USER_INFORMATION'



const initialState = []

const SignReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        Login: action.payload
      }
    case USER_INFORMATION:
      return {
        ...state,
        User_info: action.payload
      }

  }
  return state
}

export default SignReducer