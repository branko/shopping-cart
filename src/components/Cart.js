import React, { Component } from 'react';

class Cart extends Component {
  constructor(props) {
    super(props)

    this.handleCheckout = this.handleCheckout.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.generateRows = this.generateRows.bind(this);
    this.generateTable = this.generateTable.bind(this);
    this.generateCart = this.generateCart.bind(this);
  }

  handleCheckout() {
    this.props.checkoutCart()
  }

  calculateTotal() {
    let { products, cart } = this.props

    return Object.keys(cart).reduce((total, id) => {
      let cartProduct = cart[id]
      return (total + cartProduct.quantity * products[id].price)
    }, 0).toFixed(2)
  }

  generateRows() {
    let { products, cart } = this.props

    return Object.keys(this.props.cart).map((id) => {
      return (
        <tr key={id}>
          <td>{products[id].title}</td>
          <td>{cart[id].quantity}</td>
          <td>${products[id].price}</td>
        </tr>
        )
    })
  }

  generateTable() {
    return (<table className="cart-items">
              <tbody>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
                {this.generateRows()}
                <tr>
                  <td className="total" colSpan="3">Total: ${this.calculateTotal()}</td>
                </tr>
              </tbody>
            </table>)
  }

  generateCart() {
    if (Object.keys(this.props.cart).length === 0) {
      return (
        <div>
          <p>Your cart is empty</p>
          <p>Total: $0</p>
        </div>
      )
    } else {
      return this.generateTable()
    }
  }

  render() {
    return (
      <div className="cart">
        <h2>Your Cart</h2>
        { this.generateCart() }
        <a
           onClick={this.handleCheckout}
           className={`button checkout ${this.props.cart.length === 0 ? 'disabled' : ''}`}>Checkout
        </a>
      </div>
      )
  }
}

export default Cart;
