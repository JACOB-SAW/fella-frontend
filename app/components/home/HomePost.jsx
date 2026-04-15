import { StyleSheet, Text, View } from "react-native";

export default function HomePost({ item }) {
  return (
    <View style={styles.postContainer}>
      <Text style={styles.placeholderText}>Post placeholder</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    marginHorizontal: 12,
    marginBottom: 12,
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
  },

  placeholderText: {
    fontSize: 16,
    opacity: 0.6,
  },
});