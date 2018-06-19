import React, { Component } from 'react';

class EditableProduct extends Component {
  render() {
    return(
      <div className="product">
        <div className="product-details">
          <h3>Product Title</h3>
          <p className="price">$79.99</p>
          <p className="quantity">5 left in stock</p>
          <div className="actions product-actions">
            <a className="button add-to-cart">Add to Cart</a>
            <a className="button edit">Edit</a>
          </div>
          <div className="delete-button"><span>X</span></div>
        </div>
      </div>
    );
  }
}

export default EditableProduct;