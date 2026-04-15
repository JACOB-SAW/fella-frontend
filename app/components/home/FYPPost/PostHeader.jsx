import { Image, Text, View } from "react-native";

export default function PostHeader({ user, rating }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 6,
        marginBottom: 6,
      }}
    >
      <Image
        source={{ uri: user.pfp }}
        style={{
          width: 38,
          height: 38,
          borderRadius: 19,
          marginLeft: -14,
          marginRight: 10,
        }}
      />

      <Text
        style={{
          fontSize: 15.5,
          fontWeight: "600",
          color: "#fff",   // FORCE WHITE
        }}
      >
        {user.username}
      </Text>

      <Text
        style={{
          marginLeft: "auto",
          transform: [{ rotate: "-12deg" }],
          fontSize: 20,
          fontWeight: "700",
          color: "#fff",   // FORCE WHITE
          opacity: 0.9,
        }}
      >
        {rating}
      </Text>
    </View>
  );
}

