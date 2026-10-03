import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import StoryCard from './StoryCard';

const stories = [
  {
    id: '1',
    name: 'Mario',
    storyImage: 'https://picsum.photos/seed/mario/200/350',
    profileImage: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: '2',
    name: 'Jean',
    storyImage: 'https://picsum.photos/seed/jean/200/350',
    profileImage: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: '3',
    name: 'Sarah',
    storyImage: 'https://picsum.photos/seed/sarah/200/350',
    profileImage: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: '4',
    name: 'Larry',
    storyImage: 'https://picsum.photos/seed/larry/200/350',
    profileImage: 'https://i.pravatar.cc/150?img=8',
  },
  {
    id: '5',
    name: 'Emma',
    storyImage: 'https://picsum.photos/seed/emma/200/350',
    profileImage: 'https://i.pravatar.cc/150?img=9',
  },
];

export default function Stories() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {stories.map((story) => (
          <StoryCard
            key={story.id}
            name={story.name}
            storyImage={story.storyImage}
            profileImage={story.profileImage}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});