// app/components/restaurants/RestaurantPills.jsx
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RestaurantPills({ mode, setMode }) {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={[styles.pill, mode === "grid" && styles.activePill]}
        onPress={() => setMode("grid")}
      >
        <Text style={styles.pillText}>🖼️</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.pill, mode === "text" && styles.activePill]}
        onPress={() => setMode("text")}
      >
        <Text style={styles.pillText}>📝</Text>
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