import { Image, StyleSheet, Text, View } from "react-native";

import { router } from "expo-router";
import { FokusButton } from "../components/FokusButton";

export default function Index() {
  return (
    <View style={styles.background}>
      <Image source={require("../assets/images/Logo.png")} />
      <View style={styles.inner}>
        <Text style={styles.title}>
          Otimize sua{"\n"} produtividade,{"\n"}
          <Text style={styles.titleBold}>mergulhe no que{"\n"} importa</Text>
        </Text>
        <Image source={require("../assets/images/iniciopequeno.png")} />
        <FokusButton
          title={"Quero iniciar!"}
          onPress={() => router.navigate("/pomodoro")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
    fontWeight: "light",
  },
  titleBold: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  inner: {
    gap: 16,
  },
});
