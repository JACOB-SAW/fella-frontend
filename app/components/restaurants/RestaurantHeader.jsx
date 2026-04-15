// app/components/restaurants/RestaurantHeader.jsx
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RestaurantPills from "./RestaurantPills";

export default function RestaurantHeader({
  activeTab,
  setActiveTab,
  name,
  subtitle,
  image,
}) {
  const router = useRouter();

  return (
    <View style={styles.headerWrapper}>

      {/* TOP ROW — identical structure to Profile */}
      <View style={styles.topRow}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.sideIcon}>←</Text>
        </TouchableOpacity>

        <View style={styles.centerBlock}>
          <Image
            source={{ uri: image }}
            style={styles.avatar}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.sideIcon}>⋯</Text>
        </TouchableOpacity>
      </View>

      {/* NAME */}
      <Text style={styles.title}>{name}</Text>

      {/* BIO / SUBTITLE */}
      <Text style={styles.subtitle} numberOfLines={2}>
        {subtitle || "Campus dining • Reviews • Photos"}
      </Text>

      {/* PILLS */}
      <RestaurantPills mode={activeTab} setMode={setActiveTab} />

    </View>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    paddingTop: 0,
    paddingBottom: 2,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sideIcon: {
    fontSize: 32,
  },

  centerBlock: {
    marginTop: -6,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  title: {
    marginTop: 0,
    fontSize: 17,
    fontWeight: "600",
    textAlign: "center",
  },

  subtitle: {
    marginTop: 0,
    fontSize: 13,
    textAlign: "center",
    color: "black",
    opacity: 0.7,
    paddingHorizontal: 20,
    lineHeight: 15,
  },
});