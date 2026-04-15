export const exampleMedia = Array.from({ length: 20 }).map((_, i) => ({
  id: String(i + 1),
  uri: `https://picsum.photos/400?random=${i + 1}`,
}));

export const exampleTextPosts = [
  { id: 't1', text: 'Review: The campus burrito was surprisingly elite.' },
  { id: 't2', text: 'Late night ramen hits different when it’s cold outside.' },
  { id: 't3', text: 'The new dining hall cookies are actually insane.' },
  { id: 't4', text: 'Food truck Friday is carrying my GPA.' },
  { id: 't5', text: 'I swear the fries taste better after 11pm.' },
  { id: 't6', text: 'Cafeteria pizza: 6/10 but nostalgic.' },
  { id: 't7', text: 'Breakfast tacos are the only reason I wake up.' },
  { id: 't8', text: 'The smoothie bar is a scam but I keep going.' },
  { id: 't9', text: 'Campus Chick-fil-A line is a social experiment.' },
  { id: 't10', text: 'I need a loyalty card for the sushi station.' },
  { id: 't11', text: 'Why does the salad bar go so hard??' },
  { id: 't12', text: 'Coffee machine broke again. Pain.' },
];