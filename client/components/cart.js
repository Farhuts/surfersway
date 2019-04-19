import React, {Component} from 'react'
import {getCartThunk, changeQtyItemThunk} from '../store/orderStore'
import {connect} from 'react-redux'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.getProductInfo = this.getProductInfo.bind(this)
    this.changeQuantity = this.changeQuantity.bind(this)
  }
  componentDidMount() {
    this.props.getCartThunkDispatch()
  }
  getProductInfo(productId) {
    return this.props.orders.myCart.userOrder.products.filter(x => {
      return x.id === productId
    })
  }

  async changeQuantity(productId, quantity) {
    await this.props.changeQtyItemThunkDispatch(productId, quantity)
    this.props.getCartThunkDispatch()
  }

  render() {
    let ordersInCart = this.props.orders.myCart.userItemInCart
    const productDescription = this.props.orders.myCart.userOrder

    let orderDetails =
      ordersInCart &&
      ordersInCart.map(item => {
        let product = this.getProductInfo(item.productId)[0]
        let productId = product.id
        let quantity = item.quantity
        return (
          <div className="container" key={item.productId}>
            <p>
              Name {product.name}, QTY:{' '}
              <button
                type="submit"
                onClick={() => this.changeQuantity(productId, (quantity -= 1))}
              >
                {' '}
                -{' '}
              </button>{' '}
              {item.quantity}{' '}
              <button
                type="submit"
                onClick={() => this.changeQuantity(productId, (quantity += 1))}
              >
                {' '}
                +{' '}
              </button>{' '}
              Price ${item.price} - subTotal {item.subTotal}
            </p>
            <hr className="cart" />
          </div>
        )
      })

    return (
      <div className="container">
        <h1>Hi from Cart</h1>
        {orderDetails}
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
  changeQtyItemThunkDispatch: (productId, quantity) =>
    dispatch(changeQtyItemThunk(productId, quantity))
})

export default connect(mapState, mapDispatch)(Cart)
