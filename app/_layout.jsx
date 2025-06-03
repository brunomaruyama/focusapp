import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BackButtonDrawer } from "../components/BackButtonDrawer";
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
                return <BackButtonDrawer backHref="/tasks" />;
              },
            }}
          />
          <Drawer.Screen
            name="edit-task/[id]"
            options={{
              drawerItemStyle: { display: "none" },
              title: "",
              headerLeft: () => {
                return <BackButtonDrawer backHref="/tasks" />;
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
