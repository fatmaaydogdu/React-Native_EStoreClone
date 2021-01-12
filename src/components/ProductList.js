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

export default function ProductList({data, onClick}) {
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.container}>
        <Icon name="heart" color={'red'} size={20} />
        <Image
          style={styles.image}
          source={{uri: data.image}}
          resizeMode={'center'}
        />
        <View style={styles.textContainer}>
          <Icon name="shopping" color={'red'} size={20} />
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.price}>{data.price} ₺</Text>
        </View>
      </View>
    </TouchableOpacity>
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
    justifyContent: 'space-between',
  },
  title: {
    flex: 2,
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'monospace',
    textAlign: 'left',
    color: '#333',
  },
  price: {
    flex: 1,
    textAlign: 'right',
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
  },
});
