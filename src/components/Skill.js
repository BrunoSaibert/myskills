/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export function Skill({ skill }) {
  return (
    <TouchableOpacity style={styles.skillButton}>
      <Text style={styles.skillText}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  skillButton: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
  },
  skillText: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
