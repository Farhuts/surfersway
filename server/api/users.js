const router = require('express').Router()
const {User, Order, OrderItem, Product} = require('../db/models')
module.exports = router

function isAuthenticated(req, res, next) {
  if (req.user && req.user.isAdmin === true) {
    return next()
  }
  res.redirect('/')
}

router.get('/', isAuthenticated, async (req, res, next) => {
  try {
    let users = await User.findAll({
      attributes: ['id', 'email', 'userName']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})
