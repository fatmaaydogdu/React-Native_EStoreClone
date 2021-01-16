function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      const {item} = action.payload;
      return {...state, basket: [...state.basket, item]};

    // case 'SET_PRODUCTS':
    //   const {products} = action.payload;
    //   return {...state, products};

    case 'ADD_TO_FAVORITE':
      const {favo} = action.payload;
      const index = state.favorites.findIndex((fav) => fav.id == favo.id);
      return index === -1
        ? {...state, favorites: [...state.favorites, favo]}
        : state;

    case 'REMOVE_FROM_FAVORITE':
      const {remove_favorite} = action.payload;
      const remove = state.favorites.findIndex(
        (e) => e.id == remove_favorite.id,
      );
      return remove > -1 ? state.favorites.splice(remove_favorite, 1) : state;

    default:
      return state;
  }
}

export default reducer;
