import { Text, View } from "react-native";
import TextHeader from "./TextHeader";

export default function PostText({ post }) {
  return (
    <View
      style={{
        backgroundColor: "white",
        borderRadius: 16,
        paddingVertical: 14,
        paddingHorizontal: 14,
        width: "92%",
        alignSelf: "center",
      }}
    >
      <TextHeader user={post.user} />

      <Text style={{ marginTop: 8, fontSize: 15, lineHeight: 20 }}>
        {post.text}  {post.rating}
      </Text>
    </View>
  );
}