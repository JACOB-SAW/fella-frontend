import { useEffect, useState } from "react";
import { View } from "react-native";

import HybridMode from "../../profile/feedModes/HybridMode";
import { exampleLiked } from "./exampleData";

export default function LikedGrid() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setTimeout(() => setPosts(exampleLiked), 300);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <HybridMode posts={posts} />
    </View>
  );
}