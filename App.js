import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import SignupPage from "./Screens/Sign-up";
import Landingpage from "./Screens/Landing-page";
import LoginScreen from "./Screens/LoginScreen";
import CartPage from "./Screens/Cart";
import MyListingsPage from "./Screens/MyListingsPage";
import AddProductScreen from "'/Screens/AddProductScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">  
        <Stack.Screen name="Login" component={LoginScreen} /> 
        <Stack.Screen name="Signup" component={SignupPage} />
        <Stack.Screen name="Home" component={Landingpage} />
        <Stack.Screen name="Cart" component={CartPage} />
        <Stack.Screen name="MyListingsPage" component={MyListingsPage} />
        <Stack.Screen name="AddProductScreen" component={AddProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
