import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

function BasketItem({item, removeBasket}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{uri: item.image}}
          resizeMode={'center'}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>{item.price} ₺</Text>
        </View>
      </View>
      <TouchableOpacity onPress={removeBasket}>
        <Text>SİL</Text>
      </TouchableOpacity>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    padding: 5,
    elevation: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleContainer: {
    alignContent: 'flex-end',
  },
  image: {
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').height * 0.2,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  price: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'right',
    fontSize: 15,
  },
  description: {
    textAlign: 'justify',
    padding: 5,
  },
});

export {BasketItem};
