import React from 'react'

// component for cart
const ComponentForCart = props => {
  const ordersInCart = props.ordersInCart
  const changeQuantity = props.changeQuantity
  const deleteItem = props.deleteItem
  const getProductInfo = props.getProductInfo
  const history = props.history

  let orderDetails =
    ordersInCart && ordersInCart.length ? (
      ordersInCart.map(item => {
        let product = getProductInfo(item.productId)[0]
        let orderId = item.orderId
        let productId = product.id
        let quantity = item.quantity
        let subTotal = item.subTotal
        let price = item.price

        return (
          <div className="container" key={item.productId}>
            <p>
              Name {product.name}, QTY:
              <button
                onClick={() =>
                  changeQuantity(productId, subTotal - price, (quantity -= 1))
                }
              >
                -
              </button>
              {item.quantity}
              <button
                onClick={() =>
                  changeQuantity(productId, subTotal + price, (quantity += 1))
                }
              >
                +
              </button>
              Price ${item.price} - subTotal {item.subTotal}
              <button onClick={() => deleteItem(orderId, productId)}>
                {' '}
                X{' '}
              </button>
            </p>
            <hr className="cart" />
          </div>
        )
      })
    ) : (
      <div className="container">
        <h4>Your shooping cart is empty</h4>
        <button
          className="waves-effect waves lighten-1 btn-large right"
          onClick={() => history.push('/products')}
        >
          Get some bords
        </button>
      </div>
    )
  return (
    <div className="container">
      {orderDetails}
      <button
        className="waves-effect waves lighten-1 btn-large right"
        onClick={() => history.push('/products')}
      >
        Continue
      </button>
    </div>
  )
}
export default ComponentForCart
