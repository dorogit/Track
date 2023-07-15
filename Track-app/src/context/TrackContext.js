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
    default:
      return state
  }
}

const signUp = (dispatch) => {
  return async ( {email, password, callback} ) => {
    try {
      const response = await tracker.post('/signup', {email:email,password:password})
      await AsyncStorage.setItem('token', response.data.token)
      dispatch({ type: "SIGN_UP", payload: response.data.token })
      callback()
    } catch (error) {
      console.log(error)
    }
  }
}

const signIn = (dispatch) => {
  return async ( {email, password} ) => {
    const token = await AsyncStorage.getItem('token')
    console.log(token)
    try {
      const response = await tracker.post('/signin', {
        headers:{
          authorization:`bearer ${token}`
        },
      body:{
        "email":email,
        "password":password
      }
      })
      dispatch({ type: "SIGN_UP", payload: response.data.token })
    } catch (error) {
      console.log(error)
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