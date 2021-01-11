import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Basket,Favorites,Product} from './pages';

const Tab = createBottomTabNavigator();
function Router() {

  return (

  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Basket Screen" component={Basket}/>
      <Tab.Screen name="Favorites Screen" component={Favorites}/>
      <Tab.Screen name="Product Screen" component={Product}/>
    </Tab.Navigator>
  </NavigationContainer>
  );
}


export default Router;
