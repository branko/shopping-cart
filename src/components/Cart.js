import React, { Component } from 'react';

class Cart extends Component {
  render() {
    return(
      <div className="cart">
        <h2>Your cart</h2>
        <p>Your cart is empty.</p>
        <p>Total: $0</p>
        <a disabled={true} className="button checkout">Checkout</a>
      </div>
    );
  }
}

export default Cart;