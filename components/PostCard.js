import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PostCard({ name, time, content, postImage, likes, comments, shares }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <View style={styles.container}>
      {/* En-tête du post */}
      <View style={styles.header}>
        <Image
          source={{ uri: `https://i.pravatar.cc/150?u=${name}` }}
          style={styles.profileImage}
        />
        <View style={styles.headerText}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        <Ionicons name="ellipsis-horizontal" size={20} color="gray" />
      </View>

      {/* Contenu */}
      <Text style={styles.content}>{content}</Text>

      {/* Image du post */}
      {postImage && (
        <Image source={{ uri: postImage }} style={styles.postImage} />
      )}

      {/* Stats */}
      <View style={styles.stats}>
        <Text style={styles.statsText}>👍 {likeCount}</Text>
        <Text style={styles.statsText}>{comments} commentaires • {shares} partages</Text>
      </View>

      {/* Boutons d'action */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton} onPress={handleLike}>
          <Ionicons
            name={liked ? 'thumbs-up' : 'thumbs-up-outline'}
            size={20}
            color={liked ? '#1877F2' : 'gray'}
          />
          <Text style={[styles.actionText, liked && { color: '#1877F2' }]}>
            J'aime
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="chatbubble-outline" size={20} color="gray" />
          <Text style={styles.actionText}>Commenter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="share-social-outline" size={20} color="gray" />
          <Text style={styles.actionText}>Partager</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 8,
    padding: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginRight: 10,
  },
  headerText: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  time: {
    color: 'gray',
    fontSize: 12,
  },
  content: {
    fontSize: 15,
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 250,
    borderRadius: 8,
    marginBottom: 10,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  statsText: {
    color: 'gray',
    fontSize: 13,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 8,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    marginLeft: 5,
    color: 'gray',
    fontWeight: 'bold',
  },
});