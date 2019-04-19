const router = require('express').Router()
const {Order, OrderItem, Product} = require('../db/models')
// const {isLoggedIn, hasRightToAccessOrder} = require('./utils')
module.exports = router

// api/orders/myCart
router.get('/myCart', async (req, res, next) => {
  try {
    const userId = req.session.passport.user
    const userOrder = await Order.findOne({
      where: {userId, status: 'cart'},
      include: [{model: Product}]
    })
    let userItemInCart = await OrderItem.findAll({
      where: {orderId: userOrder.id},
      order: [['createdAt', 'DESC']]
    })
    let userCart = {userOrder, userItemInCart}
    res.json(userCart)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const userId = req.session.passport.user
    let currentOrder = await Order.findOne({
      where: {userId, status: 'cart'},
      include: [{model: Product}]
    })
    if (!currentOrder) {
      currentOrder = await Order.create({userId, status: 'cart'})
    }
    let orderItems = await OrderItem.findAll({
      where: {orderId: currentOrder.id}
    })
    let order = {currentOrder, orderItems}
    res.json(order)
  } catch (err) {
    next(err)
  }
})
