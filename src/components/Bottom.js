import React from 'react';
import { connect } from 'react-redux';
import '../componentsCSS/Bottom.css';

class Bottom extends React.Component {

  render() {
    return (
      <div className='mkssistems'>
        <p>
          MKS sistemas © Todos os direitos reservados
        </p>
      </div>
    )
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

export default connect(mapStateToProps)(Bottom);