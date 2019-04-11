const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.json(products)
  } catch (err) {
    next(err)
  }
})

// api/products/:productId
router.get('/:productId', async (req, res, next) => {
  try {
    const productId = req.params.productId
    const product = await Product.findById(productId)
    res.json(product)
  } catch (err) {
    next(err)
  }
})
