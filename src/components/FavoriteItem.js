import React from 'react';
import {View, Text} from 'react-native';

function FavoriteItem({item}) {
  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  );
}

export {FavoriteItem};
