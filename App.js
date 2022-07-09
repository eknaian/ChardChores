import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import Chore from "./components/Chore";

export default function App() {
  const [chore, setChore] = useState("");
  const [chores, setChores] = useState([]);

  const textChangeHandler = (chore) => {
    setChore(chore);
  };

  const addChore = () => {
    Keyboard.dismiss();
    setChores((chores) => {
      return [...chores, chore];
    });
  };

  const deleteChore = (index) => {
    let choresCopy = [...chores];
    choresCopy.splice(index, 1);
    setChores(choresCopy);
  };
  return (
    <View style={styles.container}>
      <View style={styles.choreWrapper}>
        <Text style={styles.sectionTitle}>Chores</Text>
        <View style={styles.items}>
          {chores.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => deleteChore(index)}>
                <Chore id={index} text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <KeyboardAvoidingView
        style={styles.taskWrapper}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TextInput
          style={styles.input}
          onChangeText={textChangeHandler}
          placeholder="Add a chore"
        />
        <TouchableOpacity onPress={addChore}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  choreWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    margin: 30,
  },
  taskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-around",
  },
  input: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#c0c0c0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#c0c0c0",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {},
});
