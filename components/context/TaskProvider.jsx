import { createContext, useState } from "react";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const addTask = (description) => {
    console.log("Adding task:", description);
    setTasks((oldstate) => [
      ...oldstate,
      { description, id: oldstate.length + 1 },
    ]);
  };

  const toggleTaskCompleted = (id) => {
    setTasks((oldstate) =>
      oldstate.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const deleteTask = (id) => {
    setTasks((oldstate) => oldstate.filter((task) => task.id != id));
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, toggleTaskCompleted, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}
