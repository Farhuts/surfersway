import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {getCartThunk} from '../store/orderStore'
import {connect} from 'react-redux'

class ThankYouPage extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getCartThunkDispatch()
  }
  render() {
    return (
      <div className="shiftDown">
        <div className="container">
          <h3>Thank you for your business!</h3>
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
  getCartThunkDispatch: () => dispatch(getCartThunk())
})

export default connect(mapState, mapDispatch)(ThankYouPage)
