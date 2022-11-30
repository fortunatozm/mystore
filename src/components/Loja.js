import React from 'react';
import { connect } from 'react-redux';
import { actionsApi, insertProduct } from '../redux/actions';
import '../componentsCSS/Loja.css';
import Button from 'react-bootstrap/Button';
import { BsCartPlus } from 'react-icons/bs';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

class Loja extends React.Component {
  constructor() {
    super();
    // this.state = {

    // };
    this.comprarClick = this.comprarClick.bind(this);
  }
  comprarClick({ target }) {
    const { dispatch, allProducts } = this.props;
    const [data] = allProducts.filter((product) => product.id === Number(target.id) );
    
    const produto = {
      id: data.id,
      photo: data.photo,
      name: data.name,
      price: data.price,
      description: data.description,
    };

    dispatch(insertProduct(produto));
    console.log(data);
  }

  async componentDidMount() {
    const { dispatch } = this.props;
    const answer = await fetch('https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC');
    const { products } = await answer.json();
    dispatch(actionsApi(products));
  }

  render() {
    const { allProducts } = this.props;
      if (allProducts.length !== 0) {
        return (
          <div>
            { allProducts.map((product) => (
              <div key={ product.id } className='product'>
                  <img className='image' alt={ product.name } src={ product.photo } />
                  <div className='namePrice'>
                    <div className='name'>
                      { product.name }
                    </div>
                    <div className='price'>
                      { product.price }
                    </div>
                  </div>
                  <div className='description'>
                    { product.description }
                  </div>
                  <Button id={ product.id } onClick={ this.comprarClick } variant='primary' className='bComprar'>
                    COMPRAR <BsCartPlus />
                  </Button>
                </div>
            )
            ) }
          </div>
        )
      } else {
        return (
          <div className='carregando'>
            <SkeletonTheme baseColor="blue" highlightColor="#444">
              <Skeleton count={3} height={ 20 } />
            </SkeletonTheme>
          </div>
        )
      }
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   currencyDispatch: (data) => dispatch((data)),
// });
const mapStateToProps = (state) => (
  {
    allProducts: state.getProducts.products,
  }
);

export default connect(mapStateToProps)(Loja);