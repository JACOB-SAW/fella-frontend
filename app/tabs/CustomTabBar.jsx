// app/tabs/CustomTabBar.jsx

import { BlurView } from "expo-blur"; // add this
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CustomTabBar({ state }) {
  const router = useRouter();

  const tabs = [
    { name: "home", icon: "🏠" },
    { name: "profile", icon: "👤" },
  ];

  return (
    <View style={styles.floatingContainer}>
      <BlurView intensity={40} tint="light" style={styles.wrapper}>
        {tabs.map((tab, index) => {
          const isActive = state.index === index;

          return (
            <TouchableOpacity
              key={tab.name}
              onPress={() => router.push(`/tabs/${tab.name}`)}
              style={styles.tab}
            >
              <Text style={[styles.icon, isActive && styles.activeIcon]}>
                {tab.icon}
              </Text>
            </TouchableOpacity>
          );
        })}
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  floatingContainer: {
  position: "absolute",
  bottom: 18,
  left: 0,
  right: 0,
  alignItems: "center",
},

wrapper: {
  flexDirection: "row",
  justifyContent: "space-between",   // spreads icons apart
  alignItems: "center",

  width: "78%",                      // slightly wide pill
  paddingVertical: 12,
  paddingHorizontal: 38,             // gives room for spacing

  borderRadius: 32,
  backgroundColor: "rgba(255,255,255,0.55)",
  overflow: "hidden",

  shadowColor: "#000",
  shadowOpacity: 0.12,
  shadowRadius: 12,
  shadowOffset: { width: 0, height: 4 },
},

tab: {
  paddingHorizontal: 14,             // was 6 → now wider spacing
},

icon: {
  fontSize: 26,
  opacity: 0.45,
},

activeIcon: {
  opacity: 1,
},
});