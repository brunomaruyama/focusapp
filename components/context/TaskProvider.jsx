import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

const TASKS_STORAGE_KEY = "fokus-tasks";

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(TASKS_STORAGE_KEY);
        const loadedData = jsonValue != null ? JSON.parse(jsonValue) : [];
        setTasks(loadedData); //sempre define tasks
        setIsLoaded(true); //sempre define isLoaded como true
      } catch (e) {
        console.error("Error loading tasks:", e);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const storeData = async (value) => {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(TASKS_STORAGE_KEY, jsonValue);
      } catch (e) {
        console.error("Error saving tasks:", e);
      }
    };
    if (isLoaded) {
      storeData(tasks);
    }
  }, [tasks, isLoaded]);

  const addTask = (description) => {
    console.log("Adding task:", description);
    setTasks((oldstate) => [
      ...oldstate,
      { description, id: oldstate.length + 1 },
    ]);
    // chamar persistência aqui
  };

  const toggleTaskCompleted = (id) => {
    setTasks((oldstate) =>
      oldstate.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const deleteTask = (id) => {
    setTasks((oldstate) => oldstate.filter((task) => task.id !== id));
  };

  const updateTask = (id, newDescription) => {
    setTasks((oldstate) =>
      oldstate.map((task) =>
        task.id === id ? { ...task, description: newDescription } : task
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, toggleTaskCompleted, deleteTask, updateTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}
