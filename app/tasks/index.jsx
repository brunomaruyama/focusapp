import { router } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FokusButton } from "../../components/FokusButton";
import { IconPlus } from "../../components/Icons";
import TaskItem from "../../components/TaskItem";
import useTaskContext from "../../components/context/useTaskContext";

export default function Tasks() {
  const { tasks, deleteTask, toggleTaskCompleted } = useTaskContext();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <View style={styles.taskList}>
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <TaskItem
              key={item.id}
              completed={item.completed}
              text={item.description}
              onPressDelete={() => deleteTask(item.id)}
              onToggleComplete={() => toggleTaskCompleted(item.id)}
              onPressEdit={() => router.navigate(`/edit-task/${item.id}`)}
            />
          )}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
          ListHeaderComponent={
            <Text style={styles.text}>Lista de tarefas:</Text>
          }
          ListFooterComponent={
            <View style={{ marginTop: 16, paddingBottom: insets.bottom + 16 }}>
              <FokusButton
                title="Adicionar nova tarefa"
                icon={<IconPlus />}
                outline
                onPress={() => router.navigate("/add-task")}
              />
            </View>
          }
        />
      </View>
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
    marginBottom: 16,
  },
});
