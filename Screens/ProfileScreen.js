// screens/ProfileScreen.js
import React from "react";
import { View, Text, Button } from "react-native";

export default function ProfileScreen({ route, navigation }) {
  const { name } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 22 }}>Profile of {name}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
