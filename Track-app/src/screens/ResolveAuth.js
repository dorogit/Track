import { Context } from "../context/TrackContext";
import React, {useContext,useEffect} from "react";

const ResolveAuth = ({navigation}) => {
  const {tryLocalSignIn} = useContext(Context)
  useEffect(() => {
    tryLocalSignIn({ navigate: navigation.navigate })
  },[])
  return (
    null
  )
}

export default ResolveAuth;