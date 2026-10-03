import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

export default function BottomNavigation() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="home" size={24} color="#1877F2" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="people" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="chatbubble-ellipses" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="play-circle" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="notifications" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <FontAwesome5 name="store" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 5,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
});