import React from 'react'
import {Link} from 'react-router-dom'

const IsLogged = ({handleClick, isLoggedIn}) =>
  isLoggedIn ? (
    <ul className="right hide-on-med-and-down">
      <li className="translateY">
        <Link to="/home">Home</Link>
      </li>
      <li className="translateY">
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
      <li className="translateY">
        <Link to="/orders/myCart">Cart</Link>
      </li>
    </ul>
  ) : (
    <ul className="right hide-on-med-and-down">
      <li className="translateY">
        <Link to="/main">Main</Link>
      </li>
      <li className="translateY">
        <Link to="/login" className="login">
          Login/Signup
        </Link>
      </li>
      <li
        className="dropdown-button"
        data-target="dropdown"
        data-beloworigin="true"
      >
        <Link to="/products">Boards</Link>
      </li>
      <li className="translateY">
        <Link to="/orders/myCart">Cart</Link>
      </li>
    </ul>
  )

export default IsLogged
