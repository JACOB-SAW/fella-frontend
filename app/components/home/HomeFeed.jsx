import { View } from "react-native";
import FYPMode from "./feedModes/fyp";
import LikedGrid from "./feedModes/LikedGrid";
import SavedGrid from "./feedModes/savedGrid";

export default function HomeFeed({ mode }) {
  return (
    <View key={mode}>
      {mode === "LIKED" && <LikedGrid />}
      {mode === "SAVED" && <SavedGrid />}
      {mode === "FYP" && <FYPMode />}
    </View>
  );
}