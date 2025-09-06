import React, { useState } from "react";
import {
     View,Text,StyleSheet,TouchableOpacity,Image,ScrollView,
Dimensions,
ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const { width } = Dimensions.get("window");

const ProductPage = () => {

  const images = [
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f", // eco water bottle
    "https://images.unsplash.com/photo-1593032457869-9e9efb58289f", // bamboo toothbrush
    "https://images.unsplash.com/photo-1616628182505-f6bcbb3a3a14", // reusable shopping bag
    "https://images.unsplash.com/photo-1617814076367-5d7b9dcd51cb", // handmade wooden bowl
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event) => {
    const slide = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(slide);
  };

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0", // leafy bg
      }}
      style={styles.background}
      blurRadius={3}
    >
      <View style={styles.overlay}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>EcoFinds</Text>
          <View style={styles.headerIcons}>
            {/* Cart with badge */}
            <View style={styles.cartWrapper}>
              <Icon name="cart-outline" size={26} color="#fff" />
              <View style={styles.cartBadge}>
                <Text style={styles.badgeText}>2</Text>
              </View>
            </View>
            {/* Profile */}
            <View style={styles.profileCircle} />
          </View>
        </View>

        {/* Page Title */}
        <View style={styles.pageTitleBox}>
          <Text style={styles.pageTitle}>Eco-Friendly Products</Text>
        </View>

        {/* Product Image Slider */}
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          style={styles.imageSlider}
        >
          {images.map((img, index) => (
            <Image
              key={index}
              source={{ uri: img }}
              style={styles.productImage}
            />
          ))}
        </ScrollView>

        {/* Dots Indicator */}
        <View style={styles.dotsContainer}>
          {images.map((_, index) => (
            <Text
              key={index}
              style={[
                styles.dot,
                { color: activeIndex === index ? "#2e7d32" : "#bbb" },
              ]}
            >
              ●
            </Text>
          ))}
        </View>

        {/* Product Description */}
        <View style={styles.descriptionBox}>
          <Text style={styles.descriptionTitle}>About This Product</Text>
          <Text style={styles.descriptionText}>
            Each EcoFinds product is made with{" "}
            <Text style={{ fontWeight: "600" }}>sustainable, eco-friendly</Text>{" "}
            materials. From bamboo toothbrushes to reusable shopping bags,{"\n"}
            these items are designed to reduce waste and{" "}
            <Text style={{ fontWeight: "600" }}>protect nature</Text>.
          </Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Buy Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cartButton}>
            <Text style={styles.cartButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
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
    color: "#fff",
    letterSpacing: 1,
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
    backgroundColor: "#e53935",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
  },
  profileCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
  },

  /* Page Title */
  pageTitleBox: {
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 12,
    paddingVertical: 8,
    alignItems: "center",
    marginBottom: 15,
  },
  pageTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },

  /* Image Slider */
  imageSlider: {
    height: 250,
    marginBottom: 10,
  },
  productImage: {
    width: width - 30,
    height: 250,
    borderRadius: 15,
    marginRight: 10,
  },

  /* Dots */
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 15,
  },
  dot: {
    fontSize: 18,
    marginHorizontal: 3,
  },

  /* Description */
  descriptionBox: {
    backgroundColor: "rgba(255,255,255,0.85)",
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 8,
    color: "#2e7d32",
  },
  descriptionText: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
  },

  /* Buttons */
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buyButton: {
    flex: 1,
    backgroundColor: "#2e7d32",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginRight: 10,
  },
  buyButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  cartButton: {
    flex: 1,
    backgroundColor: "#388e3c",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginLeft: 10,
  },
  cartButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default ProductPage;