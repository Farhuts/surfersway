import React, {Component} from 'react'
import ComponentForCart from './componentForCart'
import {
  getCartThunk,
  changeQtyItemThunk,
  removeItemThunk
} from '../store/orderStore'
// import {getProductsThunk} from '../store/productStore'
import {connect} from 'react-redux'

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

  changeQuantity(productId, subTotal, quantity) {
    this.props.changeQtyItemThunkDispatch(productId, subTotal, quantity)
    this.props.getCartThunkDispatch()
  }

  deleteItem(orderId, productId) {
    this.props.removeItemThunkDispatch(orderId, productId)
    this.props.getCartThunkDispatch()

    // let newTotal = this.props.cart.currentOrder.total - quantity * price
    // this.props.setTotalSub(updateInfo)
  }
  render() {
    let myCart = {...this.props.orders.myCart}
    let ordersInCart = myCart.userItemInCart
    console.log('I refreshed')
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
  changeQtyItemThunkDispatch: (productId, subTotal, quantity) =>
    dispatch(changeQtyItemThunk(productId, subTotal, quantity)),
  removeItemThunkDispatch: (orderId, productId) =>
    dispatch(removeItemThunk(orderId, productId))
})

export default connect(mapState, mapDispatch)(Cart)
