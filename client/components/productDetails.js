import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getOneProductThunk} from '../store/productStore'
import {
  addItemToOrderThunk,
  setTotalThunk,
  postOrderThunk
} from '../store/orderStore'
import ForProductDetails from './forProductDetails'

class ProductDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: 1,
      textPopUp: ''
    }
    this.handleAddToCart = this.handleAddToCart.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    const productId = this.props.match.params.productId
    this.props.getOneProductThunkDispatch(productId)
    const userId = this.props.user.id
    this.props.postOrderThunkDispatch(userId)
  }

  handleAddToCart(e) {
    e.preventDefault()
    let orderInfo = {
      productId: this.props.match.params.productId,
      quantity: this.state.quantity,
      price: this.props.currentProduct.price,
      orderId: this.props.orders.currentOrder.id,
      subTotal: this.state.quantity * this.props.currentProduct.price
    }
    this.props.addItemToOrderThunkDispatch(orderInfo)
  }

  handleChange(e) {
    console.log('in handlechange: ', e.target.value)
    this.setState({
      quantity: e.target.value
    })
  }

  render() {
    const productDetails = this.props.currentProduct
    console.log('ID CURR ORDER', this.props.orders.userOrder)
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
  myCart: state.myCart,
  user: state.user,
  orders: state.orders
})

const mapDispatch = dispatch => ({
  getOneProductThunkDispatch: productId =>
    dispatch(getOneProductThunk(productId)),
  addItemToOrderThunkDispatch: orderInfo =>
    dispatch(addItemToOrderThunk(orderInfo)),
  postOrderThunkDispatch: id => dispatch(postOrderThunk(id))
})

export default connect(mapState, mapDispatch)(ProductDetails)
