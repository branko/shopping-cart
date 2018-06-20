import React, { Component } from 'react';
import ProductForm from './ProductForm';

class ToggleableProductForm extends Component {
  state = {
    isOpen: false,
  }

  openForm = () => {
    this.setState({ isOpen: true });
  }

  generateAddForm = () => {
    if (this.state.isOpen) {
      return (<ProductForm 
                addProduct={this.props.addProduct}
              />)
    } else {
      return (
        <div className='add-form'>
          <a className='button add-product-button'
            onClick={this.openForm}
            >Add A Product
          </a>
        </div>
      );
    }
  }

  render() {
    return this.generateAddForm()
  }
}

export default ToggleableProductForm;