import React from "react";
import { Text,View,Button } from "react-native";

const SignUp = ({ navigation }) => {
    return (
        <View>
            <Text>please sign up</Text>
            <Button title = "Press me to navigate to Homestack"  onPress={() => navigation.navigate('TabFlow')} />
        </View>
    )
}

export default SignUp