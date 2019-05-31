import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  AuthForm,
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
        <Route exact path="/login" component={AuthForm} />
        <Route exact path="/orders/myCart" component={Cart} />
        <Route exact path="/products" component={AllProducts} />
        <Route exact path="/products/:productId" component={ProductDetails} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/checkout/thankyou" component={ThankYouPage} />
        <Route exact path="/category/bodyBoard" component={FoamBoards} />
        <Route exact path="/category/long" component={LongBoards} />
        <Route exact path="/category/shorty" component={ShortBoards} />
        {isLoggedIn && (
          <Switch>
            <Route exact path="/home" component={UserHome} />
          </Switch>
        )}
        <Route component={AuthForm} />
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

export default withRouter(connect(mapState, mapDispatch)(Routes))

Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
