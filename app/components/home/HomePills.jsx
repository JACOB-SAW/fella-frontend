import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomePills({ mode, setMode }) {
  return (
    <View style={styles.wrapper}>

      {/* LEFT PILL — SAVED */}
      <TouchableOpacity
        style={[styles.pill, mode === "SAVED" && styles.activePill]}
        onPress={() => setMode("SAVED")}
      >
        <Text style={styles.pillText}>⭐</Text>
      </TouchableOpacity>

      {/* RIGHT PILL — FYP */}
      <TouchableOpacity
        style={[styles.pill, mode === "FYP" && styles.activePill]}
        onPress={() => setMode("FYP")}
      >
        <Text style={styles.pillText}>🧃</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 88,
    marginTop: 6,
    marginBottom: 4,
  },

  pill: {
    paddingVertical: 4,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: "#eee",
  },

  activePill: {
    backgroundColor: "#ddd",
  },

  pillText: {
    fontSize: 18,
  },
});