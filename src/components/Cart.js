import React from 'react';
import { connect } from 'react-redux';
import '../componentsCSS/Headers.css';
import '../componentsCSS/Cart.css';
import { changeVerifica } from '../redux/actions';
// import { BsFillXCircleFill } from "react-icons/bs";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
      verifica: true,
    }
    this.quantityChancge = this.quantityChancge.bind(this);
    this.closeCart = this.closeCart.bind(this);
  }

  quantityChancge({ target }){
    console.log(target);
  }

  closeCart() {
    const { dispatch } = this.props;
    dispatch(changeVerifica(false));
  }

  render() {
    const { cartProducts, verifica } = this.props;
    // console.log(verifica);
    if (cartProducts && verifica) {
      return (
        <div className='cart'>
          <h3 className='titulo'>
            Carrinho de compras
          </h3>
          <div className='closeCart' onClick={ this.closeCart }>
            X
          </div>
          { cartProducts.map((product) => (
            <div key={ product.id } className='cartItens'>
              <div className='closeCart removeItem'>
                X
              </div>
              <img src={ product.photo } alt={ product.name } className='itemImage' />
              <div className='itemText'>
                { product.name }
              </div>
              <div className='label'>
                Qtd
              </div>
              <input defaultValue={1} className='quantity' type='number' size='2' min='1' />
              <div className='itemPrice'>
                { product.price }
              </div>
            </div>
          )) }
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => (
  {
    cartProducts: state.getCartProducts.cartProducts,
    verifica: state.verificaValue.verifica,
  }
);

export default connect(mapStateToProps)(Header);