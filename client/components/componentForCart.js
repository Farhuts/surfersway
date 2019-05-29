import React from 'react'

// component for cart
const ComponentForCart = props => {
  const ordersInCart = props.ordersInCart
  const changeQuantity = props.changeQuantity
  const deleteItem = props.deleteItem
  const getProductInfo = props.getProductInfo
  const history = props.history
  let hide = true
  let showhideclassname = hide ? 'hide' : 'show'

  let orderDetails =
    ordersInCart && ordersInCart.length ? (
      ordersInCart.map(item => {
        let product = getProductInfo(item.productId)[0]
        let orderId = item.orderId
        let stock = product.stock
        let productId = product.id
        let quantity = item.quantity
        let subTotal = item.subTotal
        let price = item.price
        let limit = price * stock
        const increment = () => {
          if (subTotal === limit) {
            return subTotal
          }
          return (subTotal += price)
        }
        return (
          <div className="container" key={item.productId}>
            {(showhideclassname = !hide)}
            <p>
              Name {product.name}, QTY:
              <button
                onClick={() =>
                  changeQuantity(
                    productId,
                    subTotal - price,
                    (quantity -= 1),
                    orderId
                  )
                }
              >
                -
              </button>
              {item.quantity}
              <button
                onClick={() =>
                  changeQuantity(
                    productId,
                    increment(),
                    (quantity += 1 && quantity !== stock),
                    orderId
                  )
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
        <h4>Your shopping cart is empty</h4>
        <button
          className="waves-effect waves lighten-1 btn-large right"
          onClick={() => history.push('/products')}
        >
          Get some bords
        </button>
        {hide}
      </div>
    )
  return (
    <div className="container">
      {orderDetails}
      <div className={showhideclassname}>
        <button
          className="waves-effect pink lighten-1 btn-large right"
          onClick={() => history.push('/checkout')}
        >
          Checkout
        </button>
        <button
          className="waves-effect waves lighten-1 btn-large right"
          onClick={() => history.push('/products')}
        >
          Continue
        </button>
      </div>
    </div>
  )
}
export default ComponentForCart
