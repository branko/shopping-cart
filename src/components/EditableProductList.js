import React, { Component } from 'react';
import EditableProduct from "./EditableProduct";
import ToggleableProductForm from "./ToggleableProductForm";

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
                addToCart={this.props.addToCart}
                deleteProduct={this.props.deleteProduct}
              />)
    })

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

export default EditableProductList;
