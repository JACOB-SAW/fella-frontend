// app/components/restaurants/RestFeed/RestGrid.jsx
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { exampleMedia } from './exampleData';

export default function GridMode() {
  return (
    <FlatList
      data={exampleMedia}
      numColumns={3}
      key={'grid'}
      contentContainerStyle={{ paddingTop: 12 }}
      columnWrapperStyle={{ gap: 4 }}
      renderItem={({ item }) => (
        <TouchableOpacity style={{ width: '32%' }}>
          <Image
            source={{ uri: item.uri }}
            style={{
              width: '100%',
              aspectRatio: 1,
              borderRadius: 6,
            }}
          />
        </TouchableOpacity>
      )}
      ItemSeparatorComponent={() => <View style={{ height: 4 }} />}
    />
  );
}