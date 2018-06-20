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
    return this.props.cart.reduce((total, item) => {
      return (total + item.quantity * item.price)
    }, 0).toFixed(2)
  }

  generateRows() {
    return this.props.cart.map(item => {
      return (
        <tr>
          <td>{item.title}</td>
          <td>{item.quantity}</td>
          <td>${item.price}</td>
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
                  <td className="total" colspan="3">Total: ${this.calculateTotal()}</td>
                </tr>
              </tbody>
            </table>)
  }

  generateCart() {
    if (this.props.cart.length === 0) {
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
