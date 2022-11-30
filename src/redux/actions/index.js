export const actionsCreator = (incrementValue) => ({
  type: 'INCREMENT_STATE',
  payload: incrementValue,
});

export const actionsApi = (products) => ({
  type: 'GETPRODUCTS',
  payload: products,
});

export const insertProduct = (product) => ({
  type: 'INSERTPRODUCT',
  payload: product,
});

export const changeVerifica = (verifica) => ({
  type: 'VERIFICA',
  payload: verifica,
});

// Action para função async

// thunk action creator: deve retornar uma função
// export function fetchMovies() {
//   return (dispatch, _getState) => { 
//     dispatch(requestMoviesStarted()); // dispatch da action 'REQUEST_MOVIES_STARTED' 
//     return fetch('alguma-api-qualquer.com')
//       .then((response) => response.json())
//       .then((movies) => dispatch(receiveMovies(movies))); // dispatch da action 'RECEIVE_MOVIES'
//   };
// }

// chamando no componente

// import { fetchMovies } from './redux/actions';

// // ...
// class Movies extends Component {
//   // ...
//   componentDidMount() {
//     const { dispatch } = this.props;
//     dispatch(fetchMovies()); // enviando a action fetchMovies
//   }
//   // ...
// }
// // ...
// export default connect()(Movies)