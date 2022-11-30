const INITIAL_STATE = { cartProducts: [] };

const getCartProducts = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INSERTPRODUCT':
      return { ...state, cartProducts: [...state.cartProducts, action.payload] };
    default:
      return state;
  }
};

export default getCartProducts;