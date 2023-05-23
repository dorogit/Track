import createDataContext from "./createDataContext";
import tracker from "../api/tracker";

const trackReducer = (action, state) => {
  switch (action.type) {
    case "ADD_TRACK":
      return [...state, action.payload]
  
    default:
      break;
  }
}

const signIn = () => {
  // get a {email, password}
  //send to reducer
  // handle success by state update
  //handle failure by showing error
}

const signUp = () => {
  tracker.post('/signup')
}

const signOut = () =>{
  // get a {email, password}
  //handle success by updating state to IF user is signed in
}

export const {Context, Provider} = createDataContext(
  trackReducer,
  { addTrack },
  []
)