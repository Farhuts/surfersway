const router = require('express').Router()
const {Order, OrderItem, Product} = require('../db/models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const paypal = require('paypal-rest-sdk')
const key = require('../config/key')
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
    return res.json(userCart)
  } catch (err) {
    next(err)
  }
})

router.get('/myCartExpired', async (req, res, next) => {
  try {
    let sessionOrderId
    let sessionInOrderItem

    // today
    let today = new Date() + ''
    today = today.slice(7, 15)

    // find all the guest users
    let expiredSession = await Order.findAll({
      where: {
        userId: null,
        status: 'cart'
      }
    })

    console.log('expiredSession', expiredSession)

    let dateGuestOrder = expiredSession
      .map(order => {
        return order.dataValues.createdAt
      })
      .join()
      .slice(7, 15)

    console.log('dateGuestOrder', dateGuestOrder)

    if (today !== dateGuestOrder) {
      // find guest Order id
      sessionOrderId = expiredSession.map(order => {
        return order.dataValues.id
      })
      console.log('sessionOrderId', sessionOrderId)

      // find guest id in OrderItem
      sessionInOrderItem = await OrderItem.findAll({
        where: {orderId: sessionOrderId}
      })

      console.log('sessionInOrderItem', sessionInOrderItem)
      // delete guest
      await Order.destroy({
        where: {
          id: sessionOrderId,
          status: {
            [Op.ne]: 'complete'
          }
        }
      })
    }
    return res.json({})
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const findUser = req.user
      ? {userId: req.user.id, status: 'cart'}
      : {sessionId: req.session.id, status: 'cart'}

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
  } catch (err) {
    next(err)
  }
})
