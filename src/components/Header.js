import React, { Component } from 'react';
import Cart from './Cart';

class Header extends Component {
  render() {
    return(
      <header>
        <h1>The Shop!</h1>
        <Cart />

      </header>
    );
  }
}

export default Header;