import axios from 'axios'

// ACTION TYPES
const GET_CART = 'GET_CART'
const POST_ORDER = 'POST_ORDER'
const SET_TOTAL = 'SET_TOTAL'
const ADD_ORDER_ITEM = 'ADD_ORDER_ITEM'
const CHANGE_QTY_ITEM = 'CHANGE_QTY_ITEM'
const REMOVE = 'REMOVE'

// ACTION CREATORS
const getCart = cart => ({
  type: GET_CART,
  cart
})

const postOrder = order => ({
  type: POST_ORDER,
  order
})

const setTotal = total => ({
  type: SET_TOTAL,
  total
})

const addOrderItem = orderInfo => ({
  type: ADD_ORDER_ITEM,
  orderInfo
})

const changeQtyItem = quantity => ({
  type: CHANGE_QTY_ITEM,
  quantity
})

const removeItem = item => ({
  type: REMOVE,
  item
})

// THUNK CREATORS
export const getCartThunk = () => {
  return async dispatch => {
    try {
      const response = await axios.get(`/api/orders/myCart`)
      const orderInCart = response.data
      dispatch(getCart(orderInCart))
    } catch (err) {
      console.error(err)
    }
  }
}

export const setTotalThunk = info => {
  return async dispatch => {
    try {
      const response = await axios.put('/api/orders/updateTotal', info)
      const updatedTotal = response.data
      dispatch(setTotal(updatedTotal))
    } catch (err) {
      console.log(err)
    }
  }
}

export const postOrderThunk = id => {
  return async dispatch => {
    try {
      const response = await axios.post('/api/orders', id)
      dispatch(postOrder(response.data))
    } catch (err) {
      console.error(err)
    }
  }
}

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

export const removeItemThunk = (orderId, productId) => {
  return async dispatch => {
    try {
      console.log('remove item info ', (orderId, productId))
      const itemTodelete = await axios.put('/api/orderItem/remove', {
        orderId,
        productId
      })
      const deleted = itemTodelete.data
      dispatch(removeItem(deleted))
    } catch (err) {
      console.log(err)
    }
  }
}

export const changeQtyItemThunk = (productId, subTotal, quantity) => {
  return async dispatch => {
    try {
      const response = await axios.put('/api/orderItem/quantity', {
        productId,
        subTotal,
        quantity
      })
      const orderItem = response.data
      dispatch(changeQtyItem(orderItem))
    } catch (err) {
      console.log(err)
    }
  }
}

// INITIAL STATE
const initialState = {
  myCart: {}
}

// REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case POST_ORDER:
      return action.order
    case SET_TOTAL:
      return action.total
    case GET_CART:
      return {...state, myCart: action.cart}
    default:
      return state
  }
}
