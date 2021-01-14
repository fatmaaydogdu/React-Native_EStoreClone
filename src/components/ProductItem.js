import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function ProductItem({item, onBasket, onFav}) {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={onFav}>
          <Icon name="heart" color={'red'} size={25} />
        </TouchableOpacity>
        <Image
          style={styles.image}
          source={{uri: item.image}}
          resizeMode={'center'}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>{item.price} ₺</Text>
        </View>
        <TouchableOpacity onPress={onBasket} style={styles.iconContainer}>
          <Icon name="shopping" color={'#f57f17'} size={35} />
          <Text style={styles.iconText}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
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
  image: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height / 3,
  },

  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  title: {
    flex: 2,
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'left',
    color: '#333',
  },
  price: {
    flex: 1,
    textAlign: 'right',
    fontFamily: 'monospace',
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    color: '#f57f17',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProductItem;
