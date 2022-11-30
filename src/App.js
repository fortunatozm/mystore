import './App.css';
import { connect } from 'react-redux';
import { actionsCreator } from './redux/actions';
import Loja from './components/Loja';
import Header from './components/Header'
import Bottom from './components/Bottom';
import Cart from './components/Cart';

function App(props) {
  const { countState, dispatch } = props;
  return (
    <div className="App">
      <h2>Count: { countState }</h2>
      <button onClick={ () => dispatch(actionsCreator(1)) }>Incrementar 1</button>
      <button onClick={ () => dispatch(actionsCreator(5)) }>Incrementar 5</button>
      <Header />
      <Loja />
      <Cart />
      <Bottom />
    </div>
  );
}

const mapStateToProps = (state) => ({
  countState: state.counterReducer.count,
  // coinState: state.getCoin.coin,
});

export default connect(mapStateToProps)(App);
