import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function FavoriteItem({item}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    elevation: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  price: {},
  description: {},
});

export {FavoriteItem};
