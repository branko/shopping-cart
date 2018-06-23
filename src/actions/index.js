const ADD_PRODUCT = 'ADD_PRODUCT';
const EDIT_PRODUCT = 'EDIT_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const ADD_TO_CART = 'ADD_TO_CART';
const CHECKOUT_CART = 'CHECKOUT_CART';

export const deleteProduct = (id) => {
  return { type: DELETE_PRODUCT, id }
}

export const editProduct = (id, title, price, quantity) => {
  return {
    type: EDIT_PRODUCT,
    id,
    title,
    price,
    quantity,
  }
}

let nextId = 5;

export const addProduct = (title, price, quantity) => {
  let id = nextId++
  return {
    type: ADD_PRODUCT,
    id,
    title,
    price,
    quantity,
  }
}

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id,
  }
}

export const checkoutCart = () => {
  return {
    type: CHECKOUT_CART,
  }
}
