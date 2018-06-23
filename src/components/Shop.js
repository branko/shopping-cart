import React, { Component } from 'react';
import Header from './Header'
import EditableProductList from './EditableProductList';

class Shop extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <EditableProductList />
      </div>
    );
  }
}

export default Shop;
