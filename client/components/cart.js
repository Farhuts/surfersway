import React, {Component} from 'react'
import ComponentForCart from './componentForCart'
import {
  getCartThunk,
  changeQtyItemThunk,
  removeItemThunk,
  whenlogout
} from '../store/orderStore'
// import {getProductsThunk} from '../store/productStore'
import {connect} from 'react-redux'
// import axios from 'axios'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.getProductInfo = this.getProductInfo.bind(this)
    this.changeQuantity = this.changeQuantity.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  componentDidMount() {
    this.props.getCartThunkDispatch()
  }

  getProductInfo(productId) {
    return this.props.orders.myCart.userOrder.products.filter(x => {
      return x.id === productId
    })
  }

  async changeQuantity(productId, subTotal, quantity, orderId) {
    await this.props.changeQtyItemThunkDispatch(
      productId,
      subTotal,
      quantity,
      orderId
    )
    this.props.getCartThunkDispatch()
  }

  deleteItem(orderId, productId) {
    this.props.removeItemThunkDispatch(orderId, productId)
    this.props.getCartThunkDispatch()
  }

  render() {
    let myCart = {...this.props.orders.myCart}
    let ordersInCart = myCart.userItemInCart
    // console.log(this.props.users.id);
    return (
      <div>
        <ComponentForCart
          {...this.state}
          ordersInCart={ordersInCart}
          getProductInfo={this.getProductInfo}
          changeQuantity={this.changeQuantity}
          deleteItem={this.deleteItem}
          handleChange={this.handleChange}
          history={this.props.history}
        />
      </div>
    )
  }
}

const mapState = state => ({
  myCart: state.myCart,
  user: state.user,
  orders: state.orders
  // products: state.products
})

const mapDispatch = dispatch => ({
  getCartThunkDispatch: () => dispatch(getCartThunk()),
  changeQtyItemThunkDispatch: (productId, subTotal, quantity, orderId) =>
    dispatch(changeQtyItemThunk(productId, subTotal, quantity, orderId)),
  removeItemThunkDispatch: (orderId, productId) =>
    dispatch(removeItemThunk(orderId, productId)),
  whenlogoutDispatch: () => dispatch(whenlogout())
})

export default connect(mapState, mapDispatch)(Cart)
