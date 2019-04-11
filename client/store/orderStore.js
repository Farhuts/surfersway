import axios from 'axios'

// ACTION TYPES
const GET_ORDER = 'GET_ORDER'
const ADD_ORDER_ITEM = 'ADD_ORDER_ITEM'

// ACTION CREATORS
const getOrder = order => ({
  type: GET_ORDER,
  order
})

const addOrderItem = orderInfo => ({
  type: ADD_ORDER_ITEM,
  orderInfo
})

// THUNK CREATORS
export const addItemToOrderThunk = orderInfo => {
  return async dispatch => {
    try {
      const response = await axios.put('/api/orderItem', {orderInfo})
      const orderItem = response.data
      dispatch(addOrderItem(orderItem))
    } catch (err) {
      console.log(err)
    }
  }
}

export const getOrderThunk = id => {
  return async dispatch => {
    try {
      const response = await axios.post(`/api/users/order`, {userId: id})
      console.log('USER ID', id)
      dispatch(getOrder(response.data))
    } catch (err) {
      console.error(err)
    }
  }
}
//
// INITIAL STATE
const initialState = {}

// REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ORDER:
      return action.order
    default:
      return state
  }
}
