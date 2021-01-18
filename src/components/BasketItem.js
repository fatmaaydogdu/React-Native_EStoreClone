import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';


function BasketItem({item, removeBasket}) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{flex:1}}>
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
      <Text style={styles.description}>{item.description}</Text>

        <TouchableOpacity onPress={removeBasket} style={{alignItems:'flex-end'}} >
      <Icon name="delete" color={'orange'} size={30} />
      </TouchableOpacity>


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
          <Button title="kapat" onPress={toggleModal} />
        </View>
      </Modal>
      
         </View>
         <View style={button_style.container}>
           <TouchableOpacity  onPress={toggleModal}> 
        <Button style={button_style.button}
        title='Sipariş geçmişi' onPress={toggleModal}/>
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
});

const button_style = StyleSheet.create({
  container:{
    flex:1,
  },
})


export {BasketItem};
