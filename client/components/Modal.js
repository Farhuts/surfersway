import React from 'react'

const Modal = ({show, productDetails, state, history}) => {
  // console.log('PROPS', props);
  let showHideClassName = show ? 'modal display-block' : 'modal display-none'
  // let name = productDetails.name
  // let qty = state.quantity
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="container center">
          you added an item into your cart
          <button onClick={() => history.push('/products')}>continue</button>
          <button onClick={() => history.push('/orders/myCart')}>Cart</button>
        </div>
      </section>
    </div>
  )
}

export default Modal
