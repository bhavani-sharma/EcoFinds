import React, { useState } from "react";
import { View, Text, TextInput, Button, Image, FlatList, TouchableOpacity } from "react-native";

const categories = [
  { id: 1, name: "Shoes", image: "https://via.placeholder.com/100" },
  { id: 2, name: "Bags", image: "https://via.placeholder.com/100" },
  { id: 3, name: "Accessories", image: "https://via.placeholder.com/100" },
];

export default function LandingPage({ navigation }) {
  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState(0);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      
      {/* Logo + Cart */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Logo</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Text>🛒 {cartCount}</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <TextInput
        style={{ borderWidth: 1, marginVertical: 10, padding: 8, borderRadius: 5 }}
        placeholder="Search..."
        value={search}
        onChangeText={setSearch}
      />

      {/* Buttons */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
        <Button title="Sort" onPress={() => {}} />
        <Button title="Filter" onPress={() => {}} />
        <Button title="Group By" onPress={() => {}} />
      </View>

      {/* Banner */}
      <Image
        source={{ uri: "https://via.placeholder.com/400x200" }}
        style={{ width: "100%", height: 150, marginBottom: 10 }}
      />

      {/* Categories */}
      <Text style={{ fontSize: 18, fontWeight: "600", marginVertical: 10 }}>All Categories</Text>
      <FlatList
        data={categories}
        numColumns={3}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ flex: 1, margin: 5, alignItems: "center" }}
            onPress={() => navigation.navigate("ProductDetails", { category: item.name })}
          >
            <Image source={{ uri: item.image }} style={{ width: 80, height: 80 }} />
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
