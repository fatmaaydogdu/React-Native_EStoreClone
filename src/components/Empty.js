import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Empty() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Burada henüz ürün bulunmamaktadır</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    margin: 5,
    padding: 5,
    borderRadius: 5,
  },
  text: {
    alignSelf: 'center',
    color: '#999',
    fontSize: 20,
  },
});

export default Empty;
