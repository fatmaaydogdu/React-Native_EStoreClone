import React from 'react';
import {View, Text,Flatlist} from 'react-native';
import {useSelector} from 'react-redux';

export function Favorites() {

  const favoriteList = useSelector((state) => state.favorites);
  return (
    <View>
      <Flatlist 
      keyExtractor={(_,i) => i.toString()}
      data={favoriteList}
      renderItem={({item}) => <Text>{item.title}</Text>}
      />

      
    </View>
  );
}
