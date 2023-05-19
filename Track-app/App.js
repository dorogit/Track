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

const Stack = createNativeStackNavigator()
const Tab = createMaterialBottomTabNavigator()

const Authentication = () => (
  <Stack.Navigator>
    <Stack.Screen name = "SignUp" component={SignUp} />
    <Stack.Screen name = "SignIn" component={SignIn} />
  </Stack.Navigator>
)

const HomeStack = () => (
  <Tab.Navigator>
    <Stack.Navigator>
      <Stack.Screen name = "List" component={ListScreen} />
      <Stack.Screen name = "Detail" component={DetailScreen} />
    </Stack.Navigator>
    <Stack.Screen name = "Create" component={CreateScreen} />
    <Stack.Screen name = "Account" component={AccountScreen} />
  </Tab.Navigator>
)

const App = () => {
  return (
    <NavigationContainer>
      <Authentication />
    </NavigationContainer>
  )
}

export default App