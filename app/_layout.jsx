import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { TaskProvider } from "../components/context/TaskProvider";

export default function Layout() {
  return (
    <TaskProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer
          screenOptions={{
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "#021123",
            },
            drawerStyle: {
              backgroundColor: "#021123",
              width: "80%",
            },
            drawerLabelStyle: {
              color: "#fff",
              fontSize: 16,
            },
          }}
        >
          <Drawer.Screen
            name="index"
            options={{
              headerShown: false,
              drawerItemStyle: { display: "none" },
            }}
          />
          <Drawer.Screen
            name="add-task/index"
            options={{
              drawerItemStyle: { display: "none" },
              title: "",
              headerLeft: () => {
                return (
                  <Ionicons
                    name="arrow-back"
                    size={24}
                    color="#fff"
                    style={{ marginLeft: 16 }}
                    onPress={() => router.navigate("/tasks")}
                  />
                );
              },
            }}
          />
          <Drawer.Screen
            name="edit-task/[id]"
            options={{
              drawerItemStyle: { display: "none" },
              title: "",
              headerLeft: () => {
                return (
                  <Ionicons
                    name="arrow-back"
                    size={24}
                    color="#fff"
                    style={{ marginLeft: 16 }}
                    onPress={() => router.navigate("/tasks")}
                  />
                );
              },
            }}
          />
          <Drawer.Screen
            name="pomodoro"
            options={{ drawerLabel: "Timer", title: "" }}
          />
          <Drawer.Screen
            name="tasks/index"
            options={{ drawerLabel: "Lista de tarefas", title: "" }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </TaskProvider>
  );
}
