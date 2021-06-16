/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export function Button({ ...rest }) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7} {...rest}>
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
