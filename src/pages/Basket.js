import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {BasketItem} from '../components/BasketItem';
import HeaderItem from '../components/HeaderItem';
function Basket() {
  const dispatch = useDispatch();
  const basketList = useSelector((state) => state.basket);
  console.log(basketList);

  const renderBasket = ({item}) => (
    <BasketItem
      item={item}
      removeBasket={() =>
        dispatch({
          type: 'REMOVE_FROM_BASKET',
          payload: {remove_basket: item},
        })
      }
    />
  );

  return (
    <View>
      <FlatList
        ListHeaderComponent={<HeaderItem header="SEPET" />}
        keyExtractor={(_, i) => i.toString()}
        data={basketList}
        renderItem={renderBasket}
      />
    </View>
  );
}

export {Basket};
