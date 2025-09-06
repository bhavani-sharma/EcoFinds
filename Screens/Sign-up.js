import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ImageBackground,
} from "react-native";
import CryptoJS from "crypto-js"; // ✅ instead of bcrypt

const SignUpPage = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [users, setUsers] = useState([]);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSignUp = () => {
    setError("");

    if (!displayName || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Invalid email format.");
      return;
    }
    if (users.find((u) => u.email === email)) {
      setError("This email is already registered.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // ✅ SHA256 Hash instead of bcrypt
    const hashedPassword = CryptoJS.SHA256(password).toString();

    const newUser = { displayName, email, password: hashedPassword };
    setUsers([...users, newUser]);

    Alert.alert("Success", "Account created successfully!");
    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      }}
      style={styles.background}
      blurRadius={3}
    >
      <View style={styles.overlay}>
        <View style={styles.card}>
          <Text style={styles.title}>Create Account</Text>

          <TextInput
            style={styles.input}
            placeholder="Display Name"
            placeholderTextColor="#ccc"
            value={displayName}
            onChangeText={setDisplayName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#ccc"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#ccc"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#ccc"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />

          {error ? <Text style={styles.error}>{error}</Text> : null}

          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1 },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 20,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.5)",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    fontSize: 14,
    color: "#fff",
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  error: { color: "#ff6b6b", textAlign: "center", marginBottom: 10 },
  button: {
    backgroundColor: "#2e7d32",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default SignUpPage;