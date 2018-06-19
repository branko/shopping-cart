import React, { Component } from 'react';
import EditableProduct from "./EditableProduct";

class EditableProductList extends Component {
  static defaultProps = {
    products: []
  }

  render() {
    let productList = this.props.products.map(p => {
      return (<EditableProduct
                key={p.id}
                id={p.id}
                title={p.title}
                quantity={p.quantity}
                price={p.price}
                handleAddToCart={this.props.handleAddToCart}
              />)
    })

    return (
      <div className="product-listing">
        <h2>Products</h2>
        {productList}
      </div>
    );
  }
}

export default EditableProductList;