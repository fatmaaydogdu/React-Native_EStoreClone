import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Basket, Favorites, Products} from './pages';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Product Screen"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color}) => generateIcon(focused, color, route),
          tabBarLabel: () => null,
        })}
        tabBarOptions={{
          activeTintColor: '#f57f17',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Basket Screen" component={Basket} />
        <Tab.Screen name="Favorites Screen" component={Favorites} />
        <Tab.Screen name="Product Screen" component={Products} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Router;

function generateIcon(focused, color, route) {
  let iconName;

  switch (route.name) {
    case 'Basket Screen':
      iconName = focused ? 'shopping' : 'shopping-outline';
      break;
    case 'Favorites Screen':
      iconName = focused ? 'heart' : 'heart-outline';
      break;
    case 'Product Screen':
      iconName = focused ? 'basket' : 'basket-outline';
      break;

    default:
      break;
  }

  // You can return any component that you like here!
  return <Icon name={iconName} color={color} size={30} />;
}
