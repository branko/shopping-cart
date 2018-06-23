import React, { Component } from 'react';
import ProductForm from './ProductForm';
import { connect } from 'react-redux'

class EditableProduct extends Component {
  state = {
    editOpen: false
  }

  handleAddToCart = (e) => {
    if (this.props.quantity > 0) {
      this.props.addToCart(this.props.id)
    }
  }

  handleDeleteProduct = (e) => {
    this.props.deleteProduct(this.props.id)
  }

  handleOpenEditForm = (e) => {
    this.setState({editOpen: true})
  }

  handleSubmit = (title, price, quantity, id) => {
    this.setState({editOpen: false});
    this.props.editProduct(id, title, price, quantity)
  }

  showEditForm = () => {
    return (<ProductForm
            formType="Update"
            id={this.props.id}
            title={this.props.title}
            price={this.props.price}
            quantity={this.props.quantity}
            submitAction={this.handleSubmit}
          />)
  }

  showActions = () => {
    return (<div className="actions product-actions">
              <a onClick={this.handleAddToCart} className={`button add-to-cart ${this.props.quantity <= 0 ? 'disabled' : ''}`}>Add to Cart</a>
              <a
                className="button edit"
                onClick={this.handleOpenEditForm}>
                Edit
              </a>
            </div>)
  }

  render() {
    return(
      <div className="product">
        <div className="product-details">
          <h3>{this.props.title}</h3>
          <p className="price">${this.props.price}</p>
          <p className="quantity">{this.props.quantity} left in stock</p>

          {this.state.editOpen ?
              this.showEditForm() :
              this.showActions()}

          <div
            className="delete-button"
            onClick={this.handleDeleteProduct}
          ><span>X</span></div>
        </div>
      </div>
    );
  }
}

export default EditableProduct;
