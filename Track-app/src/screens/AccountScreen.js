import React,{useContext} from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Context } from "../context/TrackContext";
import { Button } from "react-native-elements";

const AccountScreen = ({navigation}) => {
    const { signOut } = useContext(Context)
    return (
        <SafeAreaView>
            <Button onPress={() => signOut({navigate: navigation.navigate})} style={{alignSelf:"center"}} title="Sign Out" ></Button>
            <Text>This is the Account Screen !!</Text>
        </SafeAreaView>
    )
}

export default AccountScreen