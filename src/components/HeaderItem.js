import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function HeaderItem({header}) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Icon
          name="boomerang"
          color={'#f57f17'}
          size={30}
          style={styles.logo}
        />
      </View>
      <Text style={styles.header}>{header}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#f57f17',
  },
  header: {
    flex: 6,
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingRight: 60,
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
  },
});

export default HeaderItem;
