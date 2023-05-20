import React, { useEffect, useState } from "react";
import { View,StyleSheet } from "react-native";
import Spacer from "../components/spacer";
import { Text,Input,Button } from '@rneui/themed';

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
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        flex:1,
        justifyContent:'center',
        marginBottom:"40%"
    },
    headerStyle: {
        alignSelf:"center"
    }
})

export default SignIn