import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HomePills from "./HomePills";

export default function HomeHeader({ mode, setMode }) {
  return (
    <View style={styles.headerWrapper}>

      {/* TOP ROW */}
      <View style={styles.topRow}>
        <TouchableOpacity onPress={() => setMode("LIKED")}>
          <Text style={styles.sideIcon}>🔥</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.centerBlock}
          onPress={() => router.push("/tabs/restList")}
        >
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>🔺</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.sideIcon}>🔍</Text>
        </TouchableOpacity>
      </View>

      {/* TITLE */}
      <Text style={styles.dynamicTitle}>Campus Pick</Text>

      {/* ADMIN MESSAGE */}
      <Text style={styles.adminMessage} numberOfLines={2}>
        Admin message goes here. This text can be updated by admins only.
      </Text>

      {/* PILLS */}
      <HomePills mode={mode} setMode={setMode} />

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

  logoContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    fontSize: 32,
  },

  dynamicTitle: {
    marginTop: 0,
    fontSize: 17,
    fontWeight: "600",
    textAlign: "center",
  },

  adminMessage: {
    marginTop: 0,
    fontSize: 13,
    textAlign: "center",
    color: "black",
    opacity: 0.7,
    paddingHorizontal: 20,
    lineHeight: 15,
  },
});