import React, { Component } from 'react';
import Field from './Field';

class ProductForm extends Component {
  static defaultProps = {
    title: '',
    price: '',
    quantity: '',
  }

  state = {
    fields: {
      title: '',
      price: '',
      quantity: '',
    }
  }

  componentDidMount() {
    this.setState({
      fields: {
        title: this.props.title,
        price: this.props.price,
        quantity: this.props.quantity,
      }
    })
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

    this.props.submitAction(title, price, quantity, this.props.id);
    this.setState({fields: {title: '', price: '', quantity: ''}});
  }

  render() {
    return (
      <div className='add-form visible'>
        <h3>{this.props.formType === 'Update' ? "Edit" : "Add"} Product</h3>
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
            >{this.props.formType}</a>
            <a className='button' onClick={this.props.cancelAction}>Cancel</a>
          </div>
        </form>
      </div>
    );
  }
}

export default ProductForm;
