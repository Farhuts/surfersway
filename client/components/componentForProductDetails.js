import React from 'react'

// component for allProducts
const ComponentForProductDetails = props => {
  const productDetails = props.productDetails
  const handleAddToCart = props.handleAddToCart
  const handleChange = props.handleChange
  const history = props.history
  const value = props.value

  let quantityArr = []
  for (let i = 1; i <= productDetails.stock; i++) {
    quantityArr.push(i)
  }
  const quantity = quantityArr.map(elem => {
    return (
      <option key={elem} value={elem}>
        {elem}
      </option>
    )
  })
  return (
    <div className="container">
      <h3 className="center">{productDetails.name}</h3>
      <img className="responsive-img" src={productDetails.imageUrl} />
      <h4>In stock</h4>
      <div className="input-field col s12 left">
        <select
          className="browser-default"
          value={value}
          onChange={handleChange}
        >
          {quantity}
        </select>
      </div>
      <h4>Price ${productDetails.price}</h4>
      <button
        className="waves-effect pink lighten-1 btn-large right"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
      <button
        className="waves-effect waves lighten-1 btn-large right"
        onClick={() => history.push('/products')}
      >
        Main Menu
      </button>
    </div>
  )
}

export default ComponentForProductDetails
