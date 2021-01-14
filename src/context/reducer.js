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
      return {...state, favorites: [...state.favorites, favo]};

    default:
      return state;
  }
}

export default reducer;
