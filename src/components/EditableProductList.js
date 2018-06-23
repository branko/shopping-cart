import React, { Component } from 'react';
import ToggleableProductForm from './ToggleableProductForm';
import EditableProduct from './EditableProduct'
import { addProduct, deleteProduct, editProduct, addToCart } from '../actions/index';
import { connect } from 'react-redux';


class EditableProductList extends Component {
  render() {
    let products = this.props.products
    let productList = [];

    for (let id in products) {
      if (products[id] === undefined) { continue }

      let { title, quantity, price } = products[id];

      productList.push(
        <EditableProduct
          key={id}
          id={id}
          title={title}
          quantity={quantity}
          price={price}
          deleteProduct={this.props.deleteProduct}
          editProduct={this.props.editProduct}
          addToCart={this.props.addToCart}
        />
      )
    }

    return (
      <main>
        <div className="product-listing">
          <h2>Products</h2>
          {productList}
        </div>
        <ToggleableProductForm
          addProduct={this.props.addProduct}
        />
      </main>
    );
  }

}

const mapStateToProps = state => {
  return {
    products: state.products,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (title, price, quantity) => dispatch(addProduct(title, price, quantity)),
    editProduct: (id, title, price, quantity) => dispatch(editProduct(id, title, price, quantity)),
    deleteProduct: (id) => dispatch(deleteProduct(id)),
    addToCart: (id) => { dispatch(addToCart(id)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditableProductList);
