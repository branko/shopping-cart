import React, { Component } from 'react';

class Product extends Component {
  handleAddToCart = (e) => {
    if (this.props.quantity > 0) {
      this.props.addToCart(this.props.id)
    }
  }

  handleDeleteProduct = (e) => {
    this.props.deleteProduct(this.props.id)
  }

  render() {
    return(
      <div className="product">
        <div className="product-details">
          <h3>{this.props.title}</h3>
          <p className="price">${this.props.price}</p>
          <p className="quantity">{this.props.quantity} left in stock</p>
          <div className="actions product-actions">
            <a onClick={this.handleAddToCart} className={`button add-to-cart ${this.props.quantity <= 0 ? 'disabled' : ''}`}>Add to Cart</a>
            <a className="button edit">Edit</a>
          </div>
          <div
            className="delete-button"
            onClick={this.handleDeleteProduct}
          ><span>X</span></div>
        </div>
      </div>
    );
  }
}

export default Product;
