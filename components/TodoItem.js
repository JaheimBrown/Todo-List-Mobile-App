import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const TodoItem = ({ item, removeTodo }) => {
  return (
    <TouchableOpacity onPress={() => removeTodo(item.id)}>
      <Text style={styles.todo}>{item.task}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    padding: 16,
    borderWidth: 1,
    // borderStyle: "dashed",
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 16,
  },
});

export default TodoItem;
