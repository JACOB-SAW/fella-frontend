// components/profile/ProfilePills.jsx
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProfilePills({ mode, setMode }) {
  return (
    <View style={styles.wrapper}>
      {/* LEFT PILL — HYBRID MODE */}
      <TouchableOpacity
        style={[styles.pill, mode === "hybrid" && styles.activePill]}
        onPress={() => setMode("hybrid")}
      >
        <Text style={styles.pillText}>📝</Text>
      </TouchableOpacity>

      {/* RIGHT PILL — GRID MODE */}
      <TouchableOpacity
        style={[styles.pill, mode === "grid" && styles.activePill]}
        onPress={() => setMode("grid")}
      >
        <Text style={styles.pillText}>🖼️</Text>
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