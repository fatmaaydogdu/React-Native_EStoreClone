import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {useFetch} from '../hooks/useFetch';
import ProductList from '../components/ProductList';

const API_URL = 'https://fakestoreapi.com/products';

export function Products(props) {
  const {id} = props.route.params;
  const dispatch = useDispatch();
  const {data} = useFetch(API_URL, {params: {id}});

  const renderProduct = ({item}) => {
    return (
      <ProductList
        item={item}
        onClick={() => params.navigation.navigate('Basket Screen')}
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
