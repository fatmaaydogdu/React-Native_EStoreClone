import React from 'react';
import {View, Text, Flatlist, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {FavoriteItem} from '../components/FavoriteItem';

function Favorites() {
  const dispatch = useDispatch();
  const favoriteList = useSelector((state) => state.favorites);
  console.log(favoriteList);

  // const renderFavorites = ({item}) => (
  //   <FavoriteItem
  //     item={item}
  //     removeFav={() =>
  //       dispatch({
  //         type: 'REMOVE_FROM_FAVORITE',
  //         payload: {remove_favorite: item},
  //       })
  //     }
  //   />
  // );

  return (
    <ScrollView>
      {favoriteList.map((e, i) => (
        <FavoriteItem
          key={i}
          item={e}
          removeFav={() =>
            dispatch({
              type: 'REMOVE_FROM_FAVORITE',
              payload: {remove_favorite: e},
            })
          }
        />
      ))}
    </ScrollView>
  );
}

export {Favorites};

// <View>
//   <Flatlist
//     keyExtractor={(_, i) => i.toString()}
//     data={favoriteList}
//     renderItem={renderFavorites}
//   />
// </View>
