import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Login,
  Signup,
  UserHome,
  MainPage,
  AllProducts,
  ProductDetails,
  Cart,
  Checkout,
  ThankYouPage,
  FoamBoards,
  LongBoards,
  ShortBoards
} from './components'
import {me} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        <Route exact path="/main" component={MainPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/orders/myCart" component={Cart} />
        <Route exact path="/products" component={AllProducts} />
        <Route exact path="/products/:productId" component={ProductDetails} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/checkout/thankyou" component={ThankYouPage} />
        <Route exact path="/category/foamBoards" component={FoamBoards} />
        <Route exact path="/category/longBoards" component={LongBoards} />
        <Route exact path="/category/shortBoards" component={ShortBoards} />
        {isLoggedIn && (
          <Switch>
            <Route exact path="/home" component={UserHome} />
          </Switch>
        )}
        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
