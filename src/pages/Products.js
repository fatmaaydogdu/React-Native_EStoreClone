import React, {useState,useEffect} from 'react';
import { View, Text } from 'react-native';
import {axios} from 'axios';


const api_url = 'https://fakestoreapi.com/products';
const [productList, setproductList] = useState([]);



export  function Products() {


    function fetchdata(){
        console.log();
        axios.get(api_url).then((response) => setproductList(response.data))
    }

    useEffect(() => {
    fetchdata()
    }, [])

    return (
        <View>
            <Text>{productList.title}</Text>
        </View>
    )
}

