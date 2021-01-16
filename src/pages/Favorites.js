import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Flatlist,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {FavoriteItem} from '../components/FavoriteItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  // const dispatch = useDispatch();
  // const favoriteList = useSelector((state) => state.favorites);
  // console.log(favoriteList);

  const renderFavorites = ({item}) => (
    <FavoriteItem
      item={item}
      // removeFav={() =>
      //   dispatch({
      //     type: 'REMOVE_FROM_FAVORITE',
      //     payload: {remove_favorite: item},
      //   })
      // }
    />
  );

  async function favItem() {
    setLoading(true);
    const fav = await AsyncStorage.getItem('@FAVPRODUCTS');
    const parsedFav = JSON.parse(fav);
    setLoading(false);
    setFavorites(parsedFav);
  }

  useEffect(() => {
    favItem();
  }, []);
  console.log(favorites);

  // if (loading) {
  //   return <ActivityIndicator size="large" />;
  // }

  return (
    <ScrollView>
      {favorites.map((e, i) => (
        <FavoriteItem
          key={i}
          item={e}
          // removeFav={() =>
          //   dispatch({
          //     type: 'REMOVE_FROM_FAVORITE',
          //     payload: {remove_favorite: e},
          //   })
          // }
        />
      ))}
    </ScrollView>
  );
}

export {Favorites};

{
}

// <View>
//   <Flatlist
//     refreshControl={
//       <RefreshControl refreshing={loading} onRefresh={favItem} />
//     }
//     keyExtractor={(_, i) => i.toString()}
//     data={favorites}
//     renderItem={renderFavorites}
//   />
// </View>
