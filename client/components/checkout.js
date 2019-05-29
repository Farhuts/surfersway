import React, {Component} from 'react'
import {
  getCartThunk,
  payWithPayPalThunk,
  whenCheckout
} from '../store/orderStore'
import {connect} from 'react-redux'
import axios from 'axios'

import StripeCheckout from 'react-stripe-checkout'
const PUBLISHABLE_KEY = 'pk_test_l7dOb5aArR83Av8NqXzzCF2100LnN7KXns'

class Checkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 0,
      tax: 0,
      shipping: 0
    }
    this.getProductInfo = this.getProductInfo.bind(this)
  }
  componentDidMount() {
    this.props.getCartThunkDispatch()
  }

  onToken = async token => {
    let user = this.props.orders.myCart.userOrder
    try {
      await axios.post('/api/payment/checkout', {
        stripeToken: token.id,
        user
      })
      this.props.whenCheckoutDispatch()
    } catch (error) {
      alert('Payment error')
    }
  }

  getProductInfo(productId) {
    return this.props.orders.myCart.userOrder.products.filter(x => {
      return x.id === productId
    })
  }

  render() {
    let myCart = {...this.props.orders.myCart}
    let ordersInCart = myCart.userItemInCart
    let orderDetails =
      ordersInCart &&
      ordersInCart.map(item => {
        let product = this.getProductInfo(item.productId)[0]
        let orderId = item.orderId
        let productId = product.id
        let subTotal = item.subTotal
        // this.onToken({subTotal, productId, orderId})
        return (
          <div key={item.productId}>
            <h4>
              {product.name} {item.quantity}
            </h4>
          </div>
        )
      })
    return (
      <div className="shiftDown">
        <div className="container">
          <h3>Reday to be yours</h3>
          {orderDetails}
          <StripeCheckout token={this.onToken} stripeKey={PUBLISHABLE_KEY} />
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  myCart: state.myCart,
  user: state.user,
  orders: state.orders
})

const mapDispatch = dispatch => ({
  getCartThunkDispatch: () => dispatch(getCartThunk()),
  payWithPayPalThunkDispatch: (productId, orderId, subTotal) =>
    dispatch(payWithPayPalThunk(productId, orderId, subTotal)),
  whenCheckoutDispatch: () => dispatch(whenCheckout())
})

export default connect(mapState, mapDispatch)(Checkout)
