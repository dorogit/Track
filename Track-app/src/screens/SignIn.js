import React, { useEffect, useState,useContext } from "react";
import { View,StyleSheet,TouchableOpacity } from "react-native";
import { Text,Input,Button,Image } from '@rneui/themed';
import Spacer from "../components/Spacer";
import { Context } from "../context/TrackContext";

const SignIn = ({ navigation }) => {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const { signIn, state } = useContext(Context)
    console.log(state.errorMessage,"this is err")
    useEffect(() => {
        navigation.setOptions({
            header: () => null
        })
    })

    return (
        <View style = {styles.viewStyle}>
           <Spacer>
                <Text style={styles.headerStyle} h3>Sign In to use Tracks!</Text>
           </Spacer>
           <Spacer>
                <Input autoCapitalize="none" autoCorrect={false} value={Email} onChangeText={(text) => setEmail(text)} label = "Email" />
           </Spacer>
           <Spacer>
                <Input secureTextEntry autoCapitalize="none" autoCorrect={false} value={Password} onChangeText={(text) => setPassword(text)} label = "Password" />
           </Spacer>
           {state.errorMessage ? <Text style = {{alignSelf:"center", color:"red"}} >{state.errorMessage}</Text> : null}
           <TouchableOpacity style = {{alignSelf:"center"}} onPress={() => navigation.navigate('SignUp')}>
                <Text style={{color:"#007fff"}}>
                    Don't have an account? Sign Up instead!
                </Text>
            </TouchableOpacity>
           <Spacer>
                <Button title="Sign In" onPress={() =>  signIn({email:Email, password: Password, callback: () => navigation.navigate('TabFlow')}) } /> 
           </Spacer>
           <View style ={{alignItems:"center"}}>
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

export default SignIn