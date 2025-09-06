import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const ProfilePage = ({navigation}) => {
  return (
    <ImageBackground
      source={{
        uri: "https://i.ibb.co/6JyFJtH/nature-bg.jpg", // 🌿 Replace with your own nature background
      }}
      style={styles.background}
      blurRadius={3}
    >
      <View style={styles.overlay}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>EcoApp 🌱</Text>

           <TouchableOpacity style={styles.cartBtn} onPress={()=>navigation.navigate("Cart")} ><Text style={styles.icon}>🛒</Text></TouchableOpacity>
            <TouchableOpacity style={styles.profileBtn} onPress={()=>navigation.navigate("Profile")} ><Text style={styles.icon}>👤</Text></TouchableOpacity>
        </View>

        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.avatarWrapper}>
            <View style={styles.avatar} />
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.infoWrapper}>
            <View style={styles.infoBox}>
              <Text style={styles.infoText}>👤 User Name</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoText}>📧 Email</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoText}>📱 Phone</Text>
            </View>
          </View>
        </View>

        {/* Navigation Section */}
        <View style={styles.navigationSection}>
          <Text style={styles.navTitle}>⚡ Quick Access</Text>
          <TouchableOpacity style={styles.navButton} onPress = {()=>navigation.navigate("MyListingsPage")}>
            <Text style={styles.navText}>📦 My Listings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress = {()=>navigation.navigate("Purchases")}>
            <Text style={styles.navText}>🛍️ My Purchases</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: "rgba(255,255,255,0.8)", // glass overlay
    padding: 20,
  },

  /* Header */
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2e7d32",
    fontFamily: "serif",
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
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  profileCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 1.5,
    borderColor: "#2e7d32",
    backgroundColor: "rgba(255,255,255,0.9)",
  },

  /* Profile Section */
  profileSection: {
    borderRadius: 18,
    padding: 18,
    marginBottom: 20,
    backgroundColor: "rgba(255,255,255,0.85)", // glass effect
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },
  avatarWrapper: {
    alignItems: "center",
    marginBottom: 15,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 2,
    borderColor: "#4CAF50",
    marginBottom: 12,
    backgroundColor: "#f1f1f1",
  },
  editButton: {
    backgroundColor: "#4CAF50",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 10,
  },
  editText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  infoWrapper: {
    marginTop: 10,
  },
  infoBox: {
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    backgroundColor: "rgba(245,245,245,0.9)",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2,
  },
  infoText: {
    fontSize: 15,
    color: "#2e2e2e",
    fontWeight: "500",
  },

  /* Navigation Section */
  navigationSection: {
    borderRadius: 15,
    padding: 15,
    backgroundColor: "rgba(255,255,255,0.85)", // glass
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  navTitle: {
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 12,
    textAlign: "center",
    color: "#1b5e20",
  },
  navButton: {
    borderRadius: 12,
    paddingVertical: 14,
    marginBottom: 10,
    alignItems: "center",
    backgroundColor: "#e8f5e9",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2,
  },
  navText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#2e7d32",
  },
});

export default ProfilePage;