import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import SignupPage from "./Screens/Sign-up";
import Landingpage from "./Screens/Landing-page";
import LoginScreen from "./Screens/LoginScreen";
import CartPage from "./Screens/Cart";
import ProductPage from "./Screens/ProductPage";
import ProfileScreen from "./Screens/ProfileScreen";
import MyListingsPage from "./MyListingsPage";
import AddProductScreen from "./AddProductScreen";
import ProfilePage from "./Screens/ProfilePage";
import CollapsibleMenu from "./Screens/collapse";
import PreviousPurchaseScreen from "./Screens/previous";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">  
        <Stack.Screen name="Login" component={LoginScreen} /> 
        <Stack.Screen name="Signup" component={SignupPage} />
        <Stack.Screen name="Home" component={Landingpage} />
        <Stack.Screen name="Cart" component={CartPage} />
        <Stack.Screen name="menu" component={CollapsibleMenu} />
        <Stack.Screen name="Products" component={ProductPage} />
        <Stack.Screen name="Profile" component={ProfileScreen} initialParams={{ name: "User" }} />
        <Stack.Screen name="MyListingsPage" component={MyListingsPage} />
        <Stack.Screen name="AddProductScreen" component={AddProductScreen} />
        <Stack.Screen name="ProfilePage" component={ProfilePage}/>
        <Stack.Screen name="Purchases" component={PreviousPurchaseScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
