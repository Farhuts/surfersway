import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout, whenlogout} from '../store'
import Sidebar from './navbarComponents/SidebarProps/sidebar'
import SidebarDropDown from './navbarComponents/SidebarProps/sidebarDropDown'
import IsLogged from './navbarComponents/isLogged'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <nav>
      <div className="nav-wraper">
        <div className="container">
          <Link to="/main" className="brand-logo">
            <img src="003-surf-1.png" />
          </Link>
          <a href="#" className="sidenav-trigger" data-target="mobile-links">
            <i className="material-icons">menu</i>
          </a>
          <IsLogged handleClick={handleClick} isLoggedIn={isLoggedIn} />
        </div>
      </div>
    </nav>
    <hr />
    <Sidebar handleClick={handleClick} isLoggedIn={isLoggedIn} />
    <SidebarDropDown />
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
