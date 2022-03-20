import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

// ICONS
import { MaterialIcons } from "@expo/vector-icons";

const TodoItem = ({ item, removeTodo }) => {
  return (
    <TouchableOpacity style={styles.todo} onPress={() => removeTodo(item.id)}>
      <MaterialIcons name="delete" size={24} color="#333" />
      <Text style={styles.task}>{item.task}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 16,
  },
  task: {
    marginLeft: 12,
  },
});

export default TodoItem;
