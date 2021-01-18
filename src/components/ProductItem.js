import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';

function ProductItem({item, onBasket}) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // async function saveProduct() {
  //   const productData = `${item.title} | ${item.price} | ${item.image} `;
  //   const productsData = await AsyncStorage.getItem('@PRODUCTS');
  //   const products = JSON.parse(productsData);

  //   if (products && products.length >= 1) {
  //     products.push(productData);
  //     await AsyncStorage.setItem('@PRODUCTS', JSON.stringify(products));
  //   } else {
  //     await AsyncStorage.setItem('@PRODUCTS', JSON.stringify([productData]));
  //   }

  //   await AsyncStorage.setItem('@PRODUCTS', productData);
  //   Alert.alert(`${item.title}`, `Ürün favorilere eklendi!`);
  // }

  async function addToFavorites() {
    let products = await AsyncStorage.getItem('@FAVPRODUCTS');
    if (!products) {
      products = [];
    } else {
      products = JSON.parse(products);
    }
    if (products.some((data) => data.id === item.id)) {
      Alert.alert('Already in favorites');
    } else {
      products.push(item);
      products = JSON.stringify(products);
      await AsyncStorage.setItem('@FAVPRODUCTS', products);
      Alert.alert('Added to favorites');
    }
  }

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={addToFavorites}>
          <Icon name="heart" color={'red'} size={25} />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleModal}>
          <Image
            style={styles.image}
            source={{uri: item.image}}
            resizeMode={'center'}
          />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>{item.price} ₺</Text>
        </View>
        <TouchableOpacity onPress={onBasket} style={styles.iconContainer}>
          <Icon name="shopping" color={'#f57f17'} size={35} />
          <Text style={styles.iconText}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>

      <Modal style={modalStyle.container} isVisible={isModalVisible}>
        <View style={{flex: 1}}>
          <Image
            style={modalStyle.image}
            source={{uri: item.image}}
            resizeMode={'center'}
          />
          <View style={modalStyle.textContainer}>
            <Text style={modalStyle.title}>{item.title}</Text>
            <Text style={modalStyle.price}>{item.price} ₺</Text>
          </View>
          <Text style={modalStyle.desc}>'{item.description}'</Text>
          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
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

const modalStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 5,
    height: Dimensions.get('window').height / 2,
  },
  image: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height / 3,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  title: {
    flex: 2,
    fontWeight: 'bold',
    fontSize: 20,
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
  desc: {
    fontSize: 15,
    fontStyle: 'italic',
  },
 
});
export default ProductItem;
