const router = require('express').Router()
const {User, Order, OrderItem, Product} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    let users = await User.findAll({
      attributes: ['id', 'email', 'userName']
    })
    // if(!users) {
    //   users = await User.create({
    //     where: {
    //       email: "sample@gmail.com",
    //       userName: 'guest'
    //     }
    //   })
    // }
    res.json(users)
  } catch (err) {
    next(err)
  }
})
