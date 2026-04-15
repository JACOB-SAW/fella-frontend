import { useState } from "react";
import { ScrollView } from "react-native";
import OtherFeed from "../components/other/OtherFeed";
import OtherHeader from "../components/other/OtherHeader";

export default function OtherProfileScreen() {
  const [activeTab, setActiveTab] = useState("hybrid");

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <OtherHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <OtherFeed mode={activeTab} />
    </ScrollView>
  );
}