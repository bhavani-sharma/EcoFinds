// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Import all screens
import HomeScreen from "./HomeScreen";
// import SignUpPage from "./SignUpPage";
import LoginScreen from "./LoginScreen";
import CartPage from "./CartPage";
import ProductPage from "./ProductPage";
import ProfilePage from "./ProfilePage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Define all routes here */}
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="SignUp" component={SignUpPage} /> */}
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Cart" component={CartPage} />
        <Stack.Screen name="Product" component={ProductPage} />
        <Stack.Screen name="Profile" component={ProfilePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
