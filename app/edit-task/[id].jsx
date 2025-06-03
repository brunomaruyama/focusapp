import { router, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import useTaskContext from "../../components/context/useTaskContext";
import FormTask from "../../components/FormTask";

export default function EditTask() {
  const { id } = useLocalSearchParams();
  const { tasks, updateTask } = useTaskContext();

  const task = tasks.find((task) => task.id === Number(id));

  const submitTask = (description) => {
    updateTask(Number(id), description);
    router.navigate("/tasks");
  };

  if (!task) {
    return (
      <View>
        <Text>Não foi encontrada uma tarefa com o id: {id}</Text>
      </View>
    );
  }

  return (
    <FormTask
      onFormSubmit={submitTask}
      defaultValue={task.description}
    ></FormTask>
  );
}
