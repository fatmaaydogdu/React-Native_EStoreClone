import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

function Router() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.text}>TEAM BONANZA</Text>
        <Text>Mert Kaan</Text>
        <Text>Fatma</Text>
      </View>

      <LottieView
        style={{flex: 1}}
        source={require('./assets/shopping.json')}
        autoPlay
        loop
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b3e5fc',
  },
  title: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default Router;
