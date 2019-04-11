const User = require('./user')
const Product = require('./product')
const Order = require('./order')
const OrderItem = require('./orderItem')

Order.belongsTo(User)
User.hasMany(Order)

Order.belongsToMany(Product, {through: {model: OrderItem}})
Product.belongsToMany(Order, {through: {model: OrderItem}})

module.exports = {
  User,
  Product,
  Order,
  OrderItem
}
