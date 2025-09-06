import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CollapsibleMenu({ navigation }) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <View>
      <TouchableOpacity
        style={styles.toggleButton}
        onPress={() => setCollapsed(!collapsed)}
      >
        <Text style={styles.menuText}>{collapsed ? 'Open Menu' : 'Close Menu'}</Text>
      </TouchableOpacity>
      {!collapsed && (
        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('MyListing')}
          >
            <Text>My Listing</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('AddProduct')}
          >
            <Text>Add Product</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('UserProfile')}
          >
            <Text>User Profile</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  toggleButton: { padding: 12, backgroundColor: '#1976d2', borderRadius: 6, margin: 8 },
  menuText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  menu: { backgroundColor: '#eee', padding: 8, borderRadius: 6, marginTop: 4 },
  menuItem: { padding: 12, marginVertical: 4, backgroundColor: '#fff', borderRadius: 4 }
});