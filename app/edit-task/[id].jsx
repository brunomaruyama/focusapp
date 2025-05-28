import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import useTaskContext from "../../components/context/useTaskContext";

export default function EditTask() {
  const { id } = useLocalSearchParams();
  const { tasks, updateTask } = useTaskContext();

  const task = tasks.find((task) => task.id === parseInt(id));
  const [description, setDescription] = useState(task ? task.description : "");

  useEffect(() => {
    if (task) {
      setDescription(task.description);
    }
  }, [task]);

  const handleSave = () => {
    if (!description) return;
    updateTask(task.id, description);
    router.navigate("/tasks");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Editar Tarefa</Text>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={4}
        />
        <Pressable style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Salvar</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021123",
    padding: 24,
    justifyContent: "center",
    gap: 16,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
  },
  input: {
    minHeight: 100,
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#1a1a1a",
    color: "#fff",
    borderColor: "#333",
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});
