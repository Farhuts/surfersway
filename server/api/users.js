const router = require('express').Router()
const {User, Order, OrderItem, Product} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'email', 'userName']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})
