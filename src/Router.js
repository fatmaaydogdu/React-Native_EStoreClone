import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Router() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TEAM BONANZA</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default Router;
