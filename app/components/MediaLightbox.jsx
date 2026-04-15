import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  Modal,
  PanResponder,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function MediaLightbox({ visible, images = [], initialIndex = 0, onClose }) {
  const translateY = useRef(new Animated.Value(0)).current;
  const backdropOpacity = useRef(new Animated.Value(1)).current;
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const flatListRef = useRef(null);

  // Reset animation and scroll position each time lightbox opens
  useEffect(() => {
    if (visible) {
      translateY.setValue(0);
      backdropOpacity.setValue(1);
      setCurrentIndex(initialIndex);
      // Scroll to the correct initial image after mount
      if (initialIndex > 0) {
        requestAnimationFrame(() => {
          flatListRef.current?.scrollToIndex({ index: initialIndex, animated: false });
        });
      }
    }
  }, [visible, initialIndex]);

  const panResponder = useRef(
    PanResponder.create({
      // Only claim vertical gestures; let FlatList handle horizontal ones
      onStartShouldSetPanResponder: () => false,
      onMoveShouldSetPanResponder: (_, g) =>
        Math.abs(g.dy) > Math.abs(g.dx) * 1.5 && Math.abs(g.dy) > 10,
      onPanResponderMove: (_, g) => {
        translateY.setValue(g.dy);
        const progress = Math.min(Math.abs(g.dy) / 250, 1);
        backdropOpacity.setValue(1 - progress * 0.75);
      },
      onPanResponderRelease: (_, g) => {
        if (Math.abs(g.dy) > 100 || Math.abs(g.vy) > 1.2) {
          // Dismiss
          Animated.parallel([
            Animated.timing(translateY, {
              toValue: g.dy > 0 ? height : -height,
              duration: 200,
              useNativeDriver: true,
            }),
            Animated.timing(backdropOpacity, {
              toValue: 0,
              duration: 200,
              useNativeDriver: true,
            }),
          ]).start(onClose);
        } else {
          // Snap back
          Animated.parallel([
            Animated.spring(translateY, { toValue: 0, useNativeDriver: true }),
            Animated.spring(backdropOpacity, { toValue: 1, useNativeDriver: true }),
          ]).start();
        }
      },
    })
  ).current;

  const handleScroll = (e) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  return (
    <Modal visible={visible} transparent statusBarTranslucent animationType="fade">
      <Animated.View style={[styles.backdrop, { opacity: backdropOpacity }]}>

        {/* CAROUSEL with vertical-swipe-to-dismiss wrapper */}
        <Animated.View
          style={[styles.carouselContainer, { transform: [{ translateY }] }]}
          {...panResponder.panHandlers}
        >
          <FlatList
            ref={flatListRef}
            data={images}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, i) => String(i)}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            getItemLayout={(_, i) => ({ length: width, offset: width * i, index: i })}
            onScrollToIndexFailed={(info) => {
              flatListRef.current?.scrollToOffset({
                offset: info.averageItemLength * info.index,
                animated: false,
              });
            }}
            renderItem={({ item }) => (
              <View style={styles.imageSlide}>
                <Image source={{ uri: item }} style={styles.fullImage} resizeMode="contain" />
              </View>
            )}
          />
        </Animated.View>

        {/* DOT INDICATORS */}
        {images.length > 1 && (
          <View style={styles.dots} pointerEvents="none">
            {images.map((_, i) => (
              <View key={i} style={[styles.dot, i === currentIndex && styles.dotActive]} />
            ))}
          </View>
        )}

        {/* CLOSE BUTTON */}
        <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
          <Text style={styles.closeText}>✕</Text>
        </TouchableOpacity>

        {/* DISMISS HINT */}
        <Text style={styles.hint} pointerEvents="none">
          Swipe up or down to close
        </Text>

      </Animated.View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
  },

  carouselContainer: {
    width,
    height,
    justifyContent: "center",
  },

  imageSlide: {
    width,
    height,
    justifyContent: "center",
    alignItems: "center",
  },

  fullImage: {
    width,
    height,
  },

  dots: {
    position: "absolute",
    bottom: 52,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    gap: 6,
  },

  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "rgba(255,255,255,0.45)",
  },

  dotActive: {
    backgroundColor: "white",
    transform: [{ scale: 1.2 }],
  },

  closeBtn: {
    position: "absolute",
    top: 52,
    right: 20,
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "rgba(0,0,0,0.55)",
    justifyContent: "center",
    alignItems: "center",
  },

  closeText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },

  hint: {
    position: "absolute",
    bottom: 24,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "rgba(255,255,255,0.35)",
    fontSize: 12,
  },
});
