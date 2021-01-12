import React from 'react';
import {View, Text} from 'react-native';

function FavoritesItem(item) {
  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  );
}
export default FavoritesItem;
