import React, { Component } from 'react';
import Product from './Product';

class EditableProduct extends Component {
  render() {
    return (
      <Product
        {...this.props}
      />
      // <EditForm />
    )
  }
}

export default EditableProduct;
