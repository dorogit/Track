import React, { useEffect, useState } from "react";
import { View,StyleSheet } from "react-native";
import { Text,Input,Button,Image } from '@rneui/themed';
import Spacer from "../components/Spacer";

const SignIn = ({ navigation }) => {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    
    useEffect(() => {
        navigation.setOptions({
            header: () => null
        })
    })

    return (
        <View style = {styles.viewStyle}>
           <Spacer>
                <Text style={styles.headerStyle} h3>Sign in to use Tracks!</Text>
           </Spacer>
           <Spacer>
                <Input autoCapitalize="none" autoCorrect={false} value={Email} onChangeText={(text) => setEmail(text)} label = "Email" />
           </Spacer>
           <Spacer>
                <Input secureTextEntry autoCapitalize="none" autoCorrect={false} value={Password} onChangeText={(text) => setPassword(text)} label = "Password" />
           </Spacer>
           <Spacer>
                <Button onPress={() =>  navigation.navigate("TabFlow")} title = "Sign In" />
           </Spacer>
           <Image style = {styles.iconStyle} source={{uri:'https://cdn.discordapp.com/attachments/681407660721176596/1110118152962052096/track.png'}} />
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
        marginHorizontal:'25%',
        marginTop:'10%'
    }
})

export default SignIn