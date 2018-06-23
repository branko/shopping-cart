import React, { Component } from 'react';
import Cart from './Cart';
import { checkoutCart } from '../actions/index';
import { connect } from 'react-redux'

class Header extends Component {
  render() {
    return(
      <header>
        <h1>The Shop!</h1>
        <Cart
          checkoutCart={this.props.checkoutCart}
          cart={this.props.cart}
          products={this.props.products}
        />
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    cart: state.cart,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkoutCart: () => { dispatch(checkoutCart()) },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
