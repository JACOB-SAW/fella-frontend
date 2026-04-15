import { Image, Text, TouchableOpacity, View } from "react-native";

export default function TextHeader({ user }) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {/* PFP HANGING OFF */}
      <Image
        source={{ uri: user.pfp }}
        style={{
          width: 42,
          height: 42,
          borderRadius: 21,
          marginLeft: -20,
          marginRight: 10,
        }}
      />

      <Text style={{ fontSize: 15, fontWeight: "600" }}>{user.username}</Text>

      {/* HORIZONTAL ACTIONS */}
      <View style={{ flexDirection: "row", marginLeft: "auto", gap: 12 }}>
        <TouchableOpacity><Text style={{ fontSize: 20 }}>🔥</Text></TouchableOpacity>
        <TouchableOpacity><Text style={{ fontSize: 20 }}>⭐</Text></TouchableOpacity>
        <TouchableOpacity><Text style={{ fontSize: 20 }}>↗️</Text></TouchableOpacity>
      </View>
    </View>
  );
}