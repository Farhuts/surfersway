import React from 'react'

// component for allProducts
const ComponentForProductDetails = ({
  productDetails,
  handleAddToCart,
  handleChange,
  history,
  value
}) => {
  const boardType = productDetails.boardType
  let quantityArr = []
  let imgInProductDetails
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
  if (boardType === 'bodyBoard' || boardType === 'shorty')
    imgInProductDetails = (
      <img
        className="responsive-img productDetailImgBody"
        width="500"
        src={productDetails.imageUrl}
      />
    )
  else
    imgInProductDetails = (
      <img
        className="responsive-img"
        width="500"
        src={productDetails.imageUrl}
      />
    )

  return (
    <div className="container">
      <h3 className="center">{productDetails.name}</h3>
      {imgInProductDetails}
      <div className="productDetailsDescription">
        <p>FEATURES</p>
        <p>{productDetails.description}</p>
        <p>In stock</p>
      </div>
      <div className="input-field col s12">
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
        className="waves-effect pink lighten-1 btn-large productDetailsDescriptionBtn"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
      <button
        className="waves-effect waves lighten-1 btn-large productDetailsDescriptionBtn return"
        onClick={() => history.push(`/category/${boardType}`)}
      >
        RETURN
      </button>
    </div>
  )
}

export default ComponentForProductDetails
