// app/tabs/restPage.jsx

import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { ScrollView } from "react-native";

import RestaurantFeed from "../components/restaurants/RestaurantFeed";
import RestaurantHeader from "../components/restaurants/RestaurantHeader";

export default function RestaurantPage() {
  const [activeTab, setActiveTab] = useState("grid");

  // Read params passed from RestaurantCard
  const { id, name, subtitle, image } = useLocalSearchParams();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <RestaurantHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        name={name}
        subtitle={subtitle}
        image={image}
      />

      <RestaurantFeed
        mode={activeTab}
        restaurantId={id}
      />
    </ScrollView>
  );
}