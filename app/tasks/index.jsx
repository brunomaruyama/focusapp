import { StyleSheet, Text, View } from "react-native";
import { FokusButton } from "../../components/FokusButton";
import { IconPlus } from "../../components/Icons";
import TaskItem from "../../components/TaskItem";

export default function Tasks() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lista de tarefas:</Text>
      <View style={styles.taskList}>
        <TaskItem completed={false} text="Task 1" />
        <TaskItem completed={true} text="Task 2" />
      </View>
      <FokusButton
        title="Adicionar nova tarefa"
        icon={<IconPlus outline />}
      ></FokusButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021123",
    gap: 40,
    paddingHorizontal: 8,
  },
  taskList: {
    width: "100%",
    gap: 8,
  },
  text: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
});
