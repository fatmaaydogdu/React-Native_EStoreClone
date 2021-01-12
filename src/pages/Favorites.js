import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {FavoritesItem} from '../components/FavoritesItem';

function Favorites(props) {
  const favlist = useSelector((state) => state.favorites);

  const renderFavorites = ({item}) => <FavoritesItem item={item} />;

  return (
    <View>
      <FlatList
        keyExtractor={(_, i) => i.toString()}
        data={favlist}
        renderItem={renderFavorites}
      />
    </View>
  );
}

export {Favorites};
