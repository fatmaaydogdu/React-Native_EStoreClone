import React from 'react';
import {View, Text, Flatlist, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {FavoriteItem} from '../components/FavoriteItem';

function Favorites() {
  const favoriteList = useSelector((state) => state.favorites);
  console.log(favoriteList);
 
  

  // const renderFavorites = ({item}) => <FavoriteItem item={item} />;

  return (
    <ScrollView>
      {favoriteList.map((e, i) => <FavoriteItem key={i} item={e} /> )}
    </ScrollView>
  );
}


export {Favorites};


  /* <Flatlist
  keyExtractor={(_, i) => i.toString()}
  data={favoriteList}
  renderItem={renderFavorites}
/> */

