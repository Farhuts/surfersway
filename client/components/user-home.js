import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email, name} = props
  console.log(history)
  return (
    <div className="container">
      <h3>Welcome, {name}</h3>
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
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    name: state.user.userName
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
