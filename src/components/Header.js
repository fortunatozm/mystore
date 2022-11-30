import React from 'react';
import { connect } from 'react-redux';
import '../componentsCSS/Headers.css';
import { BsCartCheck } from "react-icons/bs";
import { changeVerifica } from '../redux/actions';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      verifica: false,
    }
    this.openCart = this.openCart.bind(this);
  }

  openCart() {
    const { dispatch } = this.props;
    dispatch(changeVerifica('true'));

  }
  render() {
    const { cartProducts } = this.props;
    return (
      <div className='head'>
        <h1 className='mks'>
          MKS
        </h1>
        <p className='sistemas'>
          Sistemas
        </p>
        <div className='cartLogo'>
          <BsCartCheck className='bag' onClick={this.openCart}/>
          <div className='bag'>
           { cartProducts.length }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
    cartProducts: state.getCartProducts.cartProducts,
  }
);

export default connect(mapStateToProps)(Header);