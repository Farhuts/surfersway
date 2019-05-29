import React from 'react'
import Products from './Products'
import {Link} from 'react-router-dom'

const ProductCategory = ({categoryList}) => {
  return (
    <div className="shiftDown">
      <div className="row">
        {categoryList.map(product => {
          return (
            <div key={product.id}>
              <Link to={`/products/` + product.id}>
                <Products product={product} />
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductCategory
