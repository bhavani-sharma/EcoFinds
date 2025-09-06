import React, { useState } from "react";
import { 
  View, Text, TextInput, ScrollView, TouchableOpacity, 
  StyleSheet, ImageBackground, Switch 
} from "react-native";

export default function AddProductScreen() {
  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    price: "",
    quantity: "",
    condition: "",
    year: "",
    brand: "",
    model: "",
    length: "",
    width: "",
    height: "",
    weight: "",
    material: "",
    color: "",
    packaging: false,
    manualIncluded: false,
    workingCondition: "",
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    console.log("Product Submitted:", form);
    alert("🌱 Product Added Successfully!");
  };

  return (
    <ImageBackground
      source={{ uri: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80" }}
      style={styles.background}
      blurRadius={2}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.overlayCard}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.logo}>🌍 EcoFinds</Text>
            <TouchableOpacity style={styles.cartBtn}>
              <Text style={styles.cartIcon}>🛒</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>Add a New Product</Text>

          {/* Image Upload Placeholder */}
          <TouchableOpacity style={styles.imageUpload}>
            <Text style={styles.imageText}>+ Add Product Image</Text>
          </TouchableOpacity>

          {/* Input Fields */}
          <TextInput style={styles.input} placeholder="Product Title" value={form.title} onChangeText={t => handleChange("title", t)} />
          <TextInput style={styles.input} placeholder="Product Category" value={form.category} onChangeText={t => handleChange("category", t)} />
          <TextInput style={styles.input} placeholder="Product Description" value={form.description} onChangeText={t => handleChange("description", t)} />
          <TextInput style={styles.input} placeholder="Price" keyboardType="numeric" value={form.price} onChangeText={t => handleChange("price", t)} />
          <TextInput style={styles.input} placeholder="Quantity" keyboardType="numeric" value={form.quantity} onChangeText={t => handleChange("quantity", t)} />
          <TextInput style={styles.input} placeholder="Condition" value={form.condition} onChangeText={t => handleChange("condition", t)} />
          <TextInput style={styles.input} placeholder="Year of Manufacture" keyboardType="numeric" value={form.year} onChangeText={t => handleChange("year", t)} />
          <TextInput style={styles.input} placeholder="Brand" value={form.brand} onChangeText={t => handleChange("brand", t)} />
          <TextInput style={styles.input} placeholder="Model" value={form.model} onChangeText={t => handleChange("model", t)} />
          <TextInput style={styles.input} placeholder="Dimensions (Length)" keyboardType="numeric" value={form.length} onChangeText={t => handleChange("length", t)} />
          <TextInput style={styles.input} placeholder="Dimensions (Width)" keyboardType="numeric" value={form.width} onChangeText={t => handleChange("width", t)} />
          <TextInput style={styles.input} placeholder="Dimensions (Height)" keyboardType="numeric" value={form.height} onChangeText={t => handleChange("height", t)} />
          <TextInput style={styles.input} placeholder="Weight" keyboardType="numeric" value={form.weight} onChangeText={t => handleChange("weight", t)} />
          <TextInput style={styles.input} placeholder="Material" value={form.material} onChangeText={t => handleChange("material", t)} />
          <TextInput style={styles.input} placeholder="Color" value={form.color} onChangeText={t => handleChange("color", t)} />

          {/* Switches instead of Checkboxes */}
          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>Original Packaging</Text>
            <Switch value={form.packaging} onValueChange={v => handleChange("packaging", v)} trackColor={{ false: "#ccc", true: "#2e7d32" }} />
          </View>

          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>Manual/Instructions Included</Text>
            <Switch value={form.manualIncluded} onValueChange={v => handleChange("manualIncluded", v)} trackColor={{ false: "#ccc", true: "#2e7d32" }} />
          </View>

          {/* Working Condition */}
          <TextInput
            style={[styles.input, { height: 90 }]}
            placeholder="Working Condition Description"
            multiline
            value={form.workingCondition}
            onChangeText={t => handleChange("workingCondition", t)}
          />

          {/* Submit Button */}
          <TouchableOpacity style={styles.addBtn} onPress={handleSubmit}>
            <Text style={styles.btnText}>➕ Add Item</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  scrollContainer: { padding: 15 },
  overlayCard: { backgroundColor: "rgba(255,255,255,0.9)", borderRadius: 15, padding: 20, shadowColor: "#000", shadowOpacity: 0.2, shadowRadius: 6 },

  // Header
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 15 },
  logo: { fontSize: 24, fontWeight: "bold", color: "#2e7d32", letterSpacing: 1 },
  cartBtn: { padding: 5 },
  cartIcon: { fontSize: 20 },

  // Title
  title: { fontSize: 20, fontWeight: "700", marginBottom: 15, color: "#1b5e20" },

  // Inputs
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 10, padding: 12, marginBottom: 12, backgroundColor: "#fafafa" },

  // Switches
  switchRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 12 },
  switchLabel: { fontSize: 16, color: "#333" },

  // Upload
  imageUpload: { borderWidth: 1, borderColor: "#2e7d32", borderRadius: 12, padding: 25, alignItems: "center", marginBottom: 15, backgroundColor: "#f1f8e9" },
  imageText: { color: "#2e7d32", fontWeight: "600" },

  // Button
  addBtn: { backgroundColor: "#2e7d32", padding: 15, borderRadius: 12, alignItems: "center", marginTop: 10, shadowColor: "#000", shadowOpacity: 0.2, shadowRadius: 5 },
  btnText: { color: "#fff", fontWeight: "bold", fontSize: 17 },
});