import axios from 'axios'

// ACTION TYPES
const GET_PRODUCTS_FROM_SERVER = 'GET_PRODUCTS_FROM_SERVER'
const GET_ONE_PRODUCT_FROM_SERVER = 'GET_ONE_PRODUCT_FROM_SERVER'

// ACTION CREATORS
const getProductsFromServer = products => ({
  type: GET_PRODUCTS_FROM_SERVER,
  products
})

const getOneProductsFromServer = product => ({
  type: GET_ONE_PRODUCT_FROM_SERVER,
  product
})

// THUNK CREATORS
export const getProductsThunk = () => {
  return async dispatch => {
    try {
      const response = await axios.get('/api/products')
      const all_products = response.data
      dispatch(getProductsFromServer(all_products))
    } catch (err) {
      console.error(err)
    }
  }
}

export const getOneProductThunk = productId => {
  return async dispatch => {
    try {
      const response = await axios.get(`/api/products/${productId}`)
      const one_product = response.data
      dispatch(getOneProductsFromServer(one_product))
    } catch (err) {
      console.error(err)
    }
  }
}

// INITIAL STATE
const initialState = {
  all_products: [],
  one_product: {}
}

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_FROM_SERVER: {
      return {...state, all_products: action.products}
    }
    case GET_ONE_PRODUCT_FROM_SERVER: {
      return {...state, one_product: action.product}
    }
    default:
      return state
  }
}

export default reducer
