import React, {Component} from 'react'
import ComponentForCart from './componentForCart'
import {
  getCartThunk,
  changeQtyItemThunk,
  removeItemThunk
} from '../store/orderStore'
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

  async changeQuantity(productId, quantity, subTotal) {
    await this.props.changeQtyItemThunkDispatch(productId, quantity, subTotal)
    this.props.getCartThunkDispatch()
  }

  async deleteItem(orderId, productId) {
    console.log('start props ', orderId, productId)
    await this.props.removeItemThunkDispatch(orderId, productId)
    await this.props.getCartThunkDispatch()

    // let newTotal = this.props.cart.currentOrder.total - quantity * price
    // let updateInfo = {total: newTotal, orderId}
    // this.props.setTotalSub(updateInfo)
    // console.log('end props ', this.props)
    // this.props.requestCart(this.props.id)
  }

  render() {
    let myCart = {...this.props.orders.myCart}
    let ordersInCart = myCart.userItemInCart

    return (
      <div>
        <ComponentForCart
          {...this.state}
          ordersInCart={ordersInCart}
          getProductInfo={this.getProductInfo}
          changeQuantity={this.changeQuantity}
          deleteItem={this.deleteItem}
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
})

const mapDispatch = dispatch => ({
  getCartThunkDispatch: () => dispatch(getCartThunk()),
  changeQtyItemThunkDispatch: (productId, subTotal, quantity) =>
    dispatch(changeQtyItemThunk(productId, subTotal, quantity)),
  removeItemThunkDispatch: (orderId, productId) =>
    dispatch(removeItemThunk(orderId, productId))
})

export default connect(mapState, mapDispatch)(Cart)
