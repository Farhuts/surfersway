import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const GET_CART = 'GET_CART'

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})
const getCart = cart => ({type: GET_CART, cart})

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method, userName) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {email, password, userName})
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

export const getCartForUser = () => {
  return async dispatch => {
    try {
      const response = await axios.get(`/api/orders/myCart`)
      const orderInCart = response.data
      console.log(orderInCart)
      dispatch(getCart(orderInCart))
    } catch (err) {
      console.error(err)
    }
  }
}
/**
 * REDUCER
 */
export default function(state = {}, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return {}
    default:
      return state
  }
}
