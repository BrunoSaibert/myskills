/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from 'react-native';

import { Button } from '../components/Button';
import { Skill } from '../components/Skill';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills(oldSkills => [...oldSkills, newSkill]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Bruno</Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginTop: 50 }]}>My Skills</Text>

      {mySkills.map((skill, index) => (
        <Skill key={index} skill={skill} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#ffffff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
});
