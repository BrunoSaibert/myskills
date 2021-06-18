import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Platform,
  StyleSheet,
  FlatList,
} from "react-native";

import { Button } from "../components/Button";
import { Skill } from "../components/Skill";

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState<SkillData[]>([]);

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };
    setMySkills((oldSkills) => [...oldSkills, data]);
  }

  function handleRemoveSkill(id: string) {
    setMySkills((oldSkills) => oldSkills.filter((skill) => skill.id !== id));
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

      <Button onPress={handleAddNewSkill} title="Add" />

      <Text style={[styles.title, { marginTop: 50, marginBottom: 20 }]}>
        My Skills
      </Text>

      <FlatList
        data={mySkills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Skill skill={item.name} onPress={() => handleRemoveSkill(item.id)} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1f1e25",
    color: "#ffffff",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
});
