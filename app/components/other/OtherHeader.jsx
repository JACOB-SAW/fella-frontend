import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import OtherPills from "./OtherPills";

export default function OtherHeader({ activeTab, setActiveTab }) {
  const router = useRouter();

  return (
    <View style={styles.headerWrapper}>

      {/* TOP ROW */}
      <View style={styles.topRow}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.sideIcon}>←</Text>
        </TouchableOpacity>

        <View style={styles.centerBlock}>
          <Image
            source={{ uri: "https://picsum.photos/200" }}
            style={styles.pfp}
          />
        </View>

        <View style={{ width: 32 }} /> 
      </View>

      <Text style={styles.username}>other_user</Text>

      <Text style={styles.bio} numberOfLines={2}>
        This is their bio. It will come from backend later.
      </Text>

      <OtherPills mode={activeTab} setMode={setActiveTab} />

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
  pfp: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  username: {
    marginTop: 0,
    fontSize: 17,
    fontWeight: "600",
    textAlign: "center",
  },
  bio: {
    marginTop: 0,
    fontSize: 13,
    textAlign: "center",
    opacity: 0.7,
    paddingHorizontal: 20,
    lineHeight: 15,
  },
});