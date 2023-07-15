import createDataContext from "./createDataContext";
import tracker from "../api/tracker";
import AsyncStorage from '@react-native-async-storage/async-storage'

const trackReducer = (action, state) => {
  switch (action.type) {
    case "SIGN_UP":
      console.log(action.payload)
      return {...state, token:action.payload}
    case "SIGN_IN":
      console.log(action.payload)
    case "ADD_ERROR":
      return {...state, errorMessage:action.payload}
    default:
      return state
  }
}

const signUp = (dispatch) => {
  return async ( {email, password, callback} ) => {
    try {
      const response = await tracker.post('/signup', {email:email,password:password})
      console.log(response.data.token)
      await AsyncStorage.setItem('token', response.data.token)
      dispatch({ type: "SIGN_UP", payload: response.data.token })
      callback()
    } catch (error) {
      console.log(error)
      dispatch({ type: "ADD_ERROR", payload: "Something went wrong" })
    }
  }
}

const signIn = (dispatch) => {
  return async ( {email, password, callback} ) => {
    const token = await AsyncStorage.getItem('token')
    console.log(token)
    try {
      const response = await tracker.post('/signin',{"email":email,"password":password})
      console.log(response)
      await AsyncStorage.setItem('token', response.data.token)
      dispatch({ type: "SIGN_UP", payload: response.data.token })
      callback()
    } catch (error) {
      console.log(error)
      dispatch({ type: "ADD_ERROR", payload: "Something went wrong" })
    }
  }
}

const signOut = () =>{
  // get a {email, password}
  //handle success by updating state to IF user is signed in
}

export const {Context, Provider} = createDataContext(
  trackReducer,
  { signUp,signIn },
  {token:null, isSignedIn: false}
)