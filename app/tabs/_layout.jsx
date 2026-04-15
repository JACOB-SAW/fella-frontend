// app/tabs/_layout.jsx
import { Tabs } from "expo-router";
import CustomTabBar from "./CustomTabBar";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      {/* Main tabs */}
      <Tabs.Screen name="home" />
      <Tabs.Screen name="profile" />

      {/* Hidden screens */}
      <Tabs.Screen name="restList" options={{ href: null }} />
      <Tabs.Screen name="restPage" options={{ href: null }} />
    </Tabs>
  );
}