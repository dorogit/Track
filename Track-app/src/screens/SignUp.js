import React, { useEffect, useState,useContext } from "react";
import { View,StyleSheet } from "react-native";
import { Text,Input,Button,Image } from '@rneui/themed';
import Spacer from "../components/Spacer";
import { Context } from "../context/TrackContext";

const SignUp = ({ navigation }) => {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const { signUp } = useContext(Context)
    
    useEffect(() => {
        navigation.setOptions({
            header: () => null
        })
    })

    return (
        <View style = {styles.viewStyle}>
           <Spacer>
                <Text style={styles.headerStyle} h3>Sign Up to use Tracks!11</Text>
           </Spacer>
           <Spacer>
                <Input autoCapitalize="none" autoCorrect={false} value={Email} onChangeText={(text) => setEmail(text)} label = "Email" />
           </Spacer>
           <Spacer>
                <Input secureTextEntry autoCapitalize="none" autoCorrect={false} value={Password} onChangeText={(text) => setPassword(text)} label = "Password" />
           </Spacer>
           <Spacer>
                <Button title="Sign In" onPress={() =>  signUp({email:Email, password: Password, callback: navigation.navigate('SignIn')}) } /> 
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