import React from 'react';
import {View, Text, Flatlist} from 'react-native';
import {useSelector} from 'react-redux';
import {FavoriteItem} from '../components/FavoriteItem';

function Favorites() {
  const favoriteList = useSelector((state) => state.favorites);
  console.log(favoriteList);

  // const renderFavorites = ({item}) => <FavoriteItem nesne={item} />;

  return (
    <View style={{flex: 1}}>
      <Text>{favoriteList.title}</Text>
      {/* <Flatlist
        keyExtractor={(_, i) => i.toString()}
        data={favoriteList}
        renderItem={renderFavorites}
      /> */}
    </View>
  );
}

export {Favorites};
