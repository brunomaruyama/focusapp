import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import useTaskContext from "../../components/context/useTaskContext";

export default function AddTask() {
  const [description, setDescription] = useState("");

  const { addTask } = useTaskContext();

  const submitTask = () => {
    if (!description) {
      return;
    }
    addTask(description);
    setDescription("");
    router.navigate("/tasks");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.text}>Adicionar uma tarefa:</Text>
          <Text style={styles.label}>Em que você está trabalhando?</Text>
          <TextInput
            style={styles.input}
            numberOfLines={10}
            multiline={true}
            value={description}
            onChangeText={setDescription}
          />
          <Pressable style={styles.button} onPress={submitTask}>
            <Ionicons name="save" />
            <Text>Salvar</Text>
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021123",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 26,
    marginBottom: 20,
  },
  inner: {
    backgroundColor: "#98a0a8",
    width: "90%",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    gap: 32,
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#fff",
    padding: 16,
    width: "100%",
    borderRadius: 8,
    height: 100,
    textAlignVertical: "top",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    borderColor: "#021123",
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
  },
});
