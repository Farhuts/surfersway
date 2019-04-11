import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getProductsThunk} from '../store/productStore'
import Products from './Products'
import {Link} from 'react-router-dom'

class AllProducts extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getProductsThunkDispatch()
  }
  render() {
    const productList = this.props.products.map(product => {
      return (
        <div key={product.id}>
          <Link to={`/products/` + product.id}>
            <Products product={product} />
          </Link>
        </div>
      )
    })
    return (
      <div>
        <h3 className="center">All Boards</h3>
        <div className="row">{productList}</div>
      </div>
    )
  }
}

const mapState = state => ({
  products: state.products.all_products
})

const mapDispatch = dispatch => ({
  getProductsThunkDispatch: () => dispatch(getProductsThunk())
})

export default connect(mapState, mapDispatch)(AllProducts)
