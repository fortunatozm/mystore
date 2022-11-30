import { combineReducers } from 'redux';
import counterReducer from './countReduce';
import getProducts from './getProducts';
import getCartProducts from './cartProducts';
import verificaValue from './verificaValue';

const rootReducer = combineReducers({ 
    counterReducer,
    getProducts,
    getCartProducts,
    verificaValue,
});

export default rootReducer;

// combineReducers é usado quando temos mais de um reducer
// lembrar de informar esse arquivo na store