import { useEffect, useState } from "react";
import { View } from "react-native";

import HybridMode from "../../profile/feedModes/HybridMode";
import { exampleSaved } from "./exampleData";

export default function SavedGrid() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setTimeout(() => setPosts(exampleSaved), 300);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <HybridMode posts={posts} />
    </View>
  );
}