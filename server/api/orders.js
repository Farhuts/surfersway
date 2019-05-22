const router = require('express').Router()
const {Order, OrderItem, Product} = require('../db/models')
// const {isLoggedIn, hasRightToAccessOrder} = require('./utils')
module.exports = router

// api/orders/myCart
router.get('/myCart', async (req, res, next) => {
  try {
    const findUser = req.user
      ? {userId: req.user.id, status: 'cart'}
      : {sessionId: req.session.id, status: 'cart'}

    let userOrder = await Order.findOne({
      where: findUser,
      include: [{model: Product}]
    })

    let userItemInCart = await OrderItem.findAll({
      where: {orderId: userOrder.id},
      order: [['createdAt', 'ASC']]
    })
    let userCart = {userOrder, userItemInCart}
    // console.log("FROM GET", userItemInCart.map(item => {
    //   return item.dataValues
    // }))
    return res.json(userCart)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const findUser = req.user
      ? {userId: req.user.id, status: 'cart'}
      : {sessionId: req.session.id, status: 'cart'}
    console.log(
      'FROM POST',
      'Req,user =>',
      req.user,
      'SESSIONs =>',
      req.session.passport
    )
    // userId = req.session.passport.user
    let currentOrder = await Order.findOne({
      where: findUser,
      include: [{model: Product}]
    })
    if (!currentOrder) {
      currentOrder = await Order.create(findUser)
    }
    let orderItems = await OrderItem.findAll({
      where: {orderId: currentOrder.id}
    })
    let order = {currentOrder, orderItems}
    return res.json(order)
    // }
  } catch (err) {
    next(err)
  }
})
