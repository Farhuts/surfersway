import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getOneProductThunk} from '../store/productStore'
import {addItemToOrderThunk, getOrderThunk} from '../store/orderStore'
import ForProductDetails from './forProductDetails'

class ProductDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 1,
      textPopUp: ''
    }
    this.handleAddToCart = this.handleAddToCart.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    const productId = this.props.match.params.productId
    this.props.getOneProductThunkDispatch(productId)
    const userId = this.props.user.id
    this.props.getOrderThunkDispatch(userId)
  }

  handleAddToCart(e) {
    e.preventDefault()
    let orderInfo = {
      productId: this.props.match.params.productId,
      quantity: this.state.value,
      price: this.props.currentProduct.price,
      orderId: this.props.orders.currentOrder.id
    }
    // console.log("ORDER ITEM", this.state.value )
    this.props.addItemToOrderThunkDispatch(orderInfo)
    let total = e.target.value * this.props.currentProduct.price
  }

  handleChange(evt) {
    console.log('in handlechange: ', evt.target.value)
    this.setState({
      value: evt.target.value
    })
  }

  render() {
    const productDetails = this.props.currentProduct
    console.log('PROPS', this.props.user)
    return (
      <div>
        <ForProductDetails
          {...this.state}
          productDetails={productDetails}
          handleAddToCart={this.handleAddToCart}
          handleChange={this.handleChange}
          history={this.props.history}
        />
      </div>
    )
  }
}

const mapState = state => ({
  currentProduct: state.products.one_product,
  user: state.user,
  orders: state.orders
})

const mapDispatch = dispatch => ({
  getOneProductThunkDispatch: productId =>
    dispatch(getOneProductThunk(productId)),
  getOrderThunkDispatch: id => dispatch(getOrderThunk(id)),
  addItemToOrderThunkDispatch: orderInfo =>
    dispatch(addItemToOrderThunk(orderInfo))
})

export default connect(mapState, mapDispatch)(ProductDetails)
