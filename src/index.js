import React from 'react';
import ReactDOM from 'react-dom';
import Shop from './components/Shop';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { combineReducers } from 'redux'

const ADD_PRODUCT = 'ADD_PRODUCT';
const EDIT_PRODUCT = 'EDIT_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const ADD_TO_CART = 'ADD_TO_CART';
const CHECKOUT_CART = 'CHECKOUT_CART';

const initialState = {
  products: {
    1: { title: 'Amazon Kindle E-reader', quantity: 0, price: 79.99 },
    2: { title: 'Apple 10.5-Inch iPad Pro', quantity: 3, price: 649.99 },
    3: { title: 'Yamaha Portable Keyboard', quantity: 2, price: 155.99 },
    4: { title: 'Tinker, Tailor, Soldier, Spy - A John le Carre Novel', quantity: 12, price: 13.74 }
  },
  cart: {},
}

const reducer = (state=initialState, action) => {
  let { id, title, price, quantity } = action;

  switch (action.type) {
    case ADD_PRODUCT:
      let newProduct = { title, price, quantity };

      return {
        products: Object.assign({}, state.products, { [id]: newProduct }),
        cart: state.cart,
      };
      break;

    case EDIT_PRODUCT:
      let editProduct = { title, price, quantity };
      let newProducts = Object.assign({}, state.products, { [id]: editProduct })

      return {
        products: newProducts,
        cart: state.cart,
      };
      break;

    case DELETE_PRODUCT:

      return {
        products: Object.assign({}, state.products, { [action.id]: undefined }),
        cart: state.cart,
      };
      break;

    case ADD_TO_CART:
      let productInCart = state.cart[id]
      let productForCart = {
        [id]: {
          quantity: (productInCart ? productInCart.quantity : 0) + 1
        }
      }

      let product = state.products[id]
      product = Object.assign({}, product, {quantity: product.quantity - 1})

      return {
        products: Object.assign({}, state.products, {[id]: product}),
        cart: Object.assign({}, state.cart, productForCart)
      }

    case CHECKOUT_CART:
      return {
        products: state.products,
        cart: {}
      }

    default:
      return state
  }
}

const store = createStore(reducer, initialState)

ReactDOM.render(
  <Provider store={store}>
    <Shop />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
