import { useState } from "react";
import { Dimensions, FlatList, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import MediaLightbox from "../../MediaLightbox";
import MediaFooter from "./MediaFooter";
import PostHeader from "./PostHeader";
import VerticalActions from "./VerticalActions";

const CARD_WIDTH = Dimensions.get("window").width * 0.92;

export default function PostMedia({ post }) {
  // Support both post.images (array) and legacy post.image (string)
  const images = post.images ?? (post.image ? [post.image] : []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleScroll = (e) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / CARD_WIDTH);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.card}>

      {/* FLOATING ACTIONS */}
      <VerticalActions />

      {/* HEADER */}
      <PostHeader user={post.user} rating={post.rating} />

      {/* MEDIA CAROUSEL */}
      <View style={styles.mediaWrapper}>
        <FlatList
          data={images}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, i) => String(i)}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          scrollEnabled={images.length > 1}
          getItemLayout={(_, i) => ({ length: CARD_WIDTH, offset: CARD_WIDTH * i, index: i })}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                setCurrentIndex(index);
                setLightboxOpen(true);
              }}
              style={{ width: CARD_WIDTH }}
            >
              <Image source={{ uri: item }} style={styles.image} />
            </TouchableOpacity>
          )}
        />
      </View>

      {/* DOT INDICATORS for multi-image posts */}
      {images.length > 1 && (
        <View style={styles.dots}>
          {images.map((_, i) => (
            <View key={i} style={[styles.dot, i === currentIndex && styles.dotActive]} />
          ))}
        </View>
      )}

      {/* FOOTER */}
      <MediaFooter caption={post.caption} />

      {/* FULLSCREEN LIGHTBOX */}
      <MediaLightbox
        visible={lightboxOpen}
        images={images}
        initialIndex={currentIndex}
        onClose={() => setLightboxOpen(false)}
      />
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
    height: 260,
    resizeMode: "cover",
  },

  dots: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
    gap: 5,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "rgba(0,0,0,0.25)",
  },

  dotActive: {
    backgroundColor: "rgba(0,0,0,0.7)",
  },
});