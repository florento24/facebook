import React from 'react';
import { View } from 'react-native';
import PostCard from './PostCard';

const posts = [
  {
    id: '1',
    name: 'Marie Randria',
    time: 'Il y a 2 h',
    content: 'Quelle magnifique journée ! ☀️',
    postImage: 'https://picsum.photos/seed/post1/400/300',
    likes: 124,
    comments: 18,
    shares: 5,
  },
  {
    id: '2',
    name: 'Jean Martin',
    time: 'Il y a 3 h',
    content: 'Nouveau projet en cours, hâte de vous montrer le résultat ! ',
    postImage: 'https://picsum.photos/seed/post2/400/300',
    likes: 89,
    comments: 12,
    shares: 3,
  },
  {
    id: '3',
    name: 'Sarah Lopez',
    time: 'Il y a 5 h',
    content: 'Week-end en famille 🏖️',
    postImage: 'https://picsum.photos/seed/post3/400/300',
    likes: 256,
    comments: 34,
    shares: 8,
  },
  {
    id: '4',
    name: 'Larry Page',
    time: 'Il y a 6 h',
    content: 'La technologie avance à grande vitesse ! 🚀',
    postImage: 'https://picsum.photos/seed/post4/400/300',
    likes: 412,
    comments: 56,
    shares: 22,
  },
  {
    id: '5',
    name: 'Emma Watson',
    time: 'Il y a 8 h',
    content: 'Lecture du jour 📚',
    postImage: 'https://picsum.photos/seed/post5/400/300',
    likes: 178,
    comments: 21,
    shares: 4,
  },
  {
    id: '6',
    name: 'Paul Durand',
    time: 'Il y a 10 h',
    content: 'Nouveau restaurant testé, je recommande ! 🍕',
    postImage: 'https://picsum.photos/seed/post6/400/300',
    likes: 95,
    comments: 15,
    shares: 2,
  },
  {
    id: '7',
    name: 'Lisa Kim',
    time: 'Il y a 12 h',
    content: 'Concert incroyable hier soir ! 🎵',
    postImage: 'https://picsum.photos/seed/post7/400/300',
    likes: 320,
    comments: 45,
    shares: 12,
  },
  {
    id: '8',
    name: 'Tom Hardy',
    time: 'Il y a 1 j',
    content: 'Entraînement du matin 💪',
    postImage: 'https://picsum.photos/seed/post8/400/300',
    likes: 201,
    comments: 28,
    shares: 6,
  },
  {
    id: '9',
    name: 'Anna Bell',
    time: 'Il y a 1 j',
    content: 'Coucher de soleil magnifique 🌅',
    postImage: 'https://picsum.photos/seed/post9/400/300',
    likes: 445,
    comments: 62,
    shares: 18,
  },
  {
    id: '10',
    name: 'David Lee',
    time: 'Il y a 2 j',
    content: 'Nouveau chat adopté ! 🐱',
    postImage: 'https://picsum.photos/seed/post10/400/300',
    likes: 567,
    comments: 89,
    shares: 25,
  },
];

export default function Posts() {
  return (
    <View>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          name={post.name}
          time={post.time}
          content={post.content}
          postImage={post.postImage}
          likes={post.likes}
          comments={post.comments}
          shares={post.shares}
        />
      ))}
    </View>
  );
}