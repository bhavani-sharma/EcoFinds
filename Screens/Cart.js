import React, { useState } from "react";
import { 
  View, Text, TouchableOpacity, StyleSheet, 
  ScrollView, Image, ImageBackground 
} from "react-native";

export default function CartPage({navigation}) {
  const [cart, setCart] = useState([
    { id: 1, name: "Vintage Chair", price: 1200, img: "https://images.unsplash.com/photo-1606813902929-6a4c6c719c84?auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "Classic Lamp", price: 800, img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=80" },
    { id: 3, name: "Wooden Desk", price: 2500, img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=500&q=80" },
  ]);

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    alert("Proceeding to Checkout!");
  };

  return (
    <ImageBackground 
      source={{ uri: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80" }} 
      style={styles.background}
      blurRadius={2} // soften background
    >
      <View style={styles.overlay}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>🌍 EcoFinds</Text>
          <TouchableOpacity style={styles.profileBtn}><Text style={styles.icon}>👤</Text></TouchableOpacity>
        </View>

        {/* Cart Title */}
        <Text style={styles.pageTitle}>🛒 Your Cart</Text>

        {/* Cart Items */}
        <ScrollView style={styles.cartList}>
          {cart.map(item => (
            <View key={item.id} style={styles.cartItem}>
              <Image source={{ uri: item.img }} style={styles.cartImg} />
              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>Rs. {item.price}</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Total Price */}
        <View style={styles.totalRow}>
          <Text style={styles.totalText}>Total price to pay:</Text>
          <Text style={styles.totalAmount}>Rs. {totalPrice}</Text>
        </View>

        {/* Checkout Button */}
        <TouchableOpacity style={styles.checkoutBtn} onPress={handleCheckout}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  overlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.4)", padding: 20 },

  // Header
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 15 },
  logo: { fontSize: 26, fontWeight: "bold", color: "#fff", letterSpacing: 1 },
  profileBtn: { padding: 5 },
  icon: { fontSize: 20, color: "#fff" },

  // Title
  pageTitle: { fontSize: 22, fontWeight: "700", color: "#e8f5e9", marginBottom: 15 },

  // Cart Items
  cartList: { flex: 1, marginBottom: 15 },
  cartItem: { flexDirection: "row", alignItems: "center", backgroundColor: "rgba(255,255,255,0.85)", borderRadius: 12, padding: 12, marginBottom: 10 },
  cartImg: { width: 60, height: 60, borderRadius: 8, marginRight: 12 },
  itemInfo: { flex: 1 },
  itemName: { fontSize: 16, fontWeight: "600", color: "#1b5e20" },
  itemPrice: { fontSize: 14, color: "#388e3c", marginTop: 3 },

  // Total Price
  totalRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 15 },
  totalText: { fontSize: 16, fontWeight: "600", color: "#fff" },
  totalAmount: { fontSize: 18, fontWeight: "700", color: "#c8e6c9" },

  // Checkout
  checkoutBtn: { backgroundColor: "#2e7d32", padding: 15, borderRadius: 12, alignItems: "center", shadowColor: "#000", shadowOpacity: 0.2, shadowRadius: 5 },
  checkoutText: { color: "#fff", fontSize: 17, fontWeight: "bold", letterSpacing: 1 },
});
