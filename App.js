import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";

export default function App() {
  // States
  const [name, setName] = useState("John Doe");
  const [age, setAge] = useState("17");
  const [change, setChange] = useState(false);
  const [message, setMessage] = useState("");
  const [list, setList] = useState([
    { id: 1, name: "Jaheim" },
    { id: 2, name: "Devonte" },
    { id: 3, name: "Camron" },
    { id: 4, name: "Trevon" },
    { id: 5, name: "Teklea" },
    { id: 6, name: "Jovan" },
    { id: 7, name: "Lamoy" },
  ]);

  // Functions
  const updateName = val => {
    setName(val);
  };

  const updateAge = val => {
    setAge(val);
  };

  const toggleTheme = () => {
    setChange(!change);
  };

  const displayMsg = () => {
    if (!name || name === "John Doe") {
      setName("Anon");
    }
    if (!age || name === "17") {
      setAge("blank");
    }
    setMessage(`Hi👋🏾 I'm ${name}, I am ${age} years old.`);
  };

  return (
    <View style={styles.container}>
      <View style={change ? styles.button2 : styles.button}>
        <Text style={styles.whiteTxt}>
          My First React Native Application 👍
        </Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
        {/* Inputs & States */}
        <Text style={styles.label}>Enter Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g John Doe"
          onChangeText={val => {
            updateName(val);
          }}
        ></TextInput>
        <Text style={styles.label}>Enter Age:</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g 0 - 99+"
          keyboardType="numeric"
          onChangeText={val => {
            updateAge(val);
          }}
        ></TextInput>
        <Pressable
          style={change ? styles.primaryBtn2 : styles.primaryBtn}
          onPress={displayMsg}
        >
          <Text style={styles.btnTxt}>Switch</Text>
        </Pressable>
        <Text style={styles.finalTxt}>{message}</Text>

        {/* Mapping through data and creating a list and scrollable view */}
        <View style={styles.headerContainer}>
          <Text style={styles.header}>List of People</Text>
        </View>
        {list.map(person => (
          <View style={styles.listContainer} key={person.id}>
            <Text style={styles.listItem}>{person.name}</Text>
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 48,
  },
  button: {
    padding: 24,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 20,
    backgroundColor: "blue",
  },
  button2: {
    padding: 24,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 20,
    backgroundColor: "orange",
  },
  whiteTxt: {
    color: "#fff",
  },
  label: {
    marginTop: 32,
    alignSelf: "flex-start",
    marginLeft: "10%",
  },
  input: {
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: "dotted",
    borderColor: "rgba(0,0,0,0.3)",
    padding: 20,
    marginHorizontal: "10%",
    marginTop: 16,
  },
  primaryBtn: {
    marginTop: 32,
    padding: 20,
    backgroundColor: "blue",
    borderRadius: 4,
    alignSelf: "flex-start",
    marginLeft: "10%",
  },
  primaryBtn2: {
    marginTop: 32,
    padding: 20,
    backgroundColor: "orange",
    borderRadius: 4,
    alignSelf: "flex-start",
    marginLeft: "10%",
  },
  btnTxt: {
    color: "#fff",
  },
  finalTxt: {
    marginTop: 64,
    opacity: 0.8,
  },
  listContainer: {
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "blue",
    marginHorizontal: "10%",
    marginTop: 16,
    marginBottom: 16,
    borderRadius: 4,
  },
  listItem: {
    color: "#fff",
  },
  headerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 70,
    backgroundColor: "blue",
    margin: 0,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#fff",
  },
  scrollContainer: {
    display: "flex",
    width: "100%",
  },
});
