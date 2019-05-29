const router = require('express').Router()
const {Order, OrderItem} = require('../db/models')
const key = require('../config/key')
const SECRET_KEY = key.stripe.clientSecret
const stripe = require('stripe')(SECRET_KEY)

module.exports = router

router.post('/checkout', async (req, res, next) => {
  const stripeToken = req.body.stripeToken
  const {id, products} = req.body.user

  let productInfo = products.map(product => {
    return {
      productId: product.id,
      subTotal: product.orderItem.subTotal,
      shipped: product.shipped
    }
  })

  let amount = productInfo
    .map(totalSub => {
      return totalSub.subTotal
    })
    .reduce((sum, item) => sum + item, 0)

  const cart = await Order.findOne({
    where: {id}
  })
  await cart.update({status: 'complete', total: amount})

  const orders = await OrderItem.findAll({
    where: {
      orderId: id
    }
  })
  await orders.forEach(item => {
    item.update({shipped: true})
  })

  stripe.charges.create(
    {
      amount: amount * 100,
      description: 'Sample Charge',
      currency: 'usd',
      source: stripeToken
    },
    (err, charge) => {
      // console.log("Charge", charge);
      if (err) res.send({success: false, message: 'Error'})
      else res.send({success: true, message: 'Yaii'})
    }
  )
})
