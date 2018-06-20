import React, { Component } from 'react';
import Field from './Field';

class ProductForm extends Component {
  state = {
    fields: {
      title: '',
      price: '',
      quantity: '',
    }
  }

  onChange = (title, input) => {
    this.setState((prevState) => {
      prevState.fields[title] = input;
      return prevState;
    });
  }

  submitForm = () => {
    let title = this.state.fields.title;
    let price = this.state.fields.price;
    let quantity = this.state.fields.quantity;
    
    this.props.addProduct(title, price, quantity);
    this.setState({fields: {title: '', price: '', quantity: ''}});
  }

  render() {
    return (
      <div className='add-form visible'>
        <h3>Add Product</h3>
        <form>
          <Field name='title'
                 label='Product Name'
                 value={this.state.fields.title}
                 onChange={this.onChange} 
                 />

          <Field name='price'
                 label='Price'
                 value={this.state.fields.price}
                 onChange={this.onChange} 
                 />

          <Field name='quantity'
                 label='Quantity'
                 value={this.state.fields.quantity}
                 onChange={this.onChange} 
          />

          <div className='actions form-actions'>
            <a className='button'
               onClick={this.submitForm}
            >Add</a>
            <a className='button'>Cancel</a>
          </div>
        </form>
      </div>
    );
  }
}

export default ProductForm;