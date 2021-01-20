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

  async function favItem() {
    setLoading(true);
    let fav = await AsyncStorage.getItem('@FAVPRODUCTS');
    let parsedFav = JSON.parse(fav);
    setLoading(false);
    setFavorites(parsedFav);
  }

  async function removeFav(id) {
    let fav = await AsyncStorage.getItem('@FAVPRODUCTS');
    if (!fav) {
      fav = [];
    } else {
      fav = JSON.parse(fav);
    }
    let filteredProducts = fav.filter((item) => item.id !== id);
    fav = JSON.stringify(filteredProducts);
    await AsyncStorage.setItem('@FAVPRODUCTS', fav);
    favItem();
    console.log(fav);
  }

  useEffect(() => {
    favItem();
  }, []);
  //console.log(favorites);

  // if (loading) {
  //   return <ActivityIndicator size="large" />;
  // }

  const renderFavorites = ({item}) => (
    <FavoriteItem
      item={item}
      removeFav={removeFav}
      //removeFav={() =>
      //   dispatch({
      //     type: 'REMOVE_FROM_FAVORITE',
      //     payload: {remove_favorite: e},
      //   })
      // }
    />
  );
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
        ListHeaderComponent={<HeaderItem header="FAVORİLER" />}
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
