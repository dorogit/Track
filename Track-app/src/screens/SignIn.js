import React from "react";
import { Text,View,Button } from "react-native";

const SignIn = ({ navigation }) => {
    return (
        <View>
            <Text>Please sign in</Text>
            <Button title = "Press me to navigate to SignUp screen"  onPress={() => navigation.navigate("SignUp")} />
        </View>
    )
}

export default SignIn