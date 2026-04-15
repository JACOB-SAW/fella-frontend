// app/components/restaurants/RestFeed/RestGrid.jsx
import { useState } from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import MediaLightbox from '../../MediaLightbox';
import { exampleMedia } from './exampleData';

export default function GridMode() {
  const [lightbox, setLightbox] = useState({ visible: false, images: [], index: 0 });

  const openLightbox = (uri) => setLightbox({ visible: true, images: [uri], index: 0 });
  const closeLightbox = () => setLightbox((prev) => ({ ...prev, visible: false }));

  return (
    <>
      <FlatList
        data={exampleMedia}
        numColumns={3}
        key={'grid'}
        contentContainerStyle={{ paddingTop: 12 }}
        columnWrapperStyle={{ gap: 4 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ width: '32%' }} onPress={() => openLightbox(item.uri)}>
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
      <MediaLightbox
        visible={lightbox.visible}
        images={lightbox.images}
        initialIndex={lightbox.index}
        onClose={closeLightbox}
      />
    </>
  );
}