import createDataContext from "./createDataContext";
import tracker from "../api/tracker";

const trackReducer = (action, state) => {
  switch (action.type) {
    case "SIGN_UP":
      console.log(action.payload)
    default:
      return state
  }
}

const signUp = (dispatch) => {
  return async ( {email, password} ) => {
    try {
      const response = await tracker.post('/signup', {email:email,password:password})
      console.log(response.data)
      dispatch({ type: "SIGN_UP", payload: response.data.token })
    } catch (error) {
      console.log(error)
    }
  }
}

const signIn = () => {
  // get a {email, password}
  //send to reducer
  // handle success by state update
  //handle failure by showing error
}

const signOut = () =>{
  // get a {email, password}
  //handle success by updating state to IF user is signed in
}

export const {Context, Provider} = createDataContext(
  trackReducer,
  { signUp },
  []
)