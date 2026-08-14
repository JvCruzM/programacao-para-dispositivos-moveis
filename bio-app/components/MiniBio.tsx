import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Profile from './Profile';

interface MiniBioProps {
  photoUri: string;
  name: string;
  bioText: string;
}

export default function MiniBio({ photoUri, name, bioText }: MiniBioProps) {
  return (
    <View style={styles.card}>
      {/* Componente Profile sendo reutilizado */}
      <Profile photoUri={photoUri} name={name} />
      
      {/* Frase / Bio */}
      <Text style={styles.bio}>{bioText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4, 
    maxWidth: 320,
    width: '100%',
  },
  bio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
    fontStyle: 'italic',
  },
});