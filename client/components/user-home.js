import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getCartForUser} from '../store/user'

/**
 * COMPONENT
 */
class UserHome extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getCartForUserDispatch()
  }

  render() {
    let cart = {...this.props.cart.orders.myCart}
    const userCart = cart.userItemInCart
    // console.log("USER CART", cart)
    let resultBtn =
      userCart && userCart.length ? (
        <div>
          <h4> You have saved items in your cart </h4>
          <Link to="/orders/myCart">
            <p className="center-align">
              <button
                type="button"
                className="waves-effect teal lighten-2 btn-large"
              >
                cart
              </button>
            </p>
          </Link>
        </div>
      ) : (
        <Link to="/products">
          <p className="center-align">
            <button
              type="button"
              className="waves-effect teal lighten-2 btn-large"
            >
              <i className="material-icons"> shopping_basket SHOP NOW </i>
            </button>
          </p>
        </Link>
      )
    return (
      <div className="container">
        <h3>Welcome, {this.props.userName}</h3>
        {resultBtn}
      </div>
    )
  }
}
/**
 * CONTAINER
 */
const mapState = state => ({
  userName: state.user.userName,
  cart: state
})

const mapDispatch = dispatch => ({
  getCartForUserDispatch: () => dispatch(getCartForUser())
})

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
