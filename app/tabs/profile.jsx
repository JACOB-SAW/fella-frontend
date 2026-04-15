// app/tabs/profile.jsx
import { useState } from "react";
import { ScrollView } from "react-native";
import ProfileFeed from "../components/profile/ProfileFeed";
import ProfileHeader from "../components/profile/ProfileHeader";

export default function ProfileScreen() {
  const [activeTab, setActiveTab] = useState("hybrid");

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ProfileHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <ProfileFeed mode={activeTab} />
    </ScrollView>
  );
}