const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  status: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['cancelled', 'processing', 'complete', 'cart']]
    }
  },
  total: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0
    }
  },
  sessionId: {
    type: Sequelize.STRING
  }
})

module.exports = Order
