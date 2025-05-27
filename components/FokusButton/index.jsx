import { Pressable, StyleSheet, Text } from "react-native";

export const FokusButton = ({ onPress, title, icon, outline }) => {
  return (
    <Pressable
      style={[styles.button, outline && styles.outlineButton]}
      onPress={onPress}
    >
      {icon}
      <Text style={[styles.buttonText, outline && styles.outlineButtonText]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#b872ff",
    padding: 8,
    borderRadius: 32,
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
    justifyContent: "center",
  },
  outlineButton: {
    backgroundColor: "transparent",
    borderColor: "#b872ff",
    borderWidth: 2,
  },
  buttonText: {
    color: "#021123",
    fontSize: 18,
    fontWeight: "semibold",
  },
  outlineButtonText: {
    color: "#b872ff",
  },
});
