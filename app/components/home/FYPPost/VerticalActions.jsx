import { Text, TouchableOpacity, View } from "react-native";

export default function VerticalActions() {
  return (
    <View
      style={{
        position: "absolute",
        right: -18,          // moved left
        top: "52%",          // moved down
        transform: [{ translateY: -50 }],
        gap: 26,             // more spacing
        zIndex: 999,
        elevation: 10,
        alignItems: "center",
      }}
    >
      <TouchableOpacity>
        <Text style={{ fontSize: 26 }}>🔥</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={{ fontSize: 26 }}>⭐</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={{ fontSize: 26 }}>↗️</Text>
      </TouchableOpacity>
    </View>
  );
}