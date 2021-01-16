import React from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import {useFetch} from '../hooks/useFetch';
import ProductItem from '../components/ProductItem';

const API_URL = 'https://fakestoreapi.com/products';

function Products(props) {
  const dispatch = useDispatch();
  const {data} = useFetch(API_URL);

  // if (data) {
  //   dispatch({type: 'SET_PRODUCTS', payload: {products: data}});
  // }

  const renderProduct = ({item}) => {
    return (
      <ProductItem
        item={item}
        onBasket={() => dispatch({type: 'ADD_TO_BASKET', payload: {item}})}
      />
    );
  };

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={data}
        renderItem={renderProduct}
      />
    </View>
  );
}

export {Products};
