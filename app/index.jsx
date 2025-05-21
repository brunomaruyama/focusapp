import { useRef, useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ActionButton } from "../components/ActionButton";
import { FokusButton } from "../components/FokusButton";
import { IconPause, IconPlay } from "../components/Icons";
import { Timer } from "../components/Timer";

const pomodoro = [
  {
    id: "Foco",
    time: 25 * 60,
    image: require("../assets/images/foco.png"),
    display: "Foco",
  },
  {
    id: "Pausa Curta",
    time: 5 * 60,
    image: require("../assets/images/curto.png"),
    display: "Pausa curta",
  },
  {
    id: "Pausa Longa",
    time: 15 * 60,
    image: require("../assets/images/longo.png"),
    display: "Pausa longa",
  },
];

export default function Index() {
  const [timerType, setTimerType] = useState(pomodoro[0]);
  const [seconds, setSeconds] = useState(pomodoro[0].time);
  const [timerRunning, setTimerRunning] = useState(false);

  const timerRef = useRef(null);

  const clear = () => {
    if (timerRef.current != null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTimerRunning(false);
    }
  };

  const toggleTimerType = (newTimerType) => {
    setTimerType(newTimerType);
    setSeconds(newTimerType.time);
    clear();
  };

  const toggleTimer = () => {
    if (timerRef.current) {
      clear();
      return;
    }

    setTimerRunning(true);

    const id = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 0) {
          clear();
          return timerType.time;
        }
        return prev - 1;
      });
      // update the timer
    }, 1000);
    timerRef.current = id;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image source={timerType.image} />
        <View style={styles.actions}>
          <View style={styles.context}>
            {pomodoro.map((p) => (
              <ActionButton
                key={p.id}
                active={timerType.id === p.id}
                onPress={() => toggleTimerType(p)}
                display={p.display}
              />
            ))}
          </View>
          <Timer totalSeconds={seconds} />
          <FokusButton
            title={timerRunning ? "Pausar" : "Começar"}
            icon={timerRunning ? <IconPause /> : <IconPlay />}
            iconSize={24}
            onPress={toggleTimer}
          />
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Projetos sem fins comerciais</Text>
          <Text style={styles.footerText}>Desenvolvido com Alura</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#021123",
  },
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
  context: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    alignItems: "center",
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
