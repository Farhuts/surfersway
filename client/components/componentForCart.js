import React from 'react'

// component for cart
const ComponentForCart = ({
  ordersInCart,
  changeQuantity,
  deleteItem,
  getProductInfo,
  history
}) => {
  let grandSubTotal = 0
  let hide = true
  let showhideclassname = hide ? 'hide' : 'show'
  let qtyBtn = 'qtyBtn'

  let orderDetails =
    ordersInCart && ordersInCart.length ? (
      ordersInCart.map(item => {
        let product = getProductInfo(item.productId)[0]
        let orderId = item.orderId
        let productId = product.id
        let quantity = item.quantity
        let subTotal = item.subTotal
        grandSubTotal += subTotal
        let price = item.price
        let limit = price * product.stock
        const increment = () => {
          if (subTotal === limit) {
            return subTotal
          }
          return (subTotal += price)
        }
        if (item.quantity === 1) qtyBtn = 'qtyBtnOne'
        else qtyBtn = 'qtyBtn'
        return (
          <div key={item.productId}>
            {(showhideclassname = !hide)}
            <div>
              <img className="responsive-img cartImg" src={product.imageUrl} />
            </div>
            <div className="productImg">
              {product.name}
              <div className="divQty">
                QTY:
                <button
                  className={qtyBtn}
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
                  className="qtyBtn"
                  onClick={() =>
                    changeQuantity(
                      productId,
                      increment(),
                      (quantity += 1 && quantity !== product.stock),
                      orderId
                    )
                  }
                >
                  +
                </button>
              </div>
              <div>
                <p className="priceAndDelete">Price: ${item.price}</p>
                <p className="priceAndDelete">
                  I don't need it
                  <button
                    className="deleteQtyBtn"
                    onClick={() => deleteItem(orderId, productId)}
                  >
                    {' '}
                    X{' '}
                  </button>
                </p>
              </div>
              <hr className="cart" />
            </div>
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
        <h5 className="subTotal">SubTotal: ${grandSubTotal}</h5>
        <button
          className="waves-effect pink lighten-1 btn-large right cartBtn"
          onClick={() => history.push('/checkout')}
        >
          Checkout
        </button>
        <button
          className="waves-effect waves lighten-1 btn-large right cartBtn"
          onClick={() => history.push('/products')}
        >
          Continue
        </button>
      </div>
    </div>
  )
}
export default ComponentForCart
