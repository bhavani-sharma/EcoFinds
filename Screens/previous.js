import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const DATA = [
  {
    id: "1",
    name: "Timely Butterfly",
    price: "$25",
    category: "Accessories",
    seller: "Shop A",
    image: "https://via.placeholder.com/60",
  },
  {
    id: "2",
    name: "Elegant Watch",
    price: "$80",
    category: "Watches",
    seller: "Shop B",
    image: "https://via.placeholder.com/60",
  },
  {
    id: "3",
    name: "Stylish Bag",
    price: "$120",
    category: "Bags",
    seller: "Shop C",
    image: "https://via.placeholder.com/60",
  },
];

export default function PreviousPurchaseScreen({navigation}) {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productInfo}>Price: {item.price}</Text>
        <Text style={styles.productInfo}>Category: {item.category}</Text>
        <Text style={styles.productInfo}>Seller: {item.seller}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Logo</Text>
        <Ionicons name="cart-outline" size={28} color="red" />
        <Ionicons name="person-circle-outline" size={30} color="gray" />
      </View>

      <Text style={styles.title}>Previous Purchase</Text>

      {/* Search */}
      <TextInput
        style={styles.search}
        placeholder="Search ...."
        placeholderTextColor="#aaa"
      />

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sort</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Groupby</Text>
        </TouchableOpacity>
      </View>

      {/* Product List */}
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  logo: {
    fontSize: 18,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    textAlign: "center",
  },
  search: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#f2f2f2",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "500",
  },
  card: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
    backgroundColor: "#fff",
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  productDetails: {
    flex: 1,
    justifyContent: "center",
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  productInfo: {
    fontSize: 14,
    color: "#555",
  },
});