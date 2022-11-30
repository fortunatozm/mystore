const INITIAL_STATE = { products: [] };

const getProducts = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GETPRODUCTS':
      
      return { ...state, products: action.payload };
  
    default:
      return state;
  }
};

export default getProducts;