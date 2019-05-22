// const router = require('express').Router()
// const {Orders, Products, OrderItems} = require('../db/models')
// const SECRET_KEY = process.env.SECRET_KEY
// const stripe = require('stripe')(SECRET_KEY)
// module.exports = router
//
// router.post('/', (req, res, next) => {
//   stripe.charges.create(req.body, (stripeErr, stripeRes) => {
//     stripeErr
//       ? res.status(500).send({error: stripeErr})
//       : res.status(200).send({success: stripeRes})
//   })
// })
//
// router.put('/:cartId', async (req, res, next) => {
//   try {
//     const cart = await Orders.findOne({
//       where: {id: req.params.cartId},
//       include: [
//         {
//           model: Products,
//           attributes: ['id', 'price']
//         }
//       ]
//     })
//
//     cart.products.forEach(async product => {
//       await OrderItems.update(
//         {
//           price: product.price
//         },
//         {
//           where: {
//             orderId: cart.id,
//             productId: product.id
//           }
//         }
//       )
//     })
//
//     await cart.update({status: 'complete', total: req.body.amt})
//     res.sendStatus(200)
//   } catch (error) {
//     next(error)
//   }
// })
