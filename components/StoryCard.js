import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function StoryCard({ name, storyImage, profileImage }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: storyImage }} style={styles.storyImage} />
      <Image source={{ uri: profileImage }} style={styles.profileImage} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    alignItems: 'center',
  },
  storyImage: {
    width: 110,
    height: 180,
    borderRadius: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#1877F2',
    position: 'absolute',
    top: 10,
    left: 10,
  },
  name: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: 'bold',
  },
});