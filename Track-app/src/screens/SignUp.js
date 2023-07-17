import React, { useEffect, useState,useContext } from "react";
import { View,StyleSheet, TouchableOpacity } from "react-native";
import { Text,Input,Button,Image } from '@rneui/themed';
import Spacer from "../components/Spacer";
import { Context } from "../context/TrackContext";

const SignUp = ({ navigation }) => {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const { signUp,state,clearErrorMessage } = useContext(Context)
    console.log(state.errorMessage,"is state err")
    
    useEffect(() => {
        navigation.setOptions({
            header: () => null
        })
        const unsubscribe = navigation.addListener('focus', () => {
            clearErrorMessage()
        });   
        
        return unsubscribe
    },[navigation])

    return (
        <View style = {styles.viewStyle}>
           <Spacer>
                <Text style={styles.headerStyle} h3>Sign Up to use Tracks!</Text>
           </Spacer>
           <Spacer>
                <Input autoCapitalize="none" autoCorrect={false} value={Email} onChangeText={(text) => setEmail(text)} label = "Email" />
           </Spacer>
           <Spacer>
                <Input secureTextEntry autoCapitalize="none" autoCorrect={false} value={Password} onChangeText={(text) => setPassword(text)} label = "Password" />
           </Spacer>
           {state.errorMessage ? (<Text style = {{alignSelf:"center", color:"red"}} >{state.errorMessage}</Text>): null}
           <TouchableOpacity style = {{alignSelf:"center"}} onPress={() => navigation.navigate('SignIn')}>
                <Text style={{color:"#007fff"}}>
                    Already have an account? Sign in instead!
                </Text>
           </TouchableOpacity>
           <Spacer>
                <Button title="Sign Up" onPress={() =>  signUp({email:Email, password: Password, callback: () => navigation.navigate('SignIn')}) } /> 
           </Spacer>
           
           <View style={{alignSelf:"center"}}>
                <Image style = {styles.iconStyle} source={{uri:'https://cdn.discordapp.com/attachments/681407660721176596/1110118152962052096/track.png'}} />
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        flex:1,
        justifyContent:'center',
    },
    headerStyle: {
        alignSelf:"center"
    },
    iconStyle:{
        width:220,
        height:220,
    }
})

export default SignUp