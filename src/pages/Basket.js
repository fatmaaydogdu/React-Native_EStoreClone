import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {BasketItem} from '../components/BasketItem';
import {BoughtItem} from '../components/BoughtItem';
import HeaderItem from '../components/HeaderItem';
import Empty from '../components/Empty';
import Modal from 'react-native-modal';

function Basket() {
  const [isModalVisible, setModalVisible] = useState(false);


  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const dispatch = useDispatch();
  const basketList = useSelector((state) => state.basket);
  const bought = useSelector((state) => state.on_the_product);
  console.log(basketList);

  const renderBasket = ({item}) => (
    <BasketItem
      item={item}
      removeBasket={() =>
        dispatch({
          type: 'REMOVE_FROM_BASKET',
          payload: {remove_basket: item},
        })
      }
    />
  );

  const renderBought = ({item}) => (
    <BoughtItem
      item={item}
    />
  );

  return (
    <View style={{flex: 1}}>
      <FlatList
        ListEmptyComponent={<Empty />}
        ListHeaderComponent={<HeaderItem header="SEPET" />}
        keyExtractor={(_, i) => i.toString()}
        data={basketList}
        renderItem={renderBasket}
      />
      <View>
        <TouchableOpacity style={modalStyle.btn} onPress={toggleModal}>
          <Text style={modalStyle.btnTxt}>Sipariş geçmişi</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={modalStyle.button} onPress={() => dispatch({type: 'BUY_PRODUCT', payload: (basketList)})}>
          <Text style={modalStyle.buttonTxt}>Satın al</Text>
        </TouchableOpacity>
      </View>

      <Modal style={modalStyle.container} isVisible={isModalVisible}>
        <View style={{flex: 1}}>
         <FlatList 
         data={bought}
         keyExtractor={(_,i) => i.toString()}
         renderItem={renderBought}
         
         />
          <TouchableOpacity style={modalStyle.btn} onPress={toggleModal}>
            <Text style={modalStyle.btnTxt}>KAPAT</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const modalStyle = StyleSheet.create({
  btn: {
    backgroundColor: '#f57f17',
    padding: 5,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
    width: Dimensions.get('window').width / 3,

    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  btnTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    padding: 5,
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 5,
    height: Dimensions.get('window').height / 2,
  },
  // image: {
  //   width: Dimensions.get('window').width * 0.9,
  //   height: Dimensions.get('window').height / 3,
  // },
  // textContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-evenly',
  //   alignItems: 'center',
  // },
  // title: {
  //   flex: 2,
  //   fontWeight: 'bold',
  //   fontSize: 20,
  //   textAlign: 'left',
  //   color: '#333',
  // },
  // price: {
  //   flex: 1,
  //   textAlign: 'right',
  //   fontFamily: 'monospace',
  //   fontSize: 20,
  //   color: 'red',
  //   fontWeight: 'bold',
  // },

  button:{
    backgroundColor: '#f57f17',
    padding: 5,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
    width: Dimensions.get('window').width / 3,

    position: 'absolute',
    left: 0,
    bottom: 0,
  },

  buttonTxt:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    padding: 5,
  }
});

export {Basket};
