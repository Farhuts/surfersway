import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout, whenlogout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <nav>
      <div className="nav-wraper">
        <div className="container">
          <Link to="/home" className="brand-logo">
            <img src="assets/003-surf-1.png" />
          </Link>
          <a href="#" className="sidenav-trigger" data-target="mobile-links">
            <i className="material-icons">menu</i>
          </a>
          {isLoggedIn ? (
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="#" onClick={handleClick}>
                  Logout
                </Link>
              </li>
              <li
                className="dropdown-button"
                data-target="dropdown"
                data-beloworigin="true"
              >
                <Link to="/products">Boards</Link>
              </li>
              <li>
                <Link to="/orders/myCart">Cart</Link>
              </li>
            </ul>
          ) : (
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/login" className="login">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="signUp">
                  Sign Up
                </Link>
              </li>
              <li
                className="dropdown-button"
                data-target="dropdown"
                data-beloworigin="true"
              >
                <Link to="/products">Boards</Link>
              </li>
              <li>
                <Link to="/orders/myCart">Cart</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
    <hr />
    <ul className="sidenav" id="mobile-links">
      {isLoggedIn ? (
        <div>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="#" onClick={handleClick}>
              Logout
            </Link>
          </li>
          <li
            className="dropdown-inner-button"
            data-target="dropdown-inner"
            data-beloworigin="true"
          >
            <Link to="/products">Boards</Link>
          </li>
          <li>
            <Link to="/orders/myCart">Cart</Link>
          </li>
        </div>
      ) : (
        <div>
          <li>
            <Link to="/login" className="login">
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" className="signUp">
              Sign Up
            </Link>
          </li>
          <li
            className="dropdown-inner-button"
            data-target="dropdown-inner"
            data-beloworigin="true"
          >
            <Link to="/products">Boards</Link>
          </li>
          <li>
            <Link to="/orders/myCart">Cart</Link>
          </li>
        </div>
      )}
    </ul>
    <ul id="dropdown" className="dropdown-content">
      <li>
        <Link to="/products">All Collections</Link>
      </li>
      <li>
        <Link to="/category/foamBoards">Foamies</Link>
      </li>
      <li>
        <Link to="/category/shortBoards">Shorty</Link>
      </li>
      <li>
        <Link to="/category/longBoards">Longie Long</Link>
      </li>
    </ul>
    <ul id="dropdown-inner" className="dropdown-content">
      <li>
        <Link to="/products">All Collections</Link>
      </li>
      <li>
        <Link to="/category/foamBoards">Foamies</Link>
      </li>
      <li>
        <Link to="/category/shortBoards">Shorty</Link>
      </li>
      <li>
        <Link to="/category/longBoards">Longie Long</Link>
      </li>
    </ul>
  </div>
)

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
    handleClick() {
      dispatch(logout())
      dispatch(whenlogout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
