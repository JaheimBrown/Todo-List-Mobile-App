import { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";

// CUSTOM COMPONENTS
import Button from "./custom/Button";

const AddTodo = ({ handleSubmit, task, pressHandler }) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={val => pressHandler(val)}
        placeholder="Add todo..."
        clearButtonMode="always"
      />
      <Button handleSubmit={handleSubmit} task={task} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginHorizontal: "10%",
    marginTop: 20,
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
});

export default AddTodo;
