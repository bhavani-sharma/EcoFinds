import React, { useState } from 'react';
import {
  View,
  Text,Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Fake credentials for demo
  const correctUsername = 'test@example.com';
  const correctPassword = 'password123';

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please fill in both fields.');
      return;
    }

    if (username === correctUsername && password === correctPassword) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Invalid credentials.');
    }
  };

  return (
    
    <View style={styles.container}>
      {/* Logo Placeholder */}
      <Image
  source={require('../assets/icon.jpg')}  // Adjust path as needed
  style={styles.logoImage}
/>

      {/* Login Form */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email / Username :</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={username}
          onChangeText={setUsername}
        />

        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.registerContainer}>
            <Text> Dont have an account yet?{ }</Text>
            <TouchableOpacity onPress ={()=>navigation.navigate("Signup")}> 
              <Text style={styles.linkText}>REGISTER HERE</Text>
            </TouchableOpacity>
    </View>
    </View>
    
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logoImage: {
  width: 100,
  height: 100,
  borderRadius: 50, // makes it circular
  alignSelf: 'center',
  marginBottom: 40,
  resizeMode: 'cover',
  backgroundColor: '#ccc',
},
  formContainer: {
    marginBottom: 30,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#f6f6f6',
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 15,
    height: 45,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  loginButton: {
    backgroundColor: '#444',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
  },
  registerContainer:{
    flexDirection:'row',
    marginTop:10,
    justifyContent:'center'
  },
  linkText:{
    color:"maroon",
    fontWeight:"bold"
  }
});