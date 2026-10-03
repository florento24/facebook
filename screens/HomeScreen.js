import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import CreatePost from '../components/CreatePost';
import Stories from '../components/Stories';
import Posts from '../components/Posts';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <BottomNavigation />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CreatePost />
        <Stories />
        <Posts />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
  },
});