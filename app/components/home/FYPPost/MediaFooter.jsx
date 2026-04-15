import { Text, View } from "react-native";

export default function MediaFooter({ caption }) {
  return (
    <View
      style={{
        marginTop: 14,
        paddingRight: 6,
      }}
    >
      <Text
        style={{
          fontSize: 15,
          lineHeight: 20,
          color: "#fff",   // FORCE WHITE
          opacity: 0.9,
        }}
      >
        {caption}
      </Text>
    </View>
  );
}