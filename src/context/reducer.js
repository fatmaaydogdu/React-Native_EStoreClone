function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      const {item} = action.payload;
      return {...state, basket: [...state.basket, item]};

    // case 'ADD_TO_FAVORITE':
    //     const

    default:
      return state;
  }
}

export default reducer;
