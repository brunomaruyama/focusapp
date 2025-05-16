import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/foco.png")} />
      <View style={styles.actions}>
        <Text style={styles.timer}>25:00</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Começar</Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Projetos sem fins comerciais</Text>
        <Text style={styles.footerText}>Desenvolvido com Alura</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40,
  },
  actions: {
    padding: 24,
    backgroundColor: "#14448080",
    width: "80%",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#144480",
    gap: 32,
  },
  timer: {
    fontSize: 54,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#b872ff",
    padding: 8,
    borderRadius: 32,
    alignItems: "center",
  },
  buttonText: {
    color: "#021123",
    fontSize: 18,
    fontWeight: "semibold",
  },
  footer: {
    width: "80%",
  },
  footerText: {
    color: "#98a0a8",
    fontSize: 12,
    textAlign: "center",
  },
});
