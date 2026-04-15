// app/components/restaurants/RestReview.jsx
import { FlatList, StyleSheet, Text, View } from "react-native";
import { exampleTextPosts } from "./exampleData";

export default function RestReview() {
  return (
    <FlatList
      data={exampleTextPosts}
      key={"text-feed"}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.body}>{item.text}</Text>
        </View>
      )}
      ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 120,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "#f7f2e8",
    padding: 14,
    borderRadius: 10,
  },
  body: {
    fontSize: 15,
    lineHeight: 20,
  },
});