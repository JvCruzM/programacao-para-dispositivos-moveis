import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ProfileProps {
  photoUri: string;
  name: string;
}

export default function Profile({ photoUri, name }: ProfileProps) {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: photoUri }} 
        style={styles.avatar} 
      />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#4A90E2',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
});