import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const MyListingsPage = () => {
  const products = [
    {
      id: "1",
      name: "Wireless Earbuds",
      price: "₹ 1,999",
      category: "Electronics",
      status: "Available",
      seller: "John Doe",
      image: "https://via.placeholder.com/80",
    },
    {
      id: "2",
      name: "Gaming Mouse",
      price: "₹ 1,200",
      category: "Accessories",
      status: "Out of Stock",
      seller: "Tech Store",
      image: "https://via.placeholder.com/80",
    },
    {
      id: "3",
      name: "Yoga Mat",
      price: "₹ 899",
      category: "Fitness",
      status: "Available",
      seller: "FitLife",
      image: "https://via.placeholder.com/80",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productDetail}>💰 {item.price}</Text>
        <Text style={styles.productDetail}>📂 {item.category}</Text>
        <Text
          style={[
            styles.productDetail,
            { color: item.status === "Available" ? "#2e7d32" : "#c62828" },
          ]}
        >
          📦 {item.status}
        </Text>
        <Text style={styles.productDetail}>👤 {item.seller}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground
      source={{
        uri: "https://i.ibb.co/6JyFJtH/nature-bg.jpg", // 🌿 Replace with your own
      }}
      style={styles.background}
      blurRadius={3}
    >
      <View style={styles.overlay}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>EcoApp 🌱</Text>
          <View style={styles.headerIcons}>
            <View style={styles.cartWrapper}>
              <Icon name="cart-outline" size={26} color="#2e7d32" />
              <View style={styles.cartBadge}>
                <Text style={styles.badgeText}>3</Text>
              </View>
            </View>
            <View style={styles.profileCircle} />
          </View>
        </View>

        {/* Title + Add New */}
        <View style={styles.titleRow}>
          <Text style={styles.title}>My Listings</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+ Add New</Text>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <TextInput placeholder="🔍 Search..." style={styles.searchInput} />

        {/* Action Buttons */}
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Sort</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Filter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Group By</Text>
          </TouchableOpacity>
        </View>

        {/* Product List */}
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.85)", // soft glass overlay
    padding: 15,
  },

  /* Header */
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  logo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2e7d32",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  cartWrapper: {
    marginRight: 15,
  },
  cartBadge: {
    position: "absolute",
    top: -5,
    right: -10,
    backgroundColor: "#e91e63",
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  profileCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#4CAF50",
    backgroundColor: "rgba(255,255,255,0.9)",
  },

  /* Title + Add button */
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1b5e20",
  },
  addButton: {
    backgroundColor: "#4CAF50",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "600",
  },

  /* Search */
  searchInput: {
    borderWidth: 1,
    borderColor: "#a5d6a7",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 15,
    backgroundColor: "#f1f8e9",
  },

  /* Action Buttons */
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  actionButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#2e7d32",
    borderRadius: 10,
    paddingVertical: 10,
    marginHorizontal: 5,
    alignItems: "center",
    backgroundColor: "#e8f5e9",
  },
  actionText: {
    fontWeight: "600",
    color: "#2e7d32",
  },

  /* Product Card */
  productCard: {
    flexDirection: "row",
    borderRadius: 15,
    padding: 12,
    marginBottom: 12,
    backgroundColor: "rgba(255,255,255,0.95)", // glass card
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 12,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 5,
    color: "#1b5e20",
  },
  productDetail: {
    fontSize: 14,
    color: "#444",
    marginBottom: 2,
  },
});

export default MyListingsPage;