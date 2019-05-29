const router = require('express').Router()
const {Order, OrderItem} = require('../db/models')
// const {isLoggedIn, isRightUser, hasRightToAccessOrder} = require('./utils')
module.exports = router

router.put('/', async (req, res, next) => {
  try {
    const price = Number(req.body.orderInfo.price)
    const quantity = Number(req.body.orderInfo.quantity)
    const productId = Number(req.body.orderInfo.productId)
    const orderId = Number(req.body.orderInfo.orderId)
    const subTotal = Number(req.body.orderInfo.subTotal)

    let orderInfo = {price, quantity, productId, orderId, subTotal}
    let updateOrderItem
    let newOrderItem

    let currentOrder = await Order.findById(orderId)

    let oldOrderItem = await OrderItem.findOne({
      where: {productId, orderId}
    })

    if (!oldOrderItem) {
      newOrderItem = await OrderItem.create(orderInfo)
    } else if (oldOrderItem) {
      updateOrderItem = await oldOrderItem.update({
        productId: productId,
        quantity: quantity,
        subTotal: subTotal
      })
    }

    res.json(updateOrderItem)
  } catch (err) {
    next(err)
  }
})

router.put('/quantity', async (req, res, next) => {
  try {
    const productId = req.body.productId
    const quantity = req.body.quantity
    const subTotal = req.body.subTotal
    const orderId = req.body.orderId

    console.log(req.body.quantity)

    let oldQuantity = await OrderItem.findOne({
      where: {productId, orderId}
    })

    let updateQTYItem = await oldQuantity.update({
      productId: productId,
      quantity: quantity,
      subTotal: subTotal
    })
    console.log(updateQTYItem.dataValues)
    res.json(updateQTYItem)
  } catch (err) {
    next(err)
  }
})

router.put('/remove', async (req, res, next) => {
  try {
    const orderId = req.body.orderId
    const productId = req.body.productId

    await OrderItem.destroy({
      where: {orderId, productId}
    })
    res.json({}).end()
  } catch (err) {
    next(err)
  }
})
