import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getProductsThunk} from '../store/productStore'
import Products from './Products'
import {Link} from 'react-router-dom'

class AllProducts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
    this.updateSearch = this.updateSearch.bind(this)
  }
  componentDidMount() {
    this.props.getProductsThunkDispatch()
  }

  updateSearch(e) {
    this.setState({
      search: e.target.value
    })
    console.log(e.target.value)
  }
  render() {
    let productList = this.props.products.filter(item => {
      let itemLowerCase = item.name.toLowerCase()
      let itemUpperCase = item.name
      return (
        itemLowerCase.indexOf(this.state.search) !== -1 ||
        itemUpperCase.indexOf(this.state.search) !== -1
      )
    })
    return (
      <div className="shiftDown">
        <div className="container">
          <input
            type="text"
            placeholder="Find Your Board"
            value={this.state.search}
            onChange={this.updateSearch}
          />
        </div>
        <h3 className="center">All Boards</h3>
        <div className="row">
          {productList.map(product => {
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
}

const mapState = state => ({
  products: state.products.all_products
})

const mapDispatch = dispatch => ({
  getProductsThunkDispatch: () => dispatch(getProductsThunk())
})

export default connect(mapState, mapDispatch)(AllProducts)
