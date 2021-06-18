import React from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from "react-native";

interface SkillProps extends TouchableOpacityProps {
  skill: string;
}

export function Skill({ skill, ...rest }: SkillProps) {
  return (
    <TouchableOpacity style={styles.skillButton} {...rest}>
      <Text style={styles.skillText}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  skillButton: {
    backgroundColor: "#1f1e25",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginVertical: 10,
  },
  skillText: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "bold",
  },
});
