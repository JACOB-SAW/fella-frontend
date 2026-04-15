// components/profile/ProfileHeader.jsx
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ProfilePills from "../../components/profile/ProfilePills";

export default function ProfileHeader({ activeTab, setActiveTab }) {
  return (
    <View style={styles.headerWrapper}>

      {/* TOP ROW */}
      <View style={styles.topRow}>
        <TouchableOpacity>
          <Text style={styles.sideIcon}>⚙️</Text>
        </TouchableOpacity>

        <View style={styles.centerBlock}>
          <Image
  source={{ uri: "https://picsum.photos/200" }}
  style={styles.pfp}
/>
        </View>

        <TouchableOpacity>
          <Text style={styles.sideIcon}>⋯</Text>
        </TouchableOpacity>
      </View>

      {/* USERNAME */}
      <Text style={styles.username}>jacob</Text>

      {/* BIO */}
      <Text style={styles.bio} numberOfLines={2}>
        This is your profile bio. Add something short and clean here.
      </Text>

      {/* PILLS — this is the correct location */}
      <ProfilePills mode={activeTab} setMode={setActiveTab} />

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
    color: "black",
    opacity: 0.7,
    paddingHorizontal: 20,
    lineHeight: 15,
  },
});