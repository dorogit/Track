import createDataContext from "./createDataContext";
import tracker from "../api/tracker";
import AsyncStorage from '@react-native-async-storage/async-storage'

const trackReducer = (action, state) => {
  switch (action.type) {
    case "SIGN_UP":
      console.log(action.payload, "is sign up payload");
      return { ...state, token: action.payload };
    case "SIGN_IN":
      console.log(action.payload, "is sign in payload");
      return { ...state, token: action.payload };
    case "ADD_ERROR":
      console.log(action.payload, "is err payload");
      return { ...state, errorMessage: action.payload };
    case "CLEAR_ERROR_MESSAGE":
      return {...state, errorMessage:""}
    case "SIGN_OUT":
      return {...state, token:null}
    default:
      return state;
  }
};

const signUp = (dispatch) => {
  return async ({ email, password, callback }) => {
    try {
      const response = await tracker.post('/signup', { email: email, password: password });
      console.log(response.data.token);
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: "SIGN_UP", payload: response.data.token });
      console.log("dispatched sign up lol");
      callback();
    } catch (error) {
      console.log("sign up failed dispatched err", error); // Pass the error to the console.log statement
      dispatch({ type: "ADD_ERROR", payload: "Something went wrong" });
    }
  };
};

const signIn = (dispatch) => {
  return async ( {email, password, callback} ) => {
    const token = await AsyncStorage.getItem('token')
    console.log(token)
    try {
      const response = await tracker.post('/signin',{"email":email,"password":password})
      console.log(response)
      await AsyncStorage.setItem('token', response.data.token)
      if (response.data.error) {
        console.log(error)
        dispatch({ type: "ADD_ERROR", payload: "Something went wrong" })
      } else {
        dispatch({ type: "SIGN_IN", payload: response.data.token })
        callback()
      }
    } catch (error) {
      console.log(error)
      dispatch({ type: "ADD_ERROR", payload: "Something went wrong" })
    }
  }
}

const tryLocalSignIn = (dispatch) => {
  return async ({navigate}) => {
    const token = await AsyncStorage.getItem('token') 
    if (token) {
      console.log("signed in automatically")
      dispatch({ type:"SIGN_IN",payload:token })
      navigate('TabFlow')
    } else {
      console.log("token not found going to signup")
      navigate('SignUp')
    }
  }
}

const signOut = (dispatch) =>{
  return async ({navigate}) => {
    await AsyncStorage.removeItem('token')
    console.log("signed out and token removed!")
    dispatch({ type:"SIGN_OUT" })
    navigate('SignIn')
  }
}

const clearErrorMessage = (dispatch) => {
  return () => {
    dispatch({type:"CLEAR_ERROR_MESSAGE"})
  }
}

export const {Context, Provider} = createDataContext(
  trackReducer,
  { signUp,signIn,clearErrorMessage,tryLocalSignIn,signOut },
  {token:null, errorMessage:""}
)