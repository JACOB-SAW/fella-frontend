// app/components/profile/feedModes/HybridMode.jsx
import { useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MediaLightbox from "../../MediaLightbox";
import { exampleMedia, exampleTextPosts } from "./exampleData";

export default function HybridMode() {
  const [lightbox, setLightbox] = useState({ visible: false, images: [], index: 0 });

  const openLightbox = (uri) => setLightbox({ visible: true, images: [uri], index: 0 });
  const closeLightbox = () => setLightbox((prev) => ({ ...prev, visible: false }));

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {/* LEFT COLUMN — TEXT POSTS ON PARCHMENT */}
        <View style={styles.leftColumn}>
          <View style={styles.parchment}>
            <FlatList
              data={exampleTextPosts}
              key={"text"}
              scrollEnabled={false}
              renderItem={({ item }) => (
                <View style={styles.textItem}>
                  <Text style={styles.textBody}>{item.text}</Text>
                </View>
              )}
            />
          </View>
        </View>

        {/* RIGHT COLUMN — TWO-COLUMN MEDIA GRID */}
        <View style={styles.rightColumn}>
          <FlatList
            data={exampleMedia}
            key={"media"}
            numColumns={2}
            scrollEnabled={false}
            columnWrapperStyle={{ gap: 6 }}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => openLightbox(item.uri)}>
                <Image source={{ uri: item.uri }} style={styles.mediaTile} />
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={() => <View style={{ height: 6 }} />}
          />
        </View>
      </ScrollView>

      <MediaLightbox
        visible={lightbox.visible}
        images={lightbox.images}
        initialIndex={lightbox.index}
        onClose={closeLightbox}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 12,
    paddingBottom: 120,
    paddingHorizontal: 12,
    gap: 8,
  },

  /* LEFT COLUMN */
  leftColumn: {
    width: "33%",
  },
  parchment: {
    backgroundColor: "#f7f2e8",
    borderRadius: 10,
    padding: 12,
    flex: 1,
  },
  textItem: {
    marginBottom: 14,
  },
  textBody: {
    fontSize: 14,
    lineHeight: 18,
  },

  /* RIGHT COLUMN */
  rightColumn: {
    width: "67%",
  },
  mediaTile: {
    width: "48%",      // FIXED: forces true 2-column grid
    aspectRatio: 1,
    borderRadius: 8,
  },
});