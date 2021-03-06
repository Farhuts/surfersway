import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getProductsThunk} from '../store/productStore'
import ProductCategory from './productCategory'

class LongBoards extends Component {
  componentDidMount() {
    this.props.getProductsThunkDispatch()
  }

  render() {
    const categoryList = []
    const category = this.props.products.map(item => {
      if (item.boardType === 'long') {
        categoryList.push(item)
      }
      return categoryList
    })
    return (
      <div className="shiftDown">
        <h3 className="center">Endless Summer in Town</h3>
        <ProductCategory categoryList={categoryList} />
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

export default connect(mapState, mapDispatch)(LongBoards)
