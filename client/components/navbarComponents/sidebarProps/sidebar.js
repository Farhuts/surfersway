import React from 'react'
import {Link} from 'react-router-dom'

const Sidebar = ({handleClick, isLoggedIn}) => (
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
            Login/Signup
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
)

export default Sidebar
