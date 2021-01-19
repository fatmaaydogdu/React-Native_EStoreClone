import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {FavoriteItem} from '../components/FavoriteItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderItem from '../components/HeaderItem';

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  // const dispatch = useDispatch();
  // const favoriteList = useSelector((state) => state.favorites);
  // console.log(favoriteList);

  const renderFavorites = ({item}) => (
    <FavoriteItem
      item={item}
      removeFav={removeFav(item)}
      //removeFav={() =>
      //   dispatch({
      //     type: 'REMOVE_FROM_FAVORITE',
      //     payload: {remove_favorite: e},
      //   })
      // }
    />
  );

  async function favItem() {
    setLoading(true);
    let fav = await AsyncStorage.getItem('@FAVPRODUCTS');
    let parsedFav = JSON.parse(fav);
    setLoading(false);
    setFavorites(parsedFav);
  }

  async function removeFav(product) {
    let fav = await AsyncStorage.getItem('@FAVPRODUCTS');
    if (!fav) {
      fav = [];
    } else {
      fav = JSON.parse(fav);
    }
    let index_remove = fav.findIndex((item) => item.id === product.id);
    if (index_remove > -1) {
      fav.splice(index_remove, 1);
      fav = JSON.stringify(fav);
      await AsyncStorage.setItem('@FAVPRODUCTS', fav);
    }

    setFavorites(fav);
  }

  useEffect(() => {
    favItem();
  }, []);
  //console.log(favorites);

  // if (loading) {
  //   return <ActivityIndicator size="large" />;
  // }

  return (
    <View>
      {/* {favorites.map((e, i) => (
        <FavoriteItem
          key={i}
          item={e}
          removeFav={removeFav(e)}
          // removeFav={() =>
          //   dispatch({
          //     type: 'REMOVE_FROM_FAVORITE',
          //     payload: {remove_favorite: e},
          //   })
          // }
        />
      ))} */}
      <FlatList
        data={favorites}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderFavorites}
      />
    </View>
  );
}

export {Favorites};

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
