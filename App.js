import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

// COMPONENTS
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

export default function App() {
  // States
  const [todos, setTodos] = useState([
    { id: 1, task: "Study" },
    { id: 2, task: "Workout" },
    { id: 3, task: "Design new UI" },
  ]);
  const [task, setTask] = useState("");

  // FUNCIONS
  const pressHandler = val => {
    setTask(val);
  };

  const removeTodo = id => {
    setTodos(prev => {
      return prev.filter(todo => todo.id !== id);
    });
  };

  const handleSubmit = todo => {
    if (todo.length > 3) {
      setTodos([...todos, { task: todo, id: Math.random().toString() }]);
    } else {
      Alert.alert("Sorry", "Tasks must have more than 3 chararcters long.", [
        { text: "Okay", onPress: () => console.log("Alert closed.") },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        {/* Header Component */}
        <Header />
        {/* Form Component */}
        <AddTodo
          handleSubmit={handleSubmit}
          pressHandler={pressHandler}
          task={task}
        />
        {/* Todo's */}
        <View style={styles.itemContainer}>
          <FlatList
            data={todos}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TodoItem item={item} removeTodo={removeTodo} />
            )}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  itemContainer: {
    marginTop: 20,
    padding: 40,
  },
  item: {},
});
