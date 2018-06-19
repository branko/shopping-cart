import React, { Component } from 'react';
import Header from './Header';
import EditableProductList from './EditableProductList';

let products = [
  {
    id: 1,
    title: 'Amazon Kindle E-reader',
    quantity: 0,
    price: 79.99
  },
  {
    id: 2,
    title: 'Apple 10.5-Inch iPad Pro',
    quantity: 3,
    price: 649.99
  },
  {
    id: 3,
    title: 'Yamaha Portable Keyboard',
    quantity: 2,
    price: 155.99
  },
  {
    id: 4,
    title: 'Tinker, Tailor, Soldier, Spy - A John le Carre Novel',
    quantity: 12,
    price: 13.74
  }
]

class Shop extends Component {

  constructor(props) {
    super(props)

    this.state = { products: [],
                  cart: [] }

    this.addToCart = this.addToCart.bind(this)
    this.checkoutCart = this.checkoutCart.bind(this)
  }

  componentDidMount() {
    if (products) {
      this.setState({ products: products })
    }
  }

  addToCart(id) {
    this.setState(prevState => {
      let newCart;

      let newProducts = prevState.products.map(p => {
        if (p.id === id) {
          return Object.assign({}, p, { quantity: p.quantity - 1 })
        } else {
          return p
        }
      })

      if (prevState.cart.some(item => item.id === id)) {
        newCart = prevState.cart.map(item => {
          if (item.id === id) {
            return Object.assign({}, item, {quantity: item.quantity + 1})
          } else {
            return item
          }
        })
      } else {
        let product = Object.assign({}, prevState.products.filter(p => p.id === id)[0], {quantity: 1})

        newCart = prevState.cart.concat(product)
      }

      return {
        products: newProducts,
        cart: newCart,
      }
    })
  }

  checkoutCart() {
    this.setState({ cart: [] })
  }

  render() {
    return (
      <div id="app">
        <Header
          checkoutCart={this.checkoutCart}
          cart={this.state.cart}
        />
        <main>
          <EditableProductList
            handleAddToCart={this.addToCart}
            products={this.state.products}
          />
        </main>
      </div>
    );
  }
}

export default Shop;
