// app/tabs/home.jsx
import { useState } from "react";
import { ScrollView } from "react-native";

import HomeFeed from "../components/home/HomeFeed";
import HomeHeader from "../components/home/HomeHeader";

export default function HomeScreen() {
  const [mode, setMode] = useState("FYP");

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <HomeHeader mode={mode} setMode={setMode} />
      <HomeFeed mode={mode} setMode={setMode} />
    </ScrollView>
  );
}