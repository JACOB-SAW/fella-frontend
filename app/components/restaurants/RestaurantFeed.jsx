// app/components/restaurants/RestaurantFeed.jsx

import RestGrid from "./RestFeed/RestGrid";
import RestReview from "./RestFeed/RestReview";

export default function RestaurantFeed({ mode, restaurantId }) {
  // In the future, you'll fetch posts for this restaurant:
  // const posts = fetchPostsForRestaurant(restaurantId);

  if (mode === "text") {
    return <RestReview restaurantId={restaurantId} />;
  }

  // Default to grid mode
  return <RestGrid restaurantId={restaurantId} />;
}