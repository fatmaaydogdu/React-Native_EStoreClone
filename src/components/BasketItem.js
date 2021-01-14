import React from 'react';
import {View, Text} from 'react-native';

function BasketItem({item}) {
  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  );
}

export {BasketItem};
