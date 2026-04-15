import { Image, StyleSheet, View } from "react-native";
import MediaFooter from "./MediaFooter";
import PostHeader from "./PostHeader";
import VerticalActions from "./VerticalActions";

export default function PostMedia({ post }) {
  return (
    <View style={styles.card}>

      {/* FLOATING ACTIONS */}
      <VerticalActions />

      {/* HEADER */}
      <PostHeader user={post.user} rating={post.rating} />

      {/* MEDIA */}
      <View style={styles.mediaWrapper}>
        <Image
          source={{ uri: post.image }}
          style={styles.image}
        />
      </View>

      {/* FOOTER */}
      <MediaFooter caption={post.caption} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "92%",
    alignSelf: "center",
    paddingTop: 14,
    paddingBottom: 10,
    backgroundColor: "transparent",
    position: "relative",
    zIndex: 10,
  },

  mediaWrapper: {
    width: "100%",
    height: 260,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "black",
    marginTop: 10,
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});