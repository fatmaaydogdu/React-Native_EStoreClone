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
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.price}>{data.price} ₺</Text>
        </View>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="shopping" color={'#f57f17'} size={50} />
        </TouchableOpacity>
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
    fontSize: 30,
    color: 'red',
    fontWeight: 'bold',
  },
  iconContainer: {
    alignItems: 'center',
  },
});
