import { FlatList, View } from "react-native";
import FYPPost from "../FYPPost/FYPPost";
import { exampleFYP } from "./exampleData";

export default function FYPMode() {
  return (
    <View style={{ flex: 1, backgroundColor: "transparent" }}>
      <FlatList
        data={exampleFYP}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FYPPost post={item} />}
        contentContainerStyle={{
          paddingTop: 14,
          paddingBottom: 140,
          gap: 22,
          backgroundColor: "#f7f2e8", // moved here
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}