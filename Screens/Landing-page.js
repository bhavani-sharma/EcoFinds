import React from "react";
import { 
  View, Text, TextInput, TouchableOpacity, 
  StyleSheet, ScrollView, ImageBackground, Image 
} from "react-native";

export default function LandingPage({navigation}) {
  return (
    <ImageBackground 
      source={{ uri: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80" }} 
      style={styles.bgImage}
    >
      <ScrollView style={styles.overlay}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.menuBtn}><Text style={styles.icon} onPress={()=>navigation.navigate("menu")} >☰</Text></TouchableOpacity>
          <Text style={styles.logo}>EcoFinds</Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.cartBtn} onPress={()=>navigation.navigate("Cart")} ><Text style={styles.icon}>🛒</Text></TouchableOpacity>
            <TouchableOpacity style={styles.profileBtn} onPress={()=>navigation.navigate("ProfilePage")} ><Text style={styles.icon}>👤</Text></TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        <TextInput 
          style={styles.searchBar} 
          placeholder="Search for sustainable finds..."
          placeholderTextColor="#666"
        />

        {/* Action Buttons */}
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.actionBtn}><Text style={styles.btnText}>Sort</Text></TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn}><Text style={styles.btnText}>Filter</Text></TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn}><Text style={styles.btnText}>Group By</Text></TouchableOpacity>
        </View>

        {/* Banner Image */}
        <View style={styles.banner}>
          <Text style={styles.bannerText}>🌿 Sustainable Living Starts Here 🌿</Text>
        </View>

        {/* Categories */}
        <TouchableOpacity style={styles.categoriesBtn} onPress={()=>navigation.navigate("Products")}>
          <Text style={styles.catText}>Explore All Categories</Text>
        </TouchableOpacity>

        {/* Product Cards */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardRow}>
          <View style={styles.card}>
            <Image style={styles.cardImg} source={require( '../assets/vintagechair.avif') } />
            <Text style={styles.cardTitle}>Vintage Chair</Text>
          </View>
          <View style={styles.card}>
            <Image style={styles.cardImg} source={{ uri: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=80" }} />
            <Text style={styles.cardTitle}>Classic Lamp</Text>
          </View>
          <View style={styles.card}>
            <Image style={styles.cardImg} source={{ uri: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=500&q=80" }} />
            <Text style={styles.cardTitle}>Wooden Desk</Text>
          </View>
        </ScrollView>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgImage: { flex: 1, resizeMode: "cover" },
  overlay: { backgroundColor: "rgba(255,255,255,0.85)", padding: 15 },

  // Header
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 },
  logo: { fontSize: 26, fontWeight: "bold", color: "#2e7d32", fontFamily: "serif" },
  icon: { fontSize: 20 },
  headerIcons: { flexDirection: "row", gap: 15 },

  // Search
  searchBar: { 
    borderWidth: 1, borderColor: "#ccc", borderRadius: 25, padding: 12, 
    marginBottom: 15, backgroundColor: "#fff", fontSize: 16 
  },

  // Action Buttons
  actionRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },
  actionBtn: { 
    backgroundColor: "#2e7d32", paddingVertical: 10, paddingHorizontal: 20, 
    borderRadius: 25, elevation: 2 
  },
  btnText: { color: "#fff", fontWeight: "600" },

  // Banner
  banner: { height: 160, borderRadius: 15, backgroundColor: "#a5d6a7", justifyContent: "center", alignItems: "center", marginBottom: 20, elevation: 3 },
  bannerText: { fontSize: 18, fontWeight: "700", textAlign: "center", color: "#1b5e20" },

  // Categories
  categoriesBtn: { borderWidth: 2, borderColor: "#2e7d32", borderRadius: 25, padding: 12, alignItems: "center", marginBottom: 20, backgroundColor: "#e8f5e9" },
  catText: { color: "#2e7d32", fontWeight: "700", fontSize: 16 },

  // Cards
  cardRow: { flexDirection: "row" },
  card: { width: 140, height: 180, backgroundColor: "#fff", borderRadius: 15, marginRight: 15, elevation: 3, overflow: "hidden" },
  cardImg: { width: "100%", height: 120, borderTopLeftRadius: 15, borderTopRightRadius: 15 },
  cardTitle: { padding: 10, fontSize: 14, fontWeight: "600", color: "#333", textAlign: "center" }
});
