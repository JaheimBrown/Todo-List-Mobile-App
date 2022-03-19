import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ handleSubmit, task }) => {
  return (
    <TouchableOpacity onPress={() => handleSubmit(task)} style={styles.button}>
      <Text style={styles.text}>Button</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: "#036D19",
    borderRadius: 8,
    marginHorizontal: "10%",
    marginTop: 8,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
});

export default Button;
