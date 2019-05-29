import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getProductsThunk} from '../store/productStore'
import ProductCategory from './productCategory'

class ShortBoards extends Component {
  componentDidMount() {
    this.props.getProductsThunkDispatch()
  }

  render() {
    const categoryList = []
    const category = this.props.products.map(item => {
      if (item.description === 'short') {
        categoryList.push(item)
      }
      return categoryList
    })
    return (
      <div className="shiftDown">
        <h3 className="center">Fast & Furious</h3>
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

export default connect(mapState, mapDispatch)(ShortBoards)

// import React from 'react'
// import Products from './Products'
// import {Link} from 'react-router-dom'
//
// const ShortBoards = ({shortList}) => {
//   return (
//       <div className="shiftDown">
//         <h3 className="center">Beginner Friendly</h3>
//           <div className="row">{shortList.map(product => {
//             return (
//               <div key={product.id}>
//                 <Link to={`/products/` + product.id}>
//                   <Products product={product} />
//                 </Link>
//               </div>
//             )
//           })
//         }
//       </div>
//     </div>
//     )
//   }
//
// export default ShortBoards
//
