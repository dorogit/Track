import React from "react";
import SignUp from "./src/screens/SignUp";
import SignIn from "./src/screens/SignIn";
import CreateScreen from "./src/screens/CreateScreen";
import DetailScreen from "./src/screens/DetailScreen";
import ListScreen from "./src/screens/ListScreen";
import AccountScreen from "./src/screens/AccountScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Provider } from "./src/context/TrackContext";

const LoginFlow = createNativeStackNavigator()
const Tab = createMaterialBottomTabNavigator()

const HomeStack = () => (
  <Tab.Navigator>
    <Tab.Screen name = "List" component={ListScreen} />
    <Tab.Screen name = "Create" component={CreateScreen} />
    <Tab.Screen name = "Account" component={AccountScreen} />
  </Tab.Navigator>
)

const App = () => {
  return (
    <NavigationContainer>
      <LoginFlow.Navigator>
        <LoginFlow.Screen name = "SignUp" component={SignUp} />
        <LoginFlow.Screen name = "SignIn" component={SignIn} />
        <LoginFlow.Screen name = "TabFlow" component={HomeStack} />
        <LoginFlow.Screen name = "Detail" component={DetailScreen} />
      </LoginFlow.Navigator>
    </NavigationContainer>
  )
}

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}