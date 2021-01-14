import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {BasketItem} from '../components/BasketItem';

function Basket() {
  const basketList = useSelector((state) => state.basket);
  console.log(basketList);

  const renderBasket = ({item}) => <BasketItem item={item} />;

  return (
    <View>
      <FlatList
        keyExtractor={(_, i) => i.toString()}
        data={basketList}
        renderItem={renderBasket}
      />
    </View>
  );
}

export {Basket};
