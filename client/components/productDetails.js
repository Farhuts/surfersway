import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getOneProductThunk} from '../store/productStore'
import Modal from './Modal'
import {addItemToOrderThunk, postOrderThunk} from '../store/orderStore'
import ComponentForProductDetails from './componentForProductDetails'

class ProductDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: 1,
      show: false
    }
    this.handleAddToCart = this.handleAddToCart.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.hideModal = this.hideModal.bind(this)
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
    this.setState({show: true})
  }

  handleChange(e) {
    this.setState({
      quantity: e.target.value
    })
  }

  hideModal() {
    this.setState({show: false})
  }

  render() {
    const productDetails = this.props.currentProduct
    return (
      <div className="shiftDown">
        <ComponentForProductDetails
          {...this.state}
          productDetails={productDetails}
          handleAddToCart={this.handleAddToCart}
          handleChange={this.handleChange}
          history={this.props.history}
        />
        <Modal
          show={this.state.show}
          handleClose={this.hideModal}
          productDetails={productDetails}
          state={this.state}
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
