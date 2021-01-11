import React, {useState,useEffect} from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';
import ProductList from '../components/ProductList';


const api_url = 'https://fakestoreapi.com/products';


export function Products({navigation}) {

const [productList, setproductList] = useState({});

    function fetchdata(){
        console.log();
        axios.get(api_url).then((response) => setproductList(response.data));
    }
    

    useEffect(() => {
    fetchdata();
    }, [])

    const renderProduct = ({item}) => {
        return <ProductList data={item} onClick={() => navigation.navigate('Basket Screen')}/>
    }


    return (
        <View>
            <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={productList}
          renderItem={renderProduct}
        />
        </View>
    )
}

