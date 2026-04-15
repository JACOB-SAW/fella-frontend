// app/tabs/restList.jsx

import { ScrollView } from "react-native";
import RestaurantCard from "../components/restaurants/card";

export default function RestaurantListScreen() {
  // Later this will come from your backend
  const restaurants = [
    {
      id: 1,
      name: "Taco Palace",
      subtitle: "Mexican • 0.3 mi",
      image: "https://picsum.photos/400?random=1",
    },
    {
      id: 2,
      name: "Green Bowl",
      subtitle: "Healthy • 0.5 mi",
      image: "https://picsum.photos/400?random=2",
    },
    {
      id: 3,
      name: "Campus Pizza",
      subtitle: "Italian • 0.2 mi",
      image: "https://picsum.photos/400?random=3",
    },
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {restaurants.map((item) => (
        <RestaurantCard key={item.id} item={item} />
      ))}
    </ScrollView>
  );
}