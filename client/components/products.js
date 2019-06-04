import React from 'react'

// component for allProducts
const Products = props => {
  const product = props.product
  return (
    <div className="container">
      <div className="col s12 l6">
        <div className="card hoverable horizontal small">
          <div className="card-image">
            <img
              className="responsive-img"
              width="500"
              src={product.imageUrl}
            />
          </div>
          <div className="card-content">
            <i className="material-icons pink-text pulse small right">
              favorite
            </i>
            <span className="card-title">{product.name}</span>
            <p className="product-description">
              <span>SIZE: {product.size}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
